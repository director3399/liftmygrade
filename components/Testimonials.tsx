"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { ArrowRight } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "I was struggling with my Statement of Purpose, but the structured feedback from LiftmyGrade mentors helped me articulate my research interests with precision. The admission felt like a natural outcome.",
    name: "Sanya Malhotra",
    role: "MS, Stanford University",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&auto=format&fit=crop"
  },
  {
    quote: "The research mentorship completely changed my approach to profile positioning. I secured a fully funded PhD position because we focused on long-term academic growth rather than just applications.",
    name: "Arpit Verma",
    role: "PhD Candidate, TU Delft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&auto=format&fit=crop"
  },
  {
    quote: "From shortlisting universities to nailing my interviews, LiftmyGrade gave me a clear roadmap at every step. I went in confident and came out with three offers.",
    name: "Aditya Rao",
    role: "MS, Carnegie Mellon University",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };
  
  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const current = testimonials[index];

  return (
    <section className="py-24 px-6 md:px-12 bg-white" id="testimonial">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
          <div>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mt-4 sm:mt-0">
              What People Say About Us
            </h2>
          </div>
          <div className="flex gap-3 mb-2 w-full md:w-auto justify-start md:justify-end">
            <button 
              onClick={handlePrev}
              disabled={index === 0}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors ${
                index === 0 
                  ? "border-neutral-200 text-neutral-300 cursor-not-allowed" 
                  : "border-neutral-200 text-[#171717] hover:border-[#171717]"
              }`}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
            </button>
            <button 
              onClick={handleNext}
              disabled={index === testimonials.length - 1}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-colors ${
                index === testimonials.length - 1 
                  ? "border-neutral-200 text-neutral-300 cursor-not-allowed bg-transparent" 
                  : "border-transparent bg-[#333333] text-white hover:bg-black"
              }`}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {/* Left Side: Portrait Image */}
          <div className="relative aspect-square md:aspect-auto h-[250px] sm:h-[300px] md:h-full min-h-[250px] rounded-4xl md:rounded-[3rem] overflow-hidden shadow-sm">
            <Image
              src="/testmonial.webp"
              alt="LiftMyGrade Testimonial"
              fill
              className="object-cover grayscale-[0.2]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Side: Content Card */}
          <div className="bg-[#F9F9F9] h-full rounded-4xl md:rounded-[3rem] p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center border border-neutral-100 relative overflow-hidden min-h-[300px]">
            <div className="grid">
              {testimonials.map((item, i) => (
                <motion.div
                  key={item.name}
                  className="col-start-1 row-start-1 flex flex-col h-full"
                  initial={false}
                  animate={{ 
                    opacity: index === i ? 1 : 0, 
                    y: index === i ? 0 : 20,
                    pointerEvents: index === i ? "auto" : "none"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#171717] leading-relaxed mb-8 md:mb-10 tracking-tight">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-neutral-200 md:border-none md:pt-0">
                    <div className="text-xl sm:text-2xl font-bold text-[#171717] mb-1 sm:mb-2 tracking-tight">{item.name}</div>
                    <div className="text-[10px] sm:text-[11px] text-blue-600 font-bold uppercase tracking-widest">{item.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2.5 mt-8 justify-center md:justify-start">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#171717]" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
