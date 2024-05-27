import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import { Contact } from "./Contact";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="w-full m-auto flex max-w-5xl items-center justify-between px-3 py-5">
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
        <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
          <Link href="/">
            <Button variant="ghost" className="font-semibold text-md">
              Home
            </Button>
          </Link>
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
          <Link href="/pricing">
            <Button variant="ghost" className="font-semibold text-md">
              Pricing
            </Button>
          </Link>
        </div>
        <Button
          asChild
          className="bg-blue-500 hover:bg-blue-400 hidden md:flex text-md"
        >
          <Link href="/jobs/new">Post a job</Link>
        </Button>
        <MobileNav />
      </nav>
    </header>
  );
}
