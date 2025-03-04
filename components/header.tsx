"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { usePathname } from "next/navigation";
import { LockKeyhole } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <LockKeyhole className="h-6 w-6 text-primary" />
            <span className="text-2xl font-bold">Password Manager</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/passwords"
              className={`text-md font-medium transition-colors hover:text-primary ${
                pathname === "/passwords"
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              Passwords
            </Link>
            <Link
              href="/cards"
              className={`text-md font-medium transition-colors hover:text-primary ${
                pathname === "/cards" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Cards
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
