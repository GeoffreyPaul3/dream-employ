import JobListItem from "@/components/shared/JobListItem";
import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function AdminPage() {
  const unapprovedJobs = await prisma.job.findMany({
    where: { approved: false },
  });

  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <h1 className="text-center h1-bold">Admin Dashboard</h1>
      <section className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Unapproved jobs:</h2>
        {unapprovedJobs.map((job) => (
          <Link key={job.id} href={`/admin/jobs/${job.slug}`} className="block">
            <JobListItem job={job} />
          </Link>
        ))}
        {unapprovedJobs.length === 0 && (
          <p className="text-muted-foreground p-regular-20 md:p-regular-24">
            No unapproved jobs
          </p>
        )}
      </section>
    </main>
  );
}