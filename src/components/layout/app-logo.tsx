import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="FolioForge Home">
      <Sparkles className="h-7 w-7 text-primary group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 transition-all" />
      <h1 className="text-xl font-bold text-foreground group-data-[collapsible=icon]:hidden transition-opacity">
        FolioForge
      </h1>
    </Link>
  );
}
