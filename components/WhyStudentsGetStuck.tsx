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
  },
  {
    id: "04",
    title: "No Career Alignment",
    desc: "Students frequently choose countries and programs without considering future employability, PR pathways, or long-term career goals.",
    actionText: "Align Career & Education",
  },
];

const StickyCard = ({ card, index }: any) => {
  return (
    <div 
      className="sticky flex items-center justify-center w-full"
      style={{
        top: `calc(15vh + ${index * 120}px)`, 
      }}
    >
      <div className="w-full bg-[#F9F9F9] border border-neutral-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm mb-12 origin-top">
        <div className="mb-6">
          <span className="text-sm font-semibold text-neutral-400 tracking-widest uppercase block mb-2">
            Challenge {card.id}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#171717] tracking-tight leading-tight">
            {card.title}
          </h3>
        </div>
        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
          {card.desc}
        </p>
        <a href="#assessment" className="inline-flex items-center gap-3 bg-white border border-neutral-200 text-[#171717] px-6 py-3.5 rounded-full text-sm font-semibold hover:border-neutral-300 transition-colors shadow-sm">
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
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white relative" id="challenges">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-4xl">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-6">
            Why Ambitious Students Get Stuck
            <br />
            <span className="text-neutral-400">On Their Global Academic Journey</span>
          </h2>
        </div>

        {/* Scroll Container */}
        <div className="relative flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Cards */}
          <div className="w-full md:w-1/2 relative pb-[10vh]">
            {cards.map((card, i) => (
              <StickyCard 
                key={card.id} 
                card={card} 
                index={i} 
              />
            ))}
          </div>

          {/* Right Image (Sticky) */}
          <div className="w-full md:w-1/2 md:sticky md:top-[15vh] h-[60vh] md:h-[70vh] rounded-[3rem] overflow-hidden shadow-sm order-first md:order-last mb-12 md:mb-0">
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
