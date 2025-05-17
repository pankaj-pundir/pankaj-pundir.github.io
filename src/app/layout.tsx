
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarFooter, SidebarTrigger } from '@/components/ui/sidebar';
import SidebarNavItems from '@/components/layout/sidebar-nav-items';
import AppLogo from '@/components/layout/app-logo';
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Rss, Facebook, Navigation } from 'lucide-react'; // Using Navigation for Skype as generic
import { AuthProvider, AuthButton } from '@/contexts/auth-context';
import { userInfo } from '@/lib/data'; // Import userInfo to access social links

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `FolioForge - ${userInfo.name}`,
  description: `Personal portfolio of ${userInfo.name}, showcasing projects, work, and blog.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <SidebarProvider defaultOpen={false}> {/* Sidebar hidden by default */}
            <Sidebar variant="sidebar" collapsible="icon" className="shadow-lg">
              <SidebarHeader className="p-4 items-center">
                <AppLogo />
                <div className="flex-grow" />
                <SidebarTrigger className="md:hidden" />
              </SidebarHeader>
              <SidebarContent>
                <SidebarNavItems />
              </SidebarContent>
              <SidebarFooter className="p-4 mt-auto space-y-2">
                <AuthButton /> {/* Login/Logout Button */}
                <div className="flex space-x-1 justify-center group-data-[collapsible=icon]:hidden">
                  {userInfo.socials.github && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={userInfo.socials.github} target="_blank" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {userInfo.socials.linkedin && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={userInfo.socials.linkedin} target="_blank" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {userInfo.socials.twitter && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={userInfo.socials.twitter} target="_blank" aria-label="Twitter">
                        <Twitter className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                   {userInfo.socials.facebook && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={userInfo.socials.facebook} target="_blank" aria-label="Facebook">
                        <Facebook className="h-5 w-5" />
                      </Link>
                    </Button>
                  )}
                  {userInfo.socials.skype && (
                     <Button variant="ghost" size="icon" asChild>
                       <Link href={userInfo.socials.skype} target="_blank" aria-label="Skype">
                         {/* Using a generic icon as direct Skype icon might not be in Lucide */}
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
                       </Link>
                     </Button>
                   )}
                  {userInfo.socials.medium && (
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={userInfo.socials.medium} target="_blank" aria-label="Medium Blog">
                        <Rss className="h-5 w-5" /> {/* Using Rss as a generic blog icon */}
                      </Link>
                    </Button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2 group-data-[collapsible=icon]:hidden">
                  © {new Date().getFullYear()} {userInfo.name}
                </p>
              </SidebarFooter>
            </Sidebar>
            <SidebarInset>
              <main className="min-h-screen p-4 md:p-8">
                {children}
              </main>
            </SidebarInset>
          </SidebarProvider>
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
