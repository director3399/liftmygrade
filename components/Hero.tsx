"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "./Icons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 px-6 md:px-12 lg:px-16 pb-24 flex items-end bg-[#0a0a0a] overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1709054172839-17880c040f22?q=80"
          alt="Premium Academic Environment"
          fill
          priority
          className="object-cover opacity-60 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col items-start justify-end">
        {/* Left Content Stack */}
        <div className="hero-text-left relative flex flex-col items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tighter max-w-4xl"
          >
            Build A Global Academic<span className="relative inline-block whitespace-nowrap z-10 px-1">
              <span className="relative z-10">Profile</span>
              <svg
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[140%] text-blue-500 -z-10"
                viewBox="0 0 100 100"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M 15,50 C 15,10 85,10 85,50 C 85,90 15,90 15,50 C 15,30 30,15 50,15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-[dash_2s_ease-out_forwards]"
                  strokeDasharray="300"
                  strokeDashoffset="0"
                />
              </svg>
            </span>-
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">Not Just An Application</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl font-light"
          >
            <p>
              LiftmyGrade combines AI-powered readiness systems, structured mentorship, and research-focused guidance to help students navigate global education pathways with clarity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4 items-center"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#assessment"
              className="inline-flex items-center gap-4 bg-white text-neutral-800 pl-8 pr-2 py-2 rounded-full text-base font-medium hover:bg-neutral-50 transition-all group"
            >
              Get Free Readiness Report
              <span className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white group-hover:bg-blue-700 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </span>
            </motion.a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-all border-b border-white/20 hover:border-white pb-1"
            >
              Explore Programs
            </a>
          </motion.div>
        </div>
      </div>

      {/* Blue glow at bottom of hero */}
      <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[80%] h-[120px] bg-[radial-gradient(ellipse_at_center_bottom,rgba(37,99,235,0.5)_0%,transparent_70%)] z-30 pointer-events-none" />
    </section>
  );
}
