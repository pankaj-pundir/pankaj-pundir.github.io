'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Laptop, Newspaper, Link2, Palette, Code } from 'lucide-react';
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: Briefcase },
  { href: '/work', label: 'Work', icon: Laptop },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/links', label: 'Links', icon: Link2 },
  // { href: '/theme-generator', label: 'Theme AI', icon: Palette }, // Theme generator will be part of home page
];

export default function SidebarNavItems() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} legacyBehavior passHref>
            <SidebarMenuButton
              className={cn(
                pathname === item.href ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'hover:bg-sidebar-accent/80'
              )}
              isActive={pathname === item.href}
              tooltip={item.label}
            >
              <item.icon className="h-5 w-5" />
              <span className="group-data-[collapsible=icon]:hidden">{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
