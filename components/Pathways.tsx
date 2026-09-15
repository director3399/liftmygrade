"use client";

import React from "react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";

export default function Pathways() {
  // Top 4 priority services
  const pathways = [
    {
      id: "01",
      title: "Thesis Help",
      desc: "Structural review, academic editing, university-specific citation checks and a verified report — from your draft to a submission-ready thesis.",
      link: "/services#thesis",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      hoverColor: "group-hover:bg-blue-700",
      iconColor: "text-white",
    },
    {
      id: "02",
      title: "Dissertation Support",
      desc: "Chapter-wise guidance calibrated to your supervisor's expectations — proposal, methodology, findings, defense.",
      link: "/services#dissertation",
      bgColor: "bg-[#0A3A2A]", // Deep dark green
      textColor: "text-white",
      hoverColor: "group-hover:bg-[#082e21]",
      iconColor: "text-white",
    },
    {
      id: "03",
      title: "Publication Help",
      desc: "Manuscript editing, a journal shortlist verified against official indexing, predatory screening and reviewer-response support.",
      link: "/services#publication",
      bgColor: "bg-blue-600",
      textColor: "text-white",
      hoverColor: "group-hover:bg-blue-700",
      iconColor: "text-white",
    },
    {
      id: "04",
      title: "Book Help",
      desc: "Developmental review, line editing and publisher submission formatting for academic books, edited volumes and chapters.",
      link: "/services#book",
      bgColor: "bg-[#E8ECEF]", // Light gray
      textColor: "text-[#171717]",
      hoverColor: "group-hover:bg-[#dce1e6]",
      iconColor: "text-[#171717]",
      descColor: "text-neutral-600",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Header with Section Label */}
        <div className="flex items-center gap-4 mb-4">
          <SectionLabel>Our Services</SectionLabel>
        </div>

        {/* Title, Description, and Button - matching Academic Journey layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left: Title */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight">
              Our
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Services</span>
                <svg 
                  className="absolute bottom-0 left-0 w-full h-3 text-blue-500 -z-0" 
                  viewBox="0 0 100 20" 
                  fill="none" 
                  preserveAspectRatio="none"
                >
                  <path 
                    d="M 5,15 C 20,5 40,12 60,8 C 80,4 90,15 95,12" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                  />
                </svg>
              </span>
            </h2>
          </div>
          
          {/* Right: Description and Button */}
          <div className="flex flex-col items-start justify-end">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 sm:mb-8">
              Explore the programs, systems, and support services designed to help students move from academic planning to admissions, research opportunities, and long-term career growth.
            </p>
            
            {/* Button directly below description */}
            <Link 
              href="/services" 
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore All Services
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full text-blue-600">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid - full-color cards matching reference image */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-2xl overflow-hidden shadow-sm">
          {pathways.map((pathway, idx) => (
            <Link 
              key={idx} 
              href={pathway.link}
              className={`group flex flex-col justify-between p-8 min-h-[420px] transition-all duration-300 ${pathway.bgColor} ${pathway.hoverColor}`}
            >
              <div>
                {/* Top Row: Number and Icon */}
                <div className="flex items-center justify-between mb-12">
                  <span className={`text-sm font-mono font-medium ${pathway.textColor} opacity-80`}>
                    {pathway.id}
                  </span>
                  {/* Document Icon */}
                  <svg 
                    className={`w-6 h-6 ${pathway.iconColor} opacity-80`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold tracking-tight mb-4 ${pathway.textColor}`}>
                  {pathway.title}
                </h3>
                
                {/* Description */}
                <p className={`text-sm leading-relaxed ${pathway.descColor || 'opacity-90'} ${pathway.textColor}`}>
                  {pathway.desc}
                </p>
              </div>

              {/* Bottom CTA */}
              <div className={`flex items-center text-sm font-semibold tracking-wider ${pathway.textColor} mt-8`}>
                EXPLORE SERVICE
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}