import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "@/components/Icons";
import Link from "next/link";
import Highlighter from "@/components/Highlighter";

export const metadata = {
  title: "How We Work | LiftmyGrade",
  description: "Learn about the step-by-step process we take to build your global academic journey.",
};

export default function HowWeWorkPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar theme="light" hideLinks />

      {/* Hero Section */}
      <section className="pt-[160px] pb-16 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#171717] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            How We Work.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            As your <Highlighter>Academic, Research, Career & Strategic Communication Ecosystem</Highlighter>, every journey begins with a free, honest assessment. We help you decide <em className="text-[#171717] font-semibold not-italic">where</em> and <em className="text-[#171717] font-semibold not-italic">whether</em> to apply before any paid work starts, adapting the path for Bachelor's, Master's, PhDs, Research Support, and Career Branding.
          </p>
        </div>
      </section>

      {/* Free Funnel Section */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F9F9] border-y border-neutral-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.2] tracking-tight mb-4">
                Step One: Free Discovery
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Four guided stages, at no cost, the same for every applicant. This is how we map out exactly where you stand.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -left-6 -top-6 text-[120px] font-extrabold text-neutral-200 group-hover:text-blue-100 transition-colors pointer-events-none select-none">
                01
              </div>
              <div className="relative z-10 pt-14">
                <h3 className="text-2xl font-bold text-[#171717] mb-4">Readiness Form</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Generated from your <Link href="/readiness-assessment" className="text-blue-600 hover:underline">readiness assessment form</Link> — an honest snapshot of your eligibility for your chosen level, your early strengths, visible gaps, and where you realistically stand.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -left-6 -top-6 text-[120px] font-extrabold text-neutral-200 group-hover:text-blue-100 transition-colors pointer-events-none select-none">
                02
              </div>
              <div className="relative z-10 pt-14">
                <h3 className="text-2xl font-bold text-[#171717] mb-4">Consultation Call</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  We go beyond the form — your aspirations, budget, timeline, and long-term intent. This is where we understand the person behind the profile.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -left-6 -top-6 text-[120px] font-extrabold text-neutral-200 group-hover:text-blue-100 transition-colors pointer-events-none select-none">
                03
              </div>
              <div className="relative z-10 pt-14">
                <h3 className="text-2xl font-bold text-[#171717] mb-4">Country Shortlisting</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  Together we filter down to the <strong className="text-[#171717]">top 1–3 countries</strong> that best fit your goal, budget, and profile — a focused, realistic list rather than a scattershot one.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute -left-6 -top-6 text-[120px] font-extrabold text-neutral-200 group-hover:text-blue-100 transition-colors pointer-events-none select-none">
                04
              </div>
              <div className="relative z-10 pt-14">
                <h3 className="text-2xl font-bold text-[#171717] mb-4">Detailed Roadmap</h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  A country-specific plan for your shortlisted destinations: application timeline, intake cycles, required tests, indicative budget, and a complete document checklist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gate Section */}
      <section className="py-24 px-6 md:px-12 bg-white border-b border-neutral-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-100">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12h8M12 8v8"/><circle cx="12" cy="12" r="9"/></svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-6 tracking-tight">The Pivot: We Begin Building</h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Once your roadmap is in hand, we hold a final consultation call to confirm direction and finalise your country. From this point, our tailored drafting and support services begin — this is where our paid work starts.
          </p>
        </div>
      </section>

      {/* Paid Tracks Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-4">Step Two: Your Pathway</h2>
            <p className="text-neutral-600 text-lg">The plan now adapts to your program. Choose your academic track below.</p>
          </div>

          <div className="space-y-12">
            {/* Track 1 */}
            <div className="static lg:sticky top-[100px] w-full bg-[#F9F9F9] border border-neutral-100 rounded-4xl lg:rounded-[2.5rem] p-8 sm:p-10 lg:p-16 shadow-sm mb-12 origin-top">
              <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
                <div className="lg:col-span-2">
                  <SectionLabel>Undergraduate & Postgraduate</SectionLabel>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#171717] mb-6 tracking-tight leading-[1.1] mt-6">
                    Bachelor's & Master's Track
                  </h3>
                  <div className="w-full h-px bg-neutral-200 my-8" />
                  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-sm">
                    <strong className="block text-blue-800 uppercase tracking-wider text-xs mb-2">Humanities Add-On</strong>
                    <p className="text-blue-900/80 leading-relaxed">For humanities applicants, a publication can be a genuine differentiator. We offer optional publication support to strengthen your profile — an additional edge, not a requirement.</p>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-neutral-200">
                    {[
                      { title: "Application Document Drafting", desc: "SOP, Letter(s) of Recommendation, and CV/résumé — drafted and tailored to each target program." },
                      { title: "English & Admission Tests", desc: "Guidance on IELTS / TOEFL / PTE / Duolingo, plus SAT/ACT (UG) or GRE/GMAT/LSAT (PG) as your programs require." },
                      { title: "Visa & Formalities Support", desc: "Financial documentation, visa-specific statements (e.g. genuine-student statement), and interview preparation." },
                      { title: "Submission & Follow-Through", desc: "Application assembly, deadline tracking across intake cycles, and offer-stage guidance." }
                    ].map((item, i) => (
                      <div key={i} className="relative pl-10">
                        <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                        </div>
                        <h4 className="text-xl font-bold text-[#171717] mb-2">{item.title}</h4>
                        <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Track 2 */}
            <div className="static lg:sticky top-[120px] w-full bg-white border border-neutral-100 rounded-4xl lg:rounded-[2.5rem] p-8 sm:p-10 lg:p-16 shadow-xl mb-12 origin-top">
              <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
                <div className="lg:col-span-2">
                  <SectionLabel>Doctoral & Research</SectionLabel>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#171717] mb-6 tracking-tight leading-[1.1] mt-6">
                    PhD & Research Track
                  </h3>
                  <div className="w-full h-px bg-neutral-200 my-8" />
                  <p className="text-neutral-600 text-lg leading-relaxed">
                    Designed specifically for high-level academic positioning, securing funding, and navigating professor outreach.
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <div className="space-y-8 relative before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-neutral-200">
                    {[
                      { title: "Research Crystallisation", desc: "Narrow your broad interest into a viable, fundable research question and area." },
                      { title: "Supervisor & Program Mapping", desc: "Identify aligned supervisors, labs, and programs; build a ranked target list." },
                      { title: "Core Document Drafting", desc: "Research proposal, academic CV, statement of research interest, research-focused LORs, and writing sample where required." },
                      { title: "Professor Outreach Strategy", desc: "Personalised first-contact emails referencing each supervisor's work — sent after your proposal is ready and well ahead of the intake." },
                      { title: "Communication Strategy", desc: "Managing the ongoing dialogue: reply handling, follow-up cadence, parallel conversations, and interview correspondence." },
                      { title: "Funding, Interviews & Offer", desc: "Assistantship / fellowship / scholarship applications, interview prep, then offer → visa → enrolment." }
                    ].map((item, i) => (
                      <div key={i} className="relative pl-10">
                        <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border border-neutral-200 shadow-sm flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-[#171717]" />
                        </div>
                        <h4 className="text-xl font-bold text-[#171717] mb-2">{item.title}</h4>
                        <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto">
          <SectionLabel>Get Started</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold text-[#171717] mt-6 mb-6 tracking-tight">Start your readiness journey today.</h2>
          <p className="text-neutral-600 text-xl mb-10 max-w-2xl mx-auto">Take the free assessment, and within 48 hours our mentors will map out where you stand and what comes next.</p>
          <Link href="/readiness-assessment" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors">
            Take the Free Assessment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
