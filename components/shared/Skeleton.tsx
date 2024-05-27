// components/skeletons.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonHero() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div className="space-y-5">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-6 w-full md:w-2/3" />
        <Skeleton className="h-12 w-1/2" />
      </div>
      <Skeleton className="h-[70vh] max-h-[70vh] w-full md:w-1/2" />
    </div>
  );
}

export function SkeletonSidebar() {
  return (
    <div className="w-full md:w-1/4 space-y-5">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-6 w-1/2" />
    </div>
  );
}

export function SkeletonResults() {
  return (
    <div className="w-full md:w-3/4 space-y-5">
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-2/3" />
      <Skeleton className="h-6 w-1/2" />
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-6 w-2/3" />
    </div>
  );
}

export function SkeletonImage() {
  return <Skeleton className="h-[70vh] max-h-[70vh] w-full md:w-1/2" />;
}
