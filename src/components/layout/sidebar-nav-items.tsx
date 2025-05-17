
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutGrid, Laptop, Newspaper, Link2, User } from 'lucide-react'; // Changed Briefcase to LayoutGrid, removed HomeIcon
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Projects', icon: LayoutGrid }, // Changed icon from Briefcase to LayoutGrid
  { href: '/about', label: 'About Me', icon: User },
  { href: '/work', label: 'Work', icon: Laptop },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/links', label: 'Links', icon: Link2 },
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
