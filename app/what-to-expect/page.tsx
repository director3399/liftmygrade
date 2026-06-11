import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight } from "@/components/Icons";
import Link from "next/link";

export const metadata = {
  title: "What You Can Expect | LiftmyGrade",
  description: "What you can expect after joining our ecosystem - free discovery, our promises, and step-by-step guidance.",
};

export default function WhatToExpectPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar theme="light" hideLinks />

      {/* Hero Section */}
      <section className="pt-[160px] pb-16 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#171717] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            What You Can Expect After Joining Our Ecosystem.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            When you join LiftmyGrade, you're not buying a one-off document — you're stepping into a support system built around you. Here's exactly what we commit to, from your very first day with us.
          </p>
        </div>
      </section>

      {/* Free As Standard */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F9F9] border-y border-neutral-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <SectionLabel>Free as Standard</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-6 mt-4">
              Value Built In — At No Cost
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              The groundwork is on us, so you can decide with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                title: "Readiness Report", 
                desc: "An honest assessment of where you stand, generated from your profile — no cost, no commitment.", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 15l2 2 4-4"/></svg>,
                image: "https://images.unsplash.com/photo-1778873750399-338b94f7feda?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              { 
                title: "Country Shortlisting", 
                desc: "We narrow down your best-fit top 1–3 countries together, matched to your goals and budget.", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Z"/></svg>,
                image: "https://images.unsplash.com/photo-1746292183273-3816f78c0ed5?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              { 
                title: "Detailed Roadmap", 
                desc: "A complete, country-specific plan — timelines, tests, intakes, funding outlook, and document checklist.", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h12"/><circle cx="20" cy="18" r="2"/></svg>,
                image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              { 
                title: "2 Consultation Calls", 
                desc: "Two no-cost one-to-one sessions with our team to discuss your goals and direction.", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>,
                image: "https://images.unsplash.com/photo-1713946598501-d6b32e7c2464?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              { 
                title: "Document Analysis", 
                desc: "A complimentary review and analysis report of any résumé, SOP, or document you already have.", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M9 11h4M11 9v4"/></svg>,
                image: "https://images.unsplash.com/photo-1635859890085-ec8cb5466806?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              { 
                title: "Free Revisions", 
                desc: "All revisions are free — we keep refining your documents until they're exactly right, at no extra cost.", 
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5"/></svg>,
                image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-neutral-100 rounded-[2.5rem] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                {/* Image Section */}
                <div className="w-full h-48 bg-neutral-100 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center mb-8 text-green-600 shrink-0">
                    <div className="w-6 h-6">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#171717] mb-3 flex items-center gap-3">
                    {item.title}
                    <span className="text-[10px] font-bold tracking-wider text-green-700 bg-green-100 px-2.5 py-1 rounded-md uppercase shrink-0">Free</span>
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <SectionLabel>Our Promise</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-6 mt-4">
              How We Treat Your Work
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              The standards we hold ourselves to on every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Timely Delivery", desc: "Every deliverable arrives on an agreed timeline, so application deadlines are never at risk.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> },
              { title: "End-to-End Support", desc: "From your first enquiry to final submission, we stay with you across the entire journey.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11"/></svg> },
              { title: "Quick Assistance", desc: "Fast, responsive replies whenever you have a question or need a hand — no long waits.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13 2-3 7h6l-3 7M5 13l3-7M16 9l3 7"/></svg> },
              { title: "Dedicated Mentor", desc: "A mentor assigned to guide, review, and support your profile at every stage.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg> },
              { title: "Next-Edge Documents", desc: "Modern, standout professional and career documents crafted to get noticed — never templated.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 2.5 5.5L20 11l-5.5 2.5L12 19l-2.5-5.5L4 11l5.5-2.5Z"/></svg> },
              { title: "Confidential & Secure", desc: "Your personal information and documents are handled with strict confidentiality, always.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6Z"/><path d="m9 12 2 2 4-4"/></svg> },
              { title: "Original & Authentic", desc: "Plagiarism-free and AI-free, written from scratch around your real story — backed by Turnitin AI & plagiarism reports.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M10 13l1.5 1.5L15 11"/></svg> },
              { title: "Transparent Pricing", desc: "Clear scope and costs agreed up front — no hidden charges. Refunds possible; please read our privacy policy.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 .3c0 1.7-2.5 2-2.5 3.7M12 17h.01"/></svg> },
              { title: "Publication Help", desc: "Support getting your work published in leading Scopus, Google Scholar & UGC-listed and other peer-reviewed journals.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/><path d="m9.5 9.5 1.8 1.8 3.2-3.6"/></svg> }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-neutral-100 p-8 rounded-[2.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center mb-8 text-neutral-700">
                  <div className="w-6 h-6">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* At Every Step */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F9F9] border-t border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <SectionLabel>At Every Step</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mb-6 mt-4">
              Guidance Through the Whole Journey
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              You're never left guessing what comes next.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Step-by-Step Guidance", desc: "Clear direction at each stage of your application, so you always know the next move.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/><path d="M3 6h2M3 12h2M3 18h2"/></svg> },
              { title: "Exam Guidance", desc: "Direction for IELTS, TOEFL, PTE, GRE, GMAT and any other tests your programs require.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg> },
              { title: "Visa & Formalities Help", desc: "Guidance on documentation, financial proofs, statements, and interview preparation.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg> },
              { title: "Deadline Tracking", desc: "We track every date and milestone across your intake cycle so nothing ever slips.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4"/></svg> },
              { title: "Honest, Realistic Advice", desc: "Straight answers about your prospects — we tell you what's realistic, not just what you'd like to hear.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"/><path d="M22 4 12 14.01l-3-3"/></svg> },
              { title: "One Ecosystem, Every Need", desc: "Undergraduate, postgraduate, PhD, and career support — all under one roof, with one trusted team.", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m7 14 3-4 3 2 4-6"/></svg> }
            ].map((item, i) => (
              <div key={i} className="bg-white border border-neutral-100 p-8 rounded-[2.5rem] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
                  <div className="w-6 h-6">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#171717] mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#171717] mt-6 mb-6 tracking-tight">A partner for the whole journey — not just a document</h2>
          <p className="text-neutral-600 text-xl mb-10 max-w-2xl mx-auto">From your first free report to your final submission, our commitment stays the same: clear guidance, honest advice, and work we're proud to put your name on.</p>
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
