import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight, Check } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "Pricing & Programs | LiftmyGrade",
  description: "Clear programs, transparent pricing. Structured programs for every stage of your journey.",
};

const prWritingServices = [
  { name: "Press Release", desc: "Announcement-ready, media-formatted", price: "$60", unit: "" },
  { name: "Media Advisory", desc: "Concise event/press invitation", price: "$45", unit: "" },
  { name: "Fact Sheet", desc: "Key facts, figures & quick reference", price: "$50", unit: "" },
  { name: "Social Media Posts", desc: "Pack of 5, on-brand & platform-ready", price: "$50", unit: "/ 5 posts" },
  { name: "Case Study", desc: "Narrative, results-driven, ~1–2 pages", price: "$120", unit: "" },
  { name: "White Paper", desc: "In-depth, researched, authoritative", price: "$250", unit: "" }
];

export default function PricingPage() {
  return (
    <main className="bg-[#F6F8F7] min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar theme="light" hideLinks />

      {/* Hero Section */}
      <section className="pt-[160px] pb-16 px-6 md:px-12 w-full bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#171717] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Clear Programs,<br className="hidden md:block" />Transparent Pricing.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed mb-12">
            Structured programs for every stage of your journey — from a <Link href="/readiness-assessment" className="text-blue-600 hover:underline">free readiness report</Link> to full admission execution, research support, and <Link href="/career-services" className="text-blue-600 hover:underline">career branding</Link>. No hidden costs; full pricing is confirmed at your free consultation.
          </p>
        </div>
      </section>

      {/* Reusing the Pricing Component from Landing Page for the top packages */}
      {/* We could import Pricing.tsx but it has its own padding/sections, so we inline the cards here for seamless layout */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel>Programs & Support Systems</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#171717] mt-4 tracking-tight">
            Structured Academic Growth
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="relative flex flex-col p-8 lg:p-10 rounded-[2rem] bg-white border-2 border-blue-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] lg:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md whitespace-nowrap">
              Most Recommended
            </div>
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">[ STARTER ]</span>
              <h3 className="text-2xl font-bold text-[#171717] leading-tight mt-2">Global Study Readiness Report</h3>
              <div className="mt-4 pb-6 border-b border-neutral-100">
                <span className="text-3xl font-extrabold text-[#171717] tracking-tight">FREE</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Ideal For</span>
                <p className="text-sm text-neutral-700 leading-snug">Bachelor's, Master's, PhD early planning</p>
              </div>
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Outcome</span>
                <p className="text-sm font-medium text-[#171717] leading-snug">Lead Qualification + Personalized Direction</p>
              </div>
            </div>
            <div className="flex-1">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Includes</span>
              <ul className="space-y-3 mb-8">
                {["Profile Evaluation", "Country & Course Alignment", "Goal-Based Strategy (PR, Career, Research)", "Gap Analysis", "Personalized Roadmap"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-none bg-blue-100 text-blue-600"><Check className="w-3 h-3" /></div>
                    <span className="text-[14px] text-neutral-700 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core */}
          <div className="relative flex flex-col p-8 lg:p-10 rounded-[2rem] bg-white border border-neutral-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">[ CORE ]</span>
              <h3 className="text-2xl font-bold text-[#171717] leading-tight mt-2">Admission Strategy & Execution</h3>
              <div className="mt-4 pb-6 border-b border-neutral-100">
                <span className="text-3xl font-extrabold text-[#171717] tracking-tight">$350</span><span className="text-sm font-medium text-neutral-500 ml-1">/ program</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <div><span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Ideal For</span><p className="text-sm text-neutral-700 leading-snug">Bachelor's and Master's applicants</p></div>
              <div><span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Outcome</span><p className="text-sm font-medium text-[#171717] leading-snug">Stronger applications to top universities</p></div>
            </div>
            <div className="flex-1">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Includes</span>
              <ul className="space-y-3 mb-8">
                {["5 SOPs / Admission Essays", "1 Academic CV & 1 LOR", "Strategy Consultation", "University Selection Strategy", "IELTS/TOEFL/GRE Planning", "Visa & Financial Planning Guidance"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3"><div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-none bg-neutral-100 text-neutral-600"><Check className="w-3 h-3" /></div><span className="text-[14px] text-neutral-700 leading-snug">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tailored */}
          <div className="relative flex flex-col p-8 lg:p-10 rounded-[2rem] bg-white border border-neutral-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">[ TAILORED ]</span>
              <h3 className="text-2xl font-bold text-[#171717] leading-tight mt-2">Customized Admission Program</h3>
              <div className="mt-4 pb-6 border-b border-neutral-100">
                <span className="text-2xl font-extrabold text-[#171717] tracking-tight">Consultation Based</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <div><span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Ideal For</span><p className="text-sm text-neutral-700 leading-snug">Complex profiles & niche programs</p></div>
              <div><span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Outcome</span><p className="text-sm font-medium text-[#171717] leading-snug">Customized admission roadmap</p></div>
            </div>
            <div className="flex-1">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Includes</span>
              <ul className="space-y-3 mb-8">
                {["Extended University Applications", "Multiple Country Planning", "Scholarship Strategy", "Additional Essays & Documentation", "Profile Building Support", "Specialized Application Requirements"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3"><div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-none bg-neutral-100 text-neutral-600"><Check className="w-3 h-3" /></div><span className="text-[14px] text-neutral-700 leading-snug">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specialized & Career */}
        <div className="flex flex-col items-center text-center mt-24 mb-16">
          <SectionLabel>Specialized & Career</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#171717] mt-4 tracking-tight">
            Research & Career Programs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Research */}
          <div className="relative flex flex-col p-8 lg:p-10 rounded-[2rem] bg-white border border-neutral-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">[ ACADEMIC ]</span>
              <h3 className="text-2xl font-bold text-[#171717] leading-tight mt-2">Research & Publication Support</h3>
              <div className="mt-4 pb-6 border-b border-neutral-100">
                <span className="text-2xl font-extrabold text-[#171717] tracking-tight">Consultation Based</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <div><span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Ideal For</span><p className="text-sm text-neutral-700 leading-snug">Students building a research-heavy profile</p></div>
              <div><span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Outcome</span><p className="text-sm font-medium text-[#171717] leading-snug">Stronger research portfolio</p></div>
            </div>
            <div className="flex-1">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Includes</span>
              <ul className="space-y-3 mb-8">
                {["Research Mentorship", "Paper Structuring", "Journal Publication Support", "Academic Profile Development", "Scopus, Google Scholar, UGC"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3"><div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-none bg-amber-50 text-amber-700"><Check className="w-3 h-3" /></div><span className="text-[14px] text-neutral-700 leading-snug">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Career */}
          <div className="relative flex flex-col p-8 lg:p-10 rounded-[2rem] bg-white border border-neutral-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
            <div className="mb-6 flex flex-col gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400">[ CAREER ]</span>
              <h3 className="text-2xl font-bold text-[#171717] leading-tight mt-2">Global Career Branding Program</h3>
              <div className="mt-4 pb-6 border-b border-neutral-100">
                <span className="text-3xl font-extrabold text-[#171717] tracking-tight">$200</span><span className="text-sm font-medium text-neutral-500 ml-1">/ program</span>
              </div>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <div><span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Ideal For</span><p className="text-sm text-neutral-700 leading-snug">Graduates planning post-study work and PR</p></div>
              <div><span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Outcome</span><p className="text-sm font-medium text-[#171717] leading-snug">Career-ready before & after admission</p></div>
            </div>
            <div className="flex-1">
              <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Includes</span>
              <ul className="space-y-3 mb-8">
                {["Resume / CV fix", "LinkedIn profile + 5 posts", "Interview Preparation", "Country-Specific Job Strategy"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3"><div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-none bg-amber-50 text-amber-700"><Check className="w-3 h-3" /></div><span className="text-[14px] text-neutral-700 leading-snug">{f}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PR WRITING À La Carte */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-neutral-200">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel>À La Carte</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#171717] mt-4 tracking-tight">
            PR & Communications Writing
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-neutral-200 rounded-[2rem] overflow-hidden shadow-sm">
          {prWritingServices.map((service, idx) => (
            <div key={idx} className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 md:p-8 ${idx !== prWritingServices.length - 1 ? 'border-b border-neutral-100' : ''} ${idx % 2 === 1 ? 'bg-neutral-50/50' : 'bg-white'}`}>
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#171717]">{service.name}</h4>
                  <p className="text-sm text-neutral-600 mt-1">{service.desc}</p>
                </div>
              </div>
              <div className="text-left sm:text-right sm:ml-4 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-[#171717]">{service.price}</span>
                {service.unit && <span className="text-xs font-semibold text-neutral-500">{service.unit}</span>}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-neutral-500 mt-6 max-w-2xl mx-auto">
          Suggested starting prices. Bundles and ongoing retainers available on request.
        </p>

        <div className="mt-16 bg-white border border-dashed border-neutral-300 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto text-sm text-neutral-600 leading-relaxed text-center">
          <strong className="text-neutral-900">Good to know:</strong> All paid deliverables are original, plagiarism-free and AI-free (with Turnitin reports) and include free revisions. Prices shown are per program / item and may be subject to applicable taxes. See our Refund & Cancellation Policy and Privacy Policy & Disclaimer for full terms.
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 w-full bg-blue-600">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Start with your free Readiness Report</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl">
            Not sure which program fits? Take the free assessment and we'll recommend the right path — no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/readiness-assessment" className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-neutral-50 transition-colors">
              Take the Free Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
