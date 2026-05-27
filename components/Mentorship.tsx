import React from "react";
import Image from "next/image";
import { ArrowRight, DiagonalArrow } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function Mentorship() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto">
        <SectionLabel>Mentorship</SectionLabel>

        <div className="grid md:grid-cols-2 gap-12 items-end mb-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#171717]">
            Guiding Students Through
            <br />
            <span className="relative inline-block whitespace-nowrap px-1">
              {/* Place SVG first in DOM so it renders underneath */}
              <svg
                className="absolute -bottom-1 left-0 w-full h-4 text-blue-500"
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
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Most students struggle because they don’t know what to prioritize, when to prepare, or how to build a strong profile. LiftmyGrade provides structured mentorship to help students move step-by-step with clarity and confidence.
            </p>
            <a href="#assessment" className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-black hover:opacity-70 transition-all pb-1">
              Start Your Journey <DiagonalArrow className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </div>

        <div className="relative rounded-4xl overflow-hidden aspect-21/9 md:aspect-[2.8/1] min-h-[300px]">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
            alt="International Academic Environment"
            fill
            className="object-cover grayscale-[0.2]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/60 to-black/30 z-10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end z-20">
            <div className="flex-1 border-l border-white/30 pl-8 first:border-none first:pl-0">
              <span className="block text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">1000+</span>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white mb-3 font-medium">Students Guided</span>
              <p className="text-sm text-white/90 leading-relaxed max-w-[280px]">We have guided hundreds of students through successful global academic admissions and research pathways.</p>
            </div>
            <div className="flex-1 border-l border-white/30 pl-8">
              <span className="block text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Expert</span>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white mb-3 font-medium">Academic Mentorship</span>
              <p className="text-sm text-white/90 leading-relaxed max-w-[280px]">Our ecosystem provides deep mentorship for research, publication support, and PhD readiness.</p>
            </div>
            <div className="flex-1 border-l border-white/30 pl-8">
              <span className="block text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Structured</span>
              <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white mb-3 font-medium">Long-Term Guidance</span>
              <p className="text-sm text-white/90 leading-relaxed max-w-[280px]">A long-term academic growth platform designed to ensure your admission leads to career success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
