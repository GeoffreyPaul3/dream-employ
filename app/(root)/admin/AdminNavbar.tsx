"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminNavbar() {
  const { user, signOut } = useClerk();
  const router = useRouter();

  return (
    <div className="px-3">
      <div className="m-auto flex h-10 max-w-5xl items-center justify-between gap-2">
        <Link href="/admin" className="font-semibold underline">
          <Button variant="outline" className="font-semibold text-md">
            Admin Dashboard
          </Button>
        </Link>
        <div className="space-x-2">
          <UserButton />
        </div>
      </div>
    </div>
  );
}
