"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { motion, AnimatePresence } from "framer-motion";

export default function Pathways() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pathways = [
    {
      id: "01",
      title: "Bachelor's Abroad",
      desc: "Strategic guidance for high school students aiming for premium global universities. Build a profile that stands out in the competitive admission landscape.",
      image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=1000&q=90",
    },
    {
      id: "02",
      title: "Master's Abroad",
      desc: "Specialized positioning for graduates seeking advanced degrees at top-tier research institutions. We focus on statement of purpose, research alignment, and funding.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=90",
    },
    {
      id: "03",
      title: "PhD Guidance",
      desc: "Deep mentorship for research fellows. We help you secure fully funded positions by refining your research proposal and professor outreach strategy.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=90",
    },
    {
      id: "04",
      title: "Research Support",
      desc: "End-to-end guidance for publishing in international journals. Master technical writing, peer review navigation, and academic branding.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&q=90",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pathways.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [pathways.length]);

  const current = pathways[activeIndex];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:items-stretch items-start">
          {/* Left Column: Text Content */}
          <div className="flex flex-col lg:justify-between lg:h-full pt-4">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex justify-between items-start mb-4"
              >
                <SectionLabel>Pathways</SectionLabel>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-[#171717] leading-[1.2] mb-6 tracking-tight"
              >
                Choose The Academic Pathways That Fits
                <br />
                Your <span className="relative inline-block whitespace-nowrap px-1">
                  {/* Place SVG first in DOM so it renders underneath */}
                  <svg 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[140%] text-blue-500" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    preserveAspectRatio="none"
                  >
                    <path 
                      d="M 15,50 C 15,10 85,10 85,50 C 85,90 15,90 15,50 C 15,30 30,15 50,15" 
                      stroke="currentColor" 
                      strokeWidth="3.5" 
                      strokeLinecap="round" 
                    />
                  </svg>
                  <span className="relative">Goals</span>
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base text-neutral-700 leading-relaxed max-w-md mb-12"
              >
                Structured guidance designed to help you navigate every stage of your global academic journey.
              </motion.p>
            </div>

            <div className="mt-8 lg:mt-auto overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="text-sm font-semibold text-neutral-400 mb-4 tracking-widest uppercase">
                    {current.id} / 04
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-[#171717] mb-6 tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-base text-neutral-700 leading-relaxed max-w-md mb-8 min-h-[80px]">
                    {current.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Thick Progress Bars */}
              <div className="flex gap-4 mt-6">
                {pathways.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveIndex(i)}
                    className="group relative h-4 w-16 flex items-end"
                  >
                    <div className="h-1.5 w-full rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition-colors" />
                    {i === activeIndex && (
                      <motion.div 
                        layoutId="activeBar"
                        className="absolute left-0 right-0 bottom-0 h-1.5 bg-blue-600 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Image */}
          <div className="relative aspect-4/5 lg:aspect-auto lg:h-[520px] rounded-[2.5rem] overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
