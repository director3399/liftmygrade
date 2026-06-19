"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "./Icons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-svh sm:min-h-screen pt-28 sm:pt-32 px-5 sm:px-6 md:px-12 lg:px-16 pb-20 sm:pb-24 flex items-end bg-[#0a0a0a] overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.webp"
          alt="Premium Academic Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start justify-end">
        {/* Left Content Stack */}
        <div className="hero-text-left relative flex flex-col items-start w-full">
          <div className="animate-fade-in-up flex items-start sm:items-center gap-2 px-3 sm:px-4 py-2 sm:py-1.5 rounded-2xl sm:rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(37,99,235,0.15)] max-w-full">
            <span className="relative hidden sm:flex h-2 w-2 shrink-0 mt-1 sm:mt-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] sm:text-[13px] font-medium tracking-wide text-white/90 text-center sm:text-left leading-snug">
              Academic, Research, Career & Strategic Communication Ecosystem
            </span>
          </div>
          <h1
            className="animate-fade-in-up text-4xl sm:text-5xl md:text-[52px] lg:text-6xl font-bold text-white leading-[1.2] sm:leading-[1.15] mb-5 tracking-tighter max-w-4xl"
          >
            Build A Global Academic<br className="sm:hidden" /><span className="relative inline-block whitespace-nowrap z-10 px-1">
              <span className="relative z-10">Profile</span>
            </span>- <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-200 to-white">Not Just An Application</span>
          </h1>

          <div
            className="animate-fade-in-up delay-200 text-base sm:text-lg md:text-xl text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-light"
          >
            <p>
              A premium academic ecosystem. We guide your journey—from global admissions and fully funded PhDs to research support and strategic career branding.
            </p>
          </div>

          <div
            className="animate-fade-in-up delay-400 flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-4 items-center sm:items-center w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/readiness-assessment"
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-3 bg-white text-neutral-800 pl-6 sm:pl-6 pr-1.5 py-1.5 rounded-full text-[14px] sm:text-sm font-medium hover:bg-neutral-50 transition-all group"
            >
              Get Free Readiness Report
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full text-white group-hover:bg-blue-700 transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-[14px] sm:text-sm font-semibold text-white/80 hover:text-white transition-all border-b border-white/20 hover:border-white pb-1"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Blue glow at bottom of hero */}
      <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[120%] sm:w-[80%] h-[120px] bg-[radial-gradient(ellipse_at_center_bottom,rgba(37,99,235,0.5)_0%,transparent_70%)] z-30 pointer-events-none" />
    </section>
  );
}
