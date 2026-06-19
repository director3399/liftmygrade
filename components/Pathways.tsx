"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";
import { DiagonalArrow } from "./Icons";

export default function Pathways() {
  const [activeIndex, setActiveIndex] = useState(0);

  const pathways = [
    {
      id: "01",
      title: "Global Study Readiness Report",
      desc: "Understand where you stand today through profile evaluation, country alignment, gap analysis, and a personalized academic roadmap.",
      image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=1000&q=90",
    },
    {
      id: "02",
      title: "Admission Strategy & Execution",
      desc: "Build stronger applications through SOP development, academic CV creation, university shortlisting, and end-to-end application planning.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=90",
    },
    {
      id: "03",
      title: "PhD Specialization",
      desc: "Secure fully funded PhD opportunities through professor outreach strategy, research proposal development, funding guidance, and supervisor targeting.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=90",
    },
    {
      id: "04",
      title: "Research & Publication Support",
      desc: "Develop a stronger academic profile through publication support, journal guidance, research mentorship, and academic positioning.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&q=90",
    },
    {
      id: "05",
      title: "Global Career Branding Program",
      desc: "Build a global professional presence through LinkedIn optimization, resume development, interview preparation, and career positioning.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=90",
    },
    {
      id: "06",
      title: "Professional & Career Services",
      desc: "Specialized project-based document writing for professionals and corporate clients. Standalone support for Resumes, SOPs, Grants, and PR.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&q=90",
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
    <section className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:items-stretch items-start">
          {/* Left Column: Text Content */}
          <div className="flex flex-col lg:justify-between lg:h-full pt-2 sm:pt-4">
            <div>
              <div className="flex justify-between items-start mb-4">
                <SectionLabel>Our Services</SectionLabel>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.2] mb-6 tracking-tight">
                Our
                <br />
                <span className="relative inline-block whitespace-nowrap px-1">
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
                  <span className="relative">Services</span>
                </span>
              </h2>
              
              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-md mb-8">
                Explore the programs, systems, and support services designed to help students move from academic planning to admissions, research opportunities, and long-term career growth.
              </p>

              <div className="mb-10 sm:mb-12 flex flex-row gap-4 items-center">
                <a href="/services" className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white! px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-sm font-semibold hover:bg-blue-700 transition-colors w-auto">
                  Explore All Services
                  <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full text-blue-600">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-8 lg:mt-auto overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="text-xs sm:text-sm font-semibold text-neutral-400 mb-3 sm:mb-4 tracking-widest uppercase">
                  {current.id} / 06
                </div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-[#171717] mb-4 sm:mb-6 tracking-tight">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-md mb-6 sm:mb-8 min-h-[100px] sm:min-h-[80px]">
                  {current.desc}
                </p>
              </motion.div>

              {/* Thick Progress Bars */}
              <div className="flex gap-2 sm:gap-4 mt-4 sm:mt-6 w-full max-w-sm sm:max-w-none">
                {pathways.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveIndex(i)}
                    className="group relative h-4 flex-1 sm:flex-none sm:w-16 flex items-end"
                  >
                    <div className="h-1 sm:h-1.5 w-full rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition-colors" />
                    {i === activeIndex && (
                      <motion.div 
                        layoutId="activeBar"
                        className="absolute left-0 right-0 bottom-0 h-1 sm:h-1.5 bg-blue-600 rounded-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-4/5 lg:aspect-auto lg:h-full rounded-4xl sm:rounded-[2.5rem] overflow-hidden mt-8 lg:mt-0">
            <Image
              src="/program1.png"
              alt="LiftMyGrade Programs"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
