import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
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
        <Button asChild className="bg-blue-500 hover:bg-blue-400">
          <Link href="/jobs/new">Post a job</Link>
        </Button>
      </nav>
    </header>
  );
}
