'use client';

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-red-500" />
          <span className="text-xl font-bold">AidBrisk</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/guide">
            <Button variant="ghost">AI Guide</Button>
          </Link>
          
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}