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
        <div className="space-y-6">
          <div className="border rounded-lg p-4 overflow-hidden shadow-md transition-all hover:shadow-lg">
            <h3 className="font-medium">Basic Listing</h3>
            <p className="text-muted-foreground p-regular-20 md:p-regular-24">
              The nominal fee for basic job listings is MWK150,000.00 per month,
              which allows posting up to 5 job listings per month.
            </p>
          </div>
          <div className="border rounded-lg p-4 overflow-hidden shadow-md transition-all hover:shadow-lg">
            <h3 className="font-medium">Premium Listing</h3>
            <p className="text-muted-foreground p-regular-20 md:p-regular-24">
              Upgrade to a premium listing for enhanced visibility and
              additional features. The premium plan is available for MWK350,000
              per month, offering unlimited job postings.
            </p>
          </div>
        </div>
        <p className="text-muted-foreground p-regular-20 md:p-regular-24">
          Upon successful submission of the job listing, employers will be
          prompted to make the payment for the approval process. We accept
          various modes of payment, including bank transfers, and mobile money.
          Once the payment is processed, our team will promptly review the
          listing and approve it for publication on our website.
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="h2-medium">Accepted Payment Methods</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 shadow-md transition-all hover:shadow-lg">
            <h3 className="font-medium text-xl mb-4">Bank Transfers</h3>
            <p className="text-muted-foreground p-regular-20 md:p-regular-24 mb-2">
              To make a payment via bank transfer, please use the following
              details:
            </p>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Name of Account: Geoffrey Paul</li>
              <li>Bank Account Number: 1170000140895</li>
              <li>Branch Name: FDH Mulanje Branch</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 shadow-md transition-all hover:shadow-lg">
            <h3 className="font-medium text-xl mb-4">Mobile Money</h3>
            <p className="text-muted-foreground p-regular-20 md:p-regular-24 mb-2">
              To make a payment via mobile money, please use the following
              details:
            </p>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Phone Number: 0992-132-195</li>
              <li>Name: Geoffrey Paul</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
