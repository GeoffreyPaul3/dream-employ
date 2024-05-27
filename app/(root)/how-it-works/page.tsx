export default function HowItWorks() {
  return (
    <div className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <h1 className="h1-bold">How It Works</h1>
      <div className="space-y-2">
        <h2 className="h2-medium">1. Post Your Job for Free</h2>
        <p className="text-muted-foreground p-regular-20 md:p-regular-24">
          Employers can easily submit their job listings directly through our
          user-friendly frontend interface at no cost. Simply fill out the
          necessary details about the position, including job title,
          description, requirements, and contact information.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="h2-medium">2. Job Approval Process</h2>
        <p className="text-muted-foreground p-regular-20 md:p-regular-24">
          Once a job is submitted, our team will review the listing to ensure it
          meets our quality standards and guidelines. A nominal fee is required
          for the approval of the job listing to be listed on our website. This
          fee helps us maintain the integrity and relevance of the job board
          platform.
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="h2-medium">3. Payment and Approval</h2>
        <p className="text-muted-foreground p-regular-20 md:p-regular-24">
          Upon successful submission of the job listing, employers will be
          prompted to make the payment for the approval process. We accept
          various modes of payment, including bank transfers, and mobile money.
          Once the payment is processed, our team will promptly review the
          listing and approve it for publication on our website.
        </p>
      </div>
    </div>
  );
}
