import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function AcademicJourney() {
  const stages = [
    {
      id: "01",
      title: "Readiness Report",
      desc: "An honest snapshot of your eligibility, early strengths, visible gaps, and where you realistically stand.",
      image: "https://images.unsplash.com/photo-1707299651093-1c1448a7d993?q=80&w=1266&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "02",
      title: "One-to-One Consultation",
      desc: "We go beyond the form—your aspirations, budget, timeline, and intent. We understand the person behind the profile.",
      image: "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "03",
      title: "Country Shortlisting",
      desc: "Together we filter down to the top 1–3 countries that best fit your goal, budget, and profile.",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80",
    },
    {
      id: "04",
      title: "Detailed Roadmap",
      desc: "A specific plan for your destinations: timeline, intakes, tests, indicative budget, and document checklist.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
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
                View Process
                <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full text-blue-600">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Single Line Alternating Layout */}
        <div className="hidden lg:block max-w-[1100px] xl:max-w-[1200px] mx-auto relative py-20">
          
          {/* Continuous Straight Line */}
          <div className="absolute top-1/2 left-[calc(-50vw+50%)] right-[calc(-50vw+50%)] h-[2px] bg-neutral-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-4 gap-0">
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
                    className={`absolute left-1/2 -translate-x-1/2 w-[340px] xl:w-[400px] bg-white rounded-3xl p-5 border border-neutral-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 z-10 group-hover:border-blue-500/30 group-hover:shadow-[0_8px_30px_-6px_rgba(59,130,246,0.12)] ${
                      isTop ? 'bottom-[calc(50%+30px)]' : 'top-[calc(50%+30px)]'
                    }`}
                  >
                    <div className="flex flex-row gap-5 items-center text-left">
                      {/* Image Left Side */}
                      <div className="relative w-24 h-24 xl:w-28 xl:h-28 rounded-2xl overflow-hidden shrink-0 border border-neutral-100">
                        <Image src={stage.image} alt={stage.title} fill unoptimized className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      
                      {/* Text Right Side */}
                      <div className="flex flex-col gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 transition-colors duration-300 group-hover:text-blue-500">
                          Phase {stage.id}
                        </span>
                        <h3 className="text-[15px] xl:text-[16px] font-bold text-neutral-900 leading-tight">
                          {stage.title}
                        </h3>
                        <p className="text-[12px] xl:text-[13px] text-neutral-600 leading-relaxed line-clamp-3">
                          {stage.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="lg:hidden w-full overflow-hidden pt-8">
          <div className="relative flex flex-col gap-8 w-full">
            {stages.map((stage, i) => (
              <div key={stage.id} className="relative w-full group pl-10">
                {/* Mobile Dot */}
                <div className="absolute left-[11px] top-[40px] w-[10px] h-[10px] rounded-full bg-neutral-200 group-hover:bg-blue-500 z-10 transition-colors" />

                {/* Mobile Line Segment (hide on last item) */}
                {i < stages.length - 1 && (
                  <div className="absolute left-[15px] top-[46px] bottom-[-40px] w-px border-l-2 border-dashed border-neutral-300 z-0" />
                )}

                {/* Card */}
                <div
                  className="relative z-10 w-full bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm"
                >
                  <div className="flex flex-row gap-4 items-center text-left">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-neutral-100">
                      <Image src={stage.image} alt={stage.title} fill unoptimized className="object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">
                        Phase {stage.id}
                      </span>
                      <h3 className="text-[13px] font-bold text-neutral-900 leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-[10px] text-neutral-600 leading-snug line-clamp-2">
                        {stage.desc}
                      </p>
                    </div>
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
