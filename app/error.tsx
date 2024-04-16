"use client";

import Image from "next/image";

export default function Error() {
  return (
    <main className="m-auto my-10 max-w-5xl flex flex-col space-y-5 px-3 text-center">
      <h1 className="h1-bold">Error.</h1>
      <p className="text-muted-foreground p-regular-20 md:p-regular-24">
        An unexpected error occurred.
      </p>
      <Image
          src="/assets/error.svg"
          alt="error"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
        />
    </main>
  );
}
