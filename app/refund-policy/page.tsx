import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";

export const metadata = {
  title: "Refund & Cancellation Policy | LiftmyGrade",
  description: "Learn about our refund and cancellation policies for paid services at LiftmyGrade.",
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar theme="light" hideLinks />

      <div className="flex-1 max-w-4xl mx-auto w-full px-6 md:px-12 pt-[160px] pb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-4">
          Refund & Cancellation Policy
        </h1>
        <div className="flex flex-wrap gap-6 text-sm text-neutral-500 font-medium mb-12 border-b border-neutral-100 pb-8">
          <span>Effective date: <strong className="text-[#171717]">8 June 2026</strong></span>
          <span>Last updated: <strong className="text-[#171717]">8 June 2026</strong></span>
        </div>

        <div className="text-neutral-600 text-base md:text-lg leading-relaxed space-y-12">
          
          <p className="text-xl text-[#171717] font-medium leading-relaxed">
            This Refund & Cancellation Policy explains when and how refunds may be available for paid services provided by LiftmyGrade LLP ("LiftmyGrade", "we", "us", or "our"). Please read it together with our Privacy Policy & Disclaimer. By engaging our paid services, you agree to the terms set out below.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">1.</span> Free Services
            </h2>
            <p>
              Several of our offerings are provided free of charge — including the Readiness Report, country shortlisting, the detailed roadmap, consultation calls, and analysis of an existing document. As no payment is taken for these, they are not subject to any refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">2.</span> Our Approach — Revisions First
            </h2>
            <p>
              We want you to be satisfied with what we deliver. All revisions are free, and our first step in resolving any concern with a document or deliverable is to revise and refine it until it meets the agreed scope. We encourage you to raise any concerns with your mentor or point of contact so we can address them directly before requesting a refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">3.</span> When a Refund May Apply
            </h2>
            <p className="mb-4">A refund may be considered in circumstances such as:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-[#171717]">
              <li>You cancel a paid service before any substantive work has begun;</li>
              <li>We are unable to commence or deliver a service you have paid for;</li>
              <li>A service was charged in error or duplicated.</li>
            </ul>
            <p>
              Where work has already begun, any refund (if applicable) will be assessed on a pro-rata basis, reflecting the time, effort, and stage of work already completed. Requests made within 7 days of payment and before any substantive work has begun are eligible for a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">4.</span> Non-Refundable Items
            </h2>
            <p className="mb-4">The following are generally non-refundable:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#171717]">
              <li>Services that have been completed and delivered;</li>
              <li>Work already in progress, to the extent of the work performed;</li>
              <li>Third-party fees paid on your behalf or by you directly — for example, university application fees, examination fees, journal or publication fees, and indexing or processing charges;</li>
              <li>Publication assistance and other partner-led services once the process has been initiated (see Section 5);</li>
              <li>Any service explicitly marked as non-refundable at the time of engagement.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">5.</span> Publication & Partner-Led Services
            </h2>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-6">
              <p className="text-blue-900 text-sm md:text-base font-medium">
                Publication assistance may involve partner-led systems and external journals. Editorial, peer-review, acceptance, and indexing decisions rest entirely with the respective journals and indexing agencies, not with LiftmyGrade. Indexing status (including Scopus or related databases) may change over time, and we do not guarantee acceptance, publication, or permanent indexing status.
              </p>
            </div>
            <p>
              Because these services depend on third parties and external fees, amounts paid towards publication or partner-led services are non-refundable once the process has been initiated. Any third-party or journal fees are subject to the policies of those third parties and are outside our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">6.</span> Outcomes Are Not Grounds for Refund
            </h2>
            <p>
              Our fees are for the professional guidance and document-support services we provide, not for any particular result. Refunds are not available on the basis of an outcome decided by a third party — including a rejection of admission, denial of a visa, an unsuccessful scholarship or funding application, a test score, or a journal's decision not to publish. These decisions are made solely by the relevant institutions, authorities, and bodies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">7.</span> How to Request a Refund
            </h2>
            <p>
              To request a refund, contact us at <a href="mailto:info@liftmygrade.com" className="text-blue-600 font-semibold hover:underline">info@liftmygrade.com</a> with your name, the service in question, your payment reference, and the reason for your request. We aim to acknowledge requests within 3 business days and to communicate a decision within 7 business days of receiving the necessary information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">8.</span> Approved Refunds — Method & Timing
            </h2>
            <p>
              Where a refund is approved, it will be processed to the original payment method (or another method we agree with you) within 10 business days. The time for the amount to reach you may vary depending on your bank or payment provider. Applicable payment-gateway and transaction charges are non-refundable and may be deducted from the refunded amount where permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">9.</span> Cancellation by LiftmyGrade
            </h2>
            <p>
              In the rare event that we are unable to provide a paid service for which you have paid, we will inform you and refund the amount paid for the undelivered portion of that service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#171717] mb-4 flex items-baseline gap-3 tracking-tight">
              <span className="text-blue-600 text-lg">10.</span> Changes to This Policy
            </h2>
            <p>
              We may update this Policy from time to time. The current version will always be available on this page with a revised "Last updated" date. The policy applicable to your engagement is the one in effect at the time of your payment.
            </p>
          </section>


          
        </div>
      </div>

      <Footer />
    </main>
  );
}
