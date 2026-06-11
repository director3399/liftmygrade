import React from "react";
import Image from "next/image";
import { ArrowRight, DiagonalArrow } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function Mentorship() {
  return (
    <section className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Why LiftMyGrade</SectionLabel>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-end mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#171717] mt-4 sm:mt-0">
            Guiding Students Through
            <br />
            <span className="relative inline-block whitespace-nowrap px-1">
              {/* Place SVG first in DOM so it renders underneath */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-3 sm:h-4 text-blue-500"
                viewBox="0 0 100 20"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 5 15 C 30 5, 70 5, 95 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="relative">Structured</span>
            </span> Global Pathways.
          </h2>
          <div className="flex flex-col items-start">
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6 sm:mb-8">
              Most students start thinking about studying abroad only when applications open. By then, they often realize they lack research experience, strong extracurriculars, publications, or a clear strategy. LiftMyGrade helps students prepare years in advance through structured mentorship, profile building, research guidance, and admission planning.
            </p>
            <a href="/readiness-assessment" className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-black hover:opacity-70 transition-all pb-1">
              Start Your Journey <DiagonalArrow className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        <div className="relative rounded-[2rem] sm:rounded-4xl overflow-hidden flex flex-col justify-end min-h-[400px] sm:min-h-[300px] sm:aspect-[2.8/1]">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
            alt="International Academic Environment"
            fill
            className="object-cover grayscale-[0.2]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/70 to-black/30 z-10" />

          <div className="relative z-20 p-8 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 items-start md:items-end mt-16 sm:mt-auto">
            <div className="flex-1 border-l-2 border-blue-500/50 md:border-white/30 pl-6 sm:pl-8 md:first:border-none md:first:pl-0">
              <span className="block text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 sm:mb-2 tracking-tight">Long-Term</span>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white mb-2 sm:mb-3 font-medium">Academic Planning</span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-[280px]">From Class 10 to PhD, every stage is connected through a structured roadmap designed for long-term academic success.</p>
            </div>
            <div className="flex-1 border-l-2 border-blue-500/50 md:border-l md:border-white/30 pl-6 sm:pl-8">
              <span className="block text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 sm:mb-2 tracking-tight">Research &</span>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white mb-2 sm:mb-3 font-medium">Profile Building</span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-[280px]">Build a stronger academic profile through research projects, publications, competitions, and strategic positioning.</p>
            </div>
            <div className="flex-1 border-l-2 border-blue-500/50 md:border-l md:border-white/30 pl-6 sm:pl-8">
              <span className="block text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 sm:mb-2 tracking-tight">Beyond</span>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white mb-2 sm:mb-3 font-medium">Admissions</span>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-[280px]">We focus on admissions, research development, career readiness, and long-term academic growth—not just university applications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
