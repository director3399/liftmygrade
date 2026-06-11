"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function AcademicJourney() {
  const stages = [
    {
      id: "01",
      title: "Readiness Report",
      desc: "An honest snapshot of your eligibility, early strengths, and visible gaps.",
    },
    {
      id: "02",
      title: "Consultation Call",
      desc: "Discuss aspirations, budget, timeline, and understand the person behind the profile.",
    },
    {
      id: "03",
      title: "Country Shortlisting",
      desc: "Filter down to the top 1–3 countries that best fit your goal, budget, and profile.",
    },
    {
      id: "04",
      title: "Detailed Roadmap",
      desc: "A country-specific plan with timelines, intakes, test requirements, and budget.",
    },
    {
      id: "05",
      title: "Document Drafting",
      desc: "Tailoring SOPs, LORs, and CVs precisely to your chosen target programs.",
    },
    {
      id: "06",
      title: "Exam & Visa Support",
      desc: "Guidance on language/admission tests and complete visa formality support.",
    },
    {
      id: "07",
      title: "Research Strategy",
      desc: "For PhDs: Proposal drafting, supervisor mapping, and personalized professor outreach.",
    },
    {
      id: "08",
      title: "Submission & Tracking",
      desc: "Application assembly, deadline tracking, and follow-through to final enrollment.",
    },
  ];





  return (
    <section className="py-16 sm:py-24 bg-white w-full overflow-hidden relative" id="journey">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div
              className="flex flex-col"
            >
              <div>
                <SectionLabel>Process</SectionLabel>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-4 md:mt-auto">
                How Our System Works
              </h2>
            </div>

            <div
              className="flex flex-col items-start justify-end"
            >
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 sm:mb-8">
                Navigate every stage of your academic growth with our comprehensive ecosystem, designed for long-term global success.
              </p>
              <a href="/how-we-work" className="inline-flex items-center gap-3 bg-blue-600 text-white! px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors">
                View Detailed Process
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full text-blue-600">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Single Line Alternating Layout */}
        <div className="hidden lg:block max-w-[1200px] mx-auto relative py-20">
          
          {/* Continuous Straight Line */}
          <div className="absolute top-1/2 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] h-[2px] bg-neutral-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-8 gap-0">
            {stages.map((stage, i) => {
              const isTop = i % 2 === 0;
              return (
                <div key={stage.id} className="relative flex justify-center h-[360px] group">
                  
                  {/* Progress Line (Hover effect connecting to next point) */}
                  {i < stages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-[2px] bg-blue-500 -translate-y-1/2 z-0 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  )}

                  {/* Dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full border-[3px] border-neutral-300 bg-white shadow-sm transition-all duration-300 z-20 group-hover:scale-125 group-hover:border-blue-500 group-hover:bg-white group-hover:shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />
                  
                  {/* Vertical Connector */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-[30px] bg-neutral-200 transition-colors duration-300 group-hover:bg-blue-500/40 ${isTop ? 'bottom-1/2' : 'top-1/2'}`} />
                  
                  {/* Card */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-[220px] bg-white rounded-2xl p-5 border border-neutral-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 z-10 group-hover:border-blue-500/30 group-hover:shadow-[0_8px_30px_-6px_rgba(59,130,246,0.12)] ${
                      isTop ? 'bottom-[calc(50%+30px)]' : 'top-[calc(50%+30px)]'
                    }`}
                  >
                    <div className="flex flex-col gap-2 items-center text-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 transition-colors duration-300 group-hover:text-blue-500">
                        Phase {stage.id}
                      </span>
                      <h3 className="text-[14px] font-semibold text-neutral-900 leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-[11px] text-neutral-600 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="lg:hidden w-full overflow-hidden pt-8 pl-4">
          <div className="relative flex flex-col gap-8 max-w-sm mx-auto">
            {stages.map((stage, i) => (
              <div key={stage.id} className="relative w-full group pl-10">
                {/* Mobile Dot */}
                <div className="absolute left-[11px] top-[30px] w-[10px] h-[10px] rounded-full bg-neutral-200 group-hover:bg-blue-500 z-10 transition-colors" />

                {/* Mobile Line Segment (hide on last item) */}
                {i < stages.length - 1 && (
                  <div className="absolute left-[15px] top-[36px] bottom-[-40px] w-px border-l-2 border-dashed border-neutral-300 z-0" />
                )}

                {/* Card */}
                <div
                  className="relative z-10 w-full bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
                      Phase {stage.id}
                    </span>
                    <h3 className="text-base font-semibold text-neutral-900 leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
