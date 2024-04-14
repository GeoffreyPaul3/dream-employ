import JobFilterSidebar from "@/components/shared/JobFilterSidebar";
import JobListItem from "@/components/shared/JobListItem";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="space-y-5">
          <h1 className="h1-bold">Welcome to Dream Employ.</h1>
          <p className="text-muted-foreground p-regular-20 md:p-regular-24">
            Explore thousands of job postings from Malawi's best employers. Take
            the next step toward your success today!
          </p>
          <Button
            size="lg"
            asChild
            className="button bg-blue-500 hover:bg-blue-400 w-full sm:w-fit"
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
        />
      </div>
      <section id="jobs" className="my-8">
        <h2 className="h2-bold">
          Trust by <br /> Thousands of Jobs
        </h2>
        <div className="flex flex-col md:flex-row gap-8 my-8">
          <JobFilterSidebar />
          <div className="grow space-y-4 ">
            {jobs.map((job) => (
              <JobListItem job={job} key={job.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
