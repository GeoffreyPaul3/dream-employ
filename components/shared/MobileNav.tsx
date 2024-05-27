"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <nav className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="align-middle" onClick={() => setOpen(true)}>
          <span className="text-2xl">
            <Menu />
          </span>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 md:hidden">
          <div className="flex items-center">
            <Link href="/" onClick={handleClose}>
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
          </div>
          <Separator className="border border-gray-50" />
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link href="/" onClick={handleClose}>
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/about" onClick={handleClose}>
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    About
                  </Button>
                </Link>
                <Link href="/jobs/new" onClick={handleClose}>
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Post a Job
                  </Button>
                </Link>
                <Link href="/how-it-works" onClick={handleClose}>
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    How It Works
                  </Button>
                </Link>
                <Link href="/pricing" onClick={handleClose}>
                  <Button variant="ghost" className="font-semibold text-md">
                    Pricing
                  </Button>
                </Link>
                <Link href="/privacy" onClick={handleClose}>
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Privacy Policy
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
