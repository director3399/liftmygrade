"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { ArrowRight } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      name: "Arpit Verma",
      role: "PhD Candidate, TU Delft",
      quote: "The research mentorship completely changed my approach to profile positioning. I secured a fully funded PhD position because we focused on long-term academic growth rather than just applications.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
    },
    {
      name: "Sanya Malhotra",
      role: "MS, Stanford University",
      quote: "I was struggling with my Statement of Purpose, but the structured feedback from LiftmyGrade mentors helped me articulate my research interests with precision. The admission felt like a natural outcome.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    },
    {
      name: "David Chen",
      role: "Research Fellow, ETH Zurich",
      quote: "Publishing my first international journal paper seemed impossible until I joined this ecosystem. The technical review and academic branding were instrumental in my fellowship success.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stories.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [stories.length]);

  const next = () => setActiveIndex((prev) => (prev + 1) % stories.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);

  const current = stories[activeIndex];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white" id="testimonial">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Student Success</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] tracking-tight mt-2">
              Trusted By Ambitious <span className="relative inline-block whitespace-nowrap">
                Students
                <svg 
                  className="absolute -top-6 -right-8 w-10 h-10 text-blue-500/80" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4772 12 22C12 16.4772 16.4772 12 22 12C16.4772 12 12 7.52285 12 2Z" 
                    fill="currentColor" 
                  />
                </svg>
              </span>
            </h2>
          </motion.div>
          <div className="flex gap-3 mb-2">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:border-neutral-800 hover:text-neutral-800 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-[#333333] flex items-center justify-center text-white hover:bg-black transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Side: Portrait Image */}
          <div className="relative aspect-square md:aspect-auto md:h-[480px] rounded-[3rem] overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.name}
                  fill
                  className="object-cover grayscale-[0.2]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Content Card */}
          <div className="bg-[#F9F9F9] rounded-[3rem] p-10 md:p-12 flex flex-col justify-center border border-neutral-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col h-full"
              >
                <p className="text-xl md:text-2xl font-medium text-[#171717] leading-relaxed mb-6 tracking-tight min-h-[120px]">
                  &ldquo;{current.quote}&rdquo;
                </p>
                
                <div className="mt-auto">
                  <div className="text-xl font-bold text-[#171717] mb-1 tracking-tight">{current.name}</div>
                  <div className="text-base text-blue-600 font-bold uppercase tracking-widest text-[10px]">{current.role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
