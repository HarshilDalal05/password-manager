"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { LockKeyhole } from "lucide-react";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <LockKeyhole className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Password Manager</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/passwords"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/passwords"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Passwords
            </Link>
            <Link
              href="/cards"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/cards" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Cards
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Link href="/">
            <Button variant="outline" size="sm">
              Home
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
