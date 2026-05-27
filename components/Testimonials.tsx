import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { ArrowRight } from "./Icons";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white" id="testimonial">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-16">
          <div>
            <SectionLabel>Student Success</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] tracking-tight">
              Trusted By Ambitious Students
            </h2>
          </div>
          <div className="flex gap-3 mb-2">
            <button className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-800 hover:text-neutral-800 transition-colors">
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center text-white hover:bg-black transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Portrait Image */}
          <div className="relative aspect-square md:aspect-auto md:h-[480px] rounded-[3rem] overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80"
              alt="Student Success Story"
              fill
              className="object-cover grayscale-[0.2]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Side: Content Card */}
          <div className="bg-[#F9F9F9] rounded-[3rem] p-10 md:p-16 flex flex-col justify-center border border-neutral-100">
            <p className="text-xl md:text-3xl font-medium text-[#171717] leading-relaxed mb-10 tracking-tight">
              &ldquo;The research mentorship completely changed my approach to profile positioning. I secured a fully funded PhD position because we focused on long-term academic growth rather than just applications.&rdquo;
            </p>
            
            <div className="mt-auto">
              <div className="text-2xl font-bold text-[#171717] mb-2 tracking-tight">Arpit Verma</div>
              <div className="text-lg text-blue-600 font-bold uppercase tracking-widest text-xs">PhD Candidate, TU Delft</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
