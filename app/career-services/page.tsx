import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "Career & Professional Services | LiftmyGrade",
  description: "Project-based professional document writing and career support services.",
};

export default function CareerServicesPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar theme="light" hideLinks />

      {/* Hero Section */}
      <section className="pt-[160px] pb-16 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <SectionLabel>Professional Services</SectionLabel>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#171717] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Career & Professional Support.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Our career services are project-based and shaped entirely by your brief — there's no country to choose or admissions cycle to follow. You bring the goal; we build the document. Every engagement starts with a free consultation.
          </p>
        </div>
      </section>

      {/* Free Consult Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-neutral-100">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <SectionLabel>Step One</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-6 mt-4">
              Free Consultation
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">
              No cost, no commitment — we scope your project first. Share your goal through our short consultation form. Our specialists review it and reach out to understand the scope, discuss approach and turnaround, and confirm what success looks like for you — all before any paid work begins.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors">
              Tell us what you need
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-[#F9F9F9] border border-neutral-100 p-12 rounded-[3rem] shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 text-[180px] font-extrabold text-neutral-200/50 pointer-events-none select-none leading-none">
                01
              </div>
              <div className="w-16 h-16 bg-white border border-neutral-200 rounded-2xl flex items-center justify-center mb-8 relative z-10 text-blue-600 shadow-sm">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4 relative z-10">We scope it perfectly.</h3>
              <p className="text-neutral-600 leading-relaxed text-lg relative z-10">
                You won't pay for what you don't need. Our free consultation ensures we understand exactly what the final document needs to accomplish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F9F9] border-y border-neutral-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <SectionLabel>Step Two</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-6 mt-4">
              How Every Project Runs
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              A simple, transparent five-stage cycle for each deliverable. We work iteratively until the document feels perfectly right.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { n: "01", title: "Brief", desc: "You share your goal, materials, and any references. We agree on scope and timeline." },
              { n: "02", title: "Discovery", desc: "We dig into your background, voice, and audience to gather everything the piece needs." },
              { n: "03", title: "Drafting", desc: "Our specialists write a first draft tailored to your goal and target audience." },
              { n: "04", title: "Revision", desc: "You review and give feedback; we refine until the piece feels right." },
              { n: "05", title: "Finalisation", desc: "We deliver the polished, ready-to-use final version in your preferred format." }
            ].map((step, i) => (
              <div key={i} className="bg-white border border-neutral-100 p-8 md:p-10 rounded-[2.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl font-extrabold text-neutral-200 mb-6">{step.n}</div>
                <h4 className="text-2xl font-bold text-[#171717] mb-4">{step.title}</h4>
                <p className="text-neutral-600 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl mb-16">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-6 mt-4">
            Services Available
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Pick one or combine several — each follows the cycle above.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {[
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>, title: "Résumé & CV", desc: "Built from scratch or a full edit and optimisation of your existing résumé — structured to land interviews." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M16 17v-4"/></svg>, title: "LinkedIn Profile", desc: "Complete build-out — headline, About section, experience, and keyword positioning for visibility." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6M9 11h.01M15 11h.01"/></svg>, title: "Company SOP", desc: "Corporate statement of purpose and operating documentation, written clearly and to standard." },
            { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>, title: "Grant Writing", desc: "Structured, persuasive proposals tailored to the requirements of funding bodies and programs." }
          ].map((svc, i) => (
            <div key={i} className="bg-white border border-neutral-200 p-8 rounded-[2.5rem] hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
              <div className="w-14 h-14 bg-[#F9F9F9] rounded-2xl flex items-center justify-center mb-8 text-[#171717] group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#171717] mb-4">{svc.title}</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">{svc.desc}</p>
            </div>
          ))}

          <div className="bg-[#050B1D] text-white border border-neutral-800 p-8 rounded-[2.5rem] md:col-span-2 lg:col-span-2 shadow-2xl relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full" />
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white relative z-10 border border-white/20">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3ZM11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">PR Writing</h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl relative z-10">Professional communications across formats — written for the right audience and channel.</p>
            <div className="flex flex-wrap gap-3 relative z-10">
              {["Press releases", "Media advisories", "Fact sheets", "White papers", "Case studies", "Social media posts"].map((tag) => (
                <span key={tag} className="bg-white/10 border border-white/20 text-white/90 text-sm font-semibold px-4 py-2 rounded-xl backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 text-center border-t border-neutral-100">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold text-[#171717] mt-6 mb-6 tracking-tight">Ready to build your document?</h2>
          <p className="text-neutral-600 text-xl mb-10 max-w-2xl mx-auto">Tell us about your project and we'll come back with a tailored plan — no cost, no commitment.</p>
          <Link href="/#contact" className="inline-flex items-center gap-3 bg-[#171717] text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl">
            Book My Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
