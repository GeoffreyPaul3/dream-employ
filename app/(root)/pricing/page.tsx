import Pricing from "@/components/shared/Pricing";
import Image from "next/image";

export default function Page() {
  return (
    <main className="m-auto my-10 max-w-5xl flex flex-col space-y-5 px-3 text-center">
      <h1 className="h1-bold">Pricing Plans</h1>
      <p className="text-muted-foreground p-regular-20 md:p-regular-24">
        Choose the best plan that suits your hiring needs and budget. Our plans
        offer a range of features to help you find the right candidates
        efficiently.
      </p>
      <Pricing />
    </main>
  );
}
