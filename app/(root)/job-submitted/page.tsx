import Image from "next/image";

export default function Page() {
  return (
    <main className="m-auto my-10 max-w-5xl flex flex-col space-y-5 px-3 text-center">
      <h1 className="h1-bold">Job submitted</h1>
      <p className="text-muted-foreground p-regular-20 md:p-regular-24">
        Your job posting has been submitted and is currently pending approval.
      </p>
      <Image
        src="/assets/submit.svg"
        alt="error"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
      />
    </main>
  );
}
