'use client';

import type { User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut } from 'firebase/auth';
import { Button } from '@/components/ui/button';
import { LogIn, LogOut, Loader2 } from 'lucide-react';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      // Firebase might not be initialized if config is missing
      console.warn("Firebase Auth is not initialized. Authentication will not work.");
      setLoading(false);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!auth) {
      console.error("Firebase Auth is not initialized. Cannot sign in.");
      // Optionally show a toast to the user
      return;
    }
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google", error);
      // Handle error (e.g., show toast)
    }
  };

  const signOut = async () => {
    if (!auth) {
      console.error("Firebase Auth is not initialized. Cannot sign out.");
      return;
    }
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
      // Handle error
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthButton() {
  const { user, signInWithGoogle, signOut, loading } = useAuth();

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled className="w-full justify-start group-data-[collapsible=icon]:justify-center">
        <Loader2 className="h-5 w-5 group-data-[collapsible=icon]:mr-0 mr-2 animate-spin" />
        <span className="group-data-[collapsible=icon]:hidden">Loading...</span>
      </Button>
    );
  }

  if (user) {
    return (
      <Button variant="ghost" size="sm" onClick={signOut} className="w-full justify-start group-data-[collapsible=icon]:justify-center">
        <LogOut className="h-5 w-5 group-data-[collapsible=icon]:mr-0 mr-2" />
        <span className="group-data-[collapsible=icon]:hidden">Logout</span>
      </Button>
    );
  }

  return (
    <Button variant="ghost" size="sm" onClick={signInWithGoogle} className="w-full justify-start group-data-[collapsible=icon]:justify-center">
      <LogIn className="h-5 w-5 group-data-[collapsible=icon]:mr-0 mr-2" />
      <span className="group-data-[collapsible=icon]:hidden">Login</span>
    </Button>
  );
}
