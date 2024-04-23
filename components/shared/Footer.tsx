import Image from "next/image";
import Link from "next/link";
import { Contact } from "./Contact";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/Logo.png"
                width={70}
                height={70}
                alt="Dream Employ logo"
              />
              <span className="text-2xl font-semibold text-blue-500 tracking-tight">
                Dream Employ
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Take the next step towards your future success today!
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about">
              <Button variant="ghost" className="font-semibold text-md">
                About
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button variant="ghost" className="font-semibold text-md">
                How It Works
              </Button>
            </Link>
            <Link href="/privacy">
              <Button variant="ghost" className="font-semibold text-md">
                Privacy Policy
              </Button>
            </Link>
              <Contact />
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dream Employ, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
