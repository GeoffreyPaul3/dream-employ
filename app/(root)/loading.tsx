// app/(root)/loading.tsx

import {
  SkeletonHero,
  SkeletonResults,
  SkeletonSidebar,
} from "@/components/shared/Skeleton";

export default function Loading() {
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      {/* Skeleton for the hero section */}
      <SkeletonHero />

      {/* Skeleton for the job section */}
      <section id="jobs" className="my-8">
        
        <div className="flex flex-col md:flex-row gap-8 my-8">
          <SkeletonSidebar />
          <SkeletonResults />
        </div>
      </section>
    </main>
  );
}
