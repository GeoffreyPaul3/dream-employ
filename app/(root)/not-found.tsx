import Image from "next/image";

export default function NotFound() {
  return (
    <main className="m-auto my-10 max-w-5xl flex flex-col space-y-5 px-3 text-center">
      <h1 className="h1-bold">Not Found</h1>
      <p className="text-muted-foreground p-regular-20 md:p-regular-24">
        Sorry, the page you are looking for does not exist.
      </p>
      <Image
        src="/assets/found.svg"
        alt="error"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
      />
    </main>
  );
}
