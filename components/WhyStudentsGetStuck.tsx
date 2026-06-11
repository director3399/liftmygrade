"use client";

import React, { useRef } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

import { ArrowRight } from "./Icons";

const cards = [
  {
    id: "01",
    title: "No Clear Roadmap",
    desc: "Many students don't know when to start preparing, which exams matter, or how to build a competitive academic profile.",
    actionText: "Get Your Custom Roadmap",
  },
  {
    id: "02",
    title: "Admission Without Positioning",
    desc: "Students often focus only on SOPs and applications while ignoring research experience, profile strength, and long-term academic planning.",
    actionText: "Build Your Academic Profile",
  },
  {
    id: "03",
    title: "Weak Research Profile",
    desc: "A lack of research projects, publications, and academic positioning reduces opportunities for scholarships, funding, and top universities.",
    actionText: "Start Publishing Research",
  }
];

const StickyCard = ({ card, index }: any) => {
  return (
    <div 
      className="static lg:sticky flex items-center justify-center w-full"
      style={{
        top: `calc(15vh + ${index * 120}px)`, 
      }}
    >
      <div className="w-full bg-[#F9F9F9] border border-neutral-100 rounded-4xl lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-sm mb-6 sm:mb-8 lg:mb-12 origin-top">
        <div className="mb-4 sm:mb-6">
          <span className="text-xs sm:text-sm font-semibold text-neutral-400 tracking-widest uppercase block mb-2">
            Challenge {card.id}
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] tracking-tight leading-tight">
            {card.title}
          </h3>
        </div>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 sm:mb-8">
          {card.desc}
        </p>
        <a href="/readiness-assessment" className="inline-flex items-center gap-3 bg-white border border-neutral-200 text-[#171717] px-5 py-3 sm:px-6 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold hover:border-neutral-300 transition-colors shadow-sm w-full sm:w-auto justify-center">
          {card.actionText}
          <span className="text-blue-600">
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default function WhyStudentsGetStuck() {
  return (
    <section className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white relative" id="challenges">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-24 max-w-4xl">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-4 sm:mt-6">
            Why Ambitious Students Get Stuck
            <br />
            <span className="text-neutral-400">On Their Global Academic Journey</span>
          </h2>
        </div>

        {/* Scroll Container */}
        <div className="relative flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 items-start">
          
          {/* Left Cards */}
          <div className="w-full lg:w-1/2 relative lg:pb-[10vh]">
            {cards.map((card, i) => (
              <StickyCard 
                key={card.id} 
                card={card} 
                index={i} 
              />
            ))}
          </div>

          {/* Right Image (Sticky) */}
          <div className="relative w-full lg:w-1/2 lg:sticky lg:top-[15vh] h-[300px] sm:h-[400px] lg:h-[70vh] rounded-4xl lg:rounded-[3rem] overflow-hidden order-first lg:order-last mb-8 sm:mb-12 lg:mb-0">
            <Image
              src="/wasg.png"
              alt="Student planning future"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
