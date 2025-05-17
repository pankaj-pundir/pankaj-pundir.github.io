import { initializeApp, getApps, getApp, type FirebaseOptions } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore'; // Uncomment for Firestore integration later

// IMPORTANT: Your Firebase project configuration will be read from environment variables.
// Ensure you have a .env.local file with these values.
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let app;
if (!getApps().length) {
  if (!firebaseConfig.apiKey || !firebaseConfig.authDomain || !firebaseConfig.projectId) {
    console.warn("Firebase configuration is missing. Please set up your .env.local file with Firebase project credentials.");
    // You might want to throw an error or handle this case more gracefully depending on your app's needs
    // For now, we'll allow the app to continue, but auth/db will not work.
    app = null;
  } else {
    app = initializeApp(firebaseConfig);
  }
} else {
  app = getApp();
}

const auth = app ? getAuth(app) : null;
// const db = app ? getFirestore(app) : null; // Uncomment for Firestore integration later

export { app, auth /*, db */ };
