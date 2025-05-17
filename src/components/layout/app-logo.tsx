
import Link from 'next/link';

export default function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="FolioForge Home">
      <div className="flex items-center justify-center h-8 w-8 bg-primary text-primary-foreground rounded-md font-bold text-base leading-none group-data-[collapsible=icon]:h-8 group-data-[collapsible=icon]:w-8 group-data-[collapsible=icon]:text-base transition-all p-0.5">
        Pp
      </div>
      {/* The h1 element for "FolioForge" text has been removed */}
    </Link>
  );
}
