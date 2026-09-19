"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I was struggling with my Statement of Purpose, but the structured feedback from LiftmyGrade mentors helped me articulate my research interests with precision. The admission felt like a natural outcome.",
    name: "Sanya Malhotra",
    role: "MS, Stanford University",
    image: "/testmonial/sanya-malhotra.webp",
  },
  {
    quote:
      "The research mentorship completely changed my approach to profile positioning. I secured a PhD position because we focused on long-term academic growth rather than just applications.",
    name: "Arpit Verma",
    role: "PhD Candidate, TU Delft",
    image: "/testmonial/arpit-verma.webp",
  },
  {
    quote:
      "From shortlisting universities to nailing my interviews, LiftmyGrade gave me a clear roadmap at every step. I went in confident and came out with three offers.",
    name: "Aditya Rao",
    role: "MS, Carnegie Mellon University",
    image: "/testmonial/aditya-rao.webp",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white"
      id="testimonial"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-10 sm:mb-12">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#171717] tracking-tight mt-3 sm:mt-4">
            What People Say About Us
          </h2>
        </div>

        {/* ── Desktop: 3-card grid ───────────────────────────── */}
        <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative bg-[#F9F9F9] border border-neutral-100 rounded-3xl p-6 lg:p-7 flex flex-col gap-5 hover:border-blue-500/25 hover:shadow-[0_12px_40px_-12px_rgba(59,130,246,0.15)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote mark */}
              <span
                aria-hidden="true"
                className="text-[56px] leading-none font-serif text-blue-500/25 select-none"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="text-[15px] lg:text-[16px] text-[#171717] leading-relaxed -mt-6">
                {t.quote}
              </p>

              {/* Author */}
              <div className="mt-auto pt-5 border-t border-neutral-200 flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover grayscale-[0.15]"
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[15px] font-bold text-[#171717] leading-tight truncate">
                    {t.name}
                  </div>
                  <div className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-0.5 truncate">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Mobile: single card carousel ───────────────────── */}
        <div className="md:hidden">
          {/* Sliding track */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="w-full shrink-0 bg-[#F9F9F9] border border-neutral-100 rounded-3xl p-6 flex flex-col gap-4"
                >
                  <span
                    aria-hidden="true"
                    className="text-[48px] leading-none font-serif text-blue-500/25 select-none"
                  >
                    &ldquo;
                  </span>

                  <p className="text-[15px] text-[#171717] leading-relaxed -mt-5">
                    {t.quote}
                  </p>

                  <div className="mt-2 pt-5 border-t border-neutral-200 flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="44px"
                        className="object-cover grayscale-[0.15]"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[15px] font-bold text-[#171717] leading-tight truncate">
                        {t.name}
                      </div>
                      <div className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-0.5 truncate">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots below */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-[#171717]" : "w-2 bg-neutral-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}