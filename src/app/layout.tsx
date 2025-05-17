import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider, Sidebar, SidebarInset, SidebarHeader, SidebarContent, SidebarFooter, SidebarTrigger } from '@/components/ui/sidebar';
import SidebarNavItems from '@/components/layout/sidebar-nav-items';
import AppLogo from '@/components/layout/app-logo';
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Rss } from 'lucide-react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FolioForge - Pankaj Pundir',
  description: 'Personal portfolio of Pankaj Pundir, showcasing projects, work, and blog.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider defaultOpen>
          <Sidebar variant="sidebar" collapsible="icon" className="shadow-lg">
            <SidebarHeader className="p-4 items-center">
              <AppLogo />
              <div className="flex-grow" />
              <SidebarTrigger className="md:hidden" />
            </SidebarHeader>
            <SidebarContent>
              <SidebarNavItems />
            </SidebarContent>
            <SidebarFooter className="p-4 mt-auto">
              <div className="flex space-x-2 justify-center group-data-[collapsible=icon]:hidden">
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://github.com/pankaj-pundir" target="_blank" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/pankajpundir/" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="https://twitter.com/PankajPundirEX" target="_blank" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </Link>
                </Button>
                 <Button variant="ghost" size="icon" asChild>
                  <Link href="https://medium.com/@pankajpundir" target="_blank" aria-label="Medium Blog">
                    <Rss className="h-5 w-5" /> {/* Using Rss as a generic blog icon */}
                  </Link>
                </Button>
              </div>
               <p className="text-xs text-muted-foreground text-center mt-2 group-data-[collapsible=icon]:hidden">
                © {new Date().getFullYear()} Pankaj Pundir
              </p>
            </SidebarFooter>
          </Sidebar>
          <SidebarInset>
            <main className="min-h-screen p-4 md:p-8">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
