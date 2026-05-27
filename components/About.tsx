import React from "react";
import Image from "next/image";
import { ArrowRight } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section className="py-24 px-12 bg-white" id="about">
      <SectionLabel>Mentorship</SectionLabel>

      <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-[#171717]">
          Guiding Students Through
          <br />
          Structured Global Pathways.
        </h2>
        <div className="flex flex-col items-start">
          <p className="text-lg text-neutral-700 leading-relaxed mb-8 max-w-lg">
            LiftmyGrade is a premium academic guidance platform designed to be your long-term partner in global growth. We provide structured, mentorship-driven pathways for students aiming for world-class universities.
          </p>
          <a href="#assessment" className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-transparent hover:border-black transition-all pb-1">
            Start Your Journey <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>

      <div className="relative rounded-4xl overflow-hidden aspect-video md:aspect-4/3">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
          alt="International Academic Environment"
          fill
          className="object-cover grayscale-[0.2]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent z-10" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end z-20">
          <div className="flex-1 border-l border-white/20 pl-8 first:border-none first:pl-0">
            <span className="block text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">1000+</span>
            <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">Students Guided</span>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px] font-light">We have guided hundreds of students through successful global academic admissions and research pathways.</p>
          </div>
          <div className="flex-1 border-l border-white/20 pl-8">
            <span className="block text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Expert</span>
            <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">Academic Mentorship</span>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px] font-light">Our ecosystem provides deep mentorship for research, publication support, and PhD readiness.</p>
          </div>
          <div className="flex-1 border-l border-white/20 pl-8">
            <span className="block text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Structured</span>
            <span className="block text-[10px] md:text-xs uppercase tracking-widest text-white/50 mb-3 font-medium">Long-Term Guidance</span>
            <p className="text-sm text-white/40 leading-relaxed max-w-[280px] font-light">A long-term academic growth platform designed to ensure your admission leads to career success.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
