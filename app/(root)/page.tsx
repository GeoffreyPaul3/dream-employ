// app/(root)/page.tsx
import { Suspense } from "react";
import JobFilterSidebar from "@/components/shared/JobFilterSidebar";
import JobResults from "@/components/shared/JobResults";
import { Button } from "@/components/ui/button";
import { JobFilterValues } from "@/lib/validation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  SkeletonHero,
  SkeletonImage,
  SkeletonResults,
  SkeletonSidebar,
} from "@/components/shared/Skeleton";

interface PageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} Jobs`
      : remote
        ? "Remote Jobs on Dream Employ."
        : "Find Your Next Job Match on Dream Employ.";
  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${getTitle({
      q,
      type,
      location,
      remote: remote === "true",
    })} | Dream Employ`,
  };
}

export default function Home({
  searchParams: { q, type, location, remote, page },
}: PageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <Suspense fallback={<SkeletonHero />}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="space-y-5">
            <h1 className="h1-bold">{getTitle(filterValues)}</h1>
            <p className="text-muted-foreground p-regular-20 md:p-regular-24">
              Explore thousands of job postings from the best employers in
              Malawi and beyond 
            </p>
            <Button
              size="lg"
              asChild
              className="bg-blue-500 hover:bg-blue-600 w-full sm:w-fit"
            >
              <Link href="#jobs">Search for Jobs</Link>
            </Button>
          </div>

          <Image
            src="/assets/job.png"
            alt="hero"
            width={500}
            height={500}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
            loading="lazy"
          />
        </div>
      </Suspense>
      <section id="jobs" className="my-8">
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Jobs
        </h2>
        <div className="flex flex-col md:flex-row gap-8 my-8">
          <JobFilterSidebar defaultValues={filterValues} />

          <Suspense fallback={<SkeletonResults />}>
            <JobResults
              filterValues={filterValues}
              page={page ? parseInt(page) : undefined}
            />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
