import { Button } from "@/components/ui/button";
import { LockKeyhole, ShieldCheck, CreditCard } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <LockKeyhole className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Password Manager</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/passwords">
              <Button variant="outline">View Passwords</Button>
            </Link>
            <Link href="/cards">
              <Button>View Cards</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Secure Your Digital Life
              </h1>
              <p className="text-xl text-muted-foreground">
                Store your passwords and cards securely with our password
                manager. Never forget a password again.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/passwords">
                  <Button size="lg">View Passwords</Button>
                </Link>
                <Link href="/cards">
                  <Button size="lg" variant="outline">
                    View Cards
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 shadow-sm">
                  <ShieldCheck className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">Password Storage</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Securely store and manage all your website passwords
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border bg-card p-6 shadow-sm">
                  <CreditCard className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">Card Storage</h3>
                  <p className="text-center text-sm text-muted-foreground">
                    Keep your credit and debit card information safe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
