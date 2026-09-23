"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "./Icons";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-svh sm:min-h-screen pt-28 sm:pt-32 px-5 sm:px-6 md:px-12 lg:px-16 pb-16 sm:pb-20 flex items-end bg-[#0a0a0a] overflow-hidden"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Premium Academic Environment"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] md:object-center opacity-60 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-transparent z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        {/* ── LEFT: Text content — UNCHANGED ─────────────────── */}
        <div className="hero-text-left relative flex flex-col items-start w-full">
          <div className="animate-fade-in-up flex items-start sm:items-center gap-2 px-3 sm:px-4 py-2 sm:py-1.5 rounded-2xl sm:rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-3 shadow-[0_0_15px_rgba(37,99,235,0.15)] max-w-full">
            <span className="relative hidden sm:flex h-2 w-2 shrink-0 mt-1 sm:mt-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] sm:text-[13px] font-medium tracking-wide text-white/90 text-center sm:text-left leading-snug">
              Every Project Verified — AI, Plagiarism &amp; Reference Report Included
            </span>
          </div>

          <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-[52px] lg:text-6xl font-bold text-white leading-[1.2] sm:leading-[1.15] mb-5 tracking-tighter max-w-4xl">
            Thesis Help, Dissertation Support
            <br className="hidden sm:block" />
            &amp; Publication Help —{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-200 to-white">
              By PhD-Level Experts
            </span>
          </h1>

          <div className="animate-fade-in-up delay-200 text-base sm:text-lg text-white/70 leading-relaxed mb-8 sm:mb-10 max-w-2xl font-light">
            <p>
              From literature review and methodology support to thesis,
              dissertation, and publication help — plus admissions support for
              SOPs, LORs, and CVs.{" "}
              <span className="font-semibold text-white">
                Subject-matched PhD experts
              </span>
              , a full AI, plagiarism &amp; reference verification report on
              every project, and unlimited revisions until you're confident to
              submit and defend.
            </p>
          </div>

          <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row flex-wrap gap-5 sm:gap-4 items-center sm:items-center w-full sm:w-auto">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-3 bg-white text-neutral-800 pl-6 sm:pl-6 pr-1.5 py-1.5 rounded-full text-[14px] sm:text-sm font-medium hover:bg-neutral-50 transition-all group"
            >
              Request a Free Consultation
              <span className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-blue-600 rounded-full text-white group-hover:bg-blue-700 transition-colors shrink-0">
                <ArrowRight className="w-4 h-4" />
              </span>
            </motion.a>
            <a
              href="/readiness-assessment"
              className="inline-flex items-center gap-2 text-[14px] sm:text-sm font-semibold text-white/80 hover:text-white transition-all border-b border-white/20 hover:border-white pb-1"
            >
              Start With the Readiness Form
            </a>
          </div>
        </div>

        {/* ── RIGHT: Manuscript + Proof Packet ────────────────── */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[420px]">
          <div className="relative w-full">
            {/* Manuscript Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              style={{ transform: "rotate(-1.2deg)" }}
              className="relative bg-[#F7F8FB] text-[#1B1F27] rounded-2xl p-5 shadow-[0_30px_80px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.08)]"
            >
              {/* Browser-style top bar */}
              <div className="flex items-center gap-1.5 mb-3 text-[11px] text-[#6B7280]">
                <span className="w-2 h-2 rounded-full bg-[#FCA5A5]" />
                <span className="w-2 h-2 rounded-full bg-[#FCD34D]" />
                <span className="w-2 h-2 rounded-full bg-[#86EFAC]" />
                <span className="ml-auto font-medium tracking-wide">
                  Chapter 3 · Methodology
                </span>
              </div>

              {/* Manuscript text with tracked changes — fonts bumped from 12.5 → 14 */}
              <p className="font-serif text-[14px] leading-[1.65] text-[#1B1F27] mb-3.5">
                The study{" "}
                <del className="text-red-700 line-through decoration-[1.5px] bg-red-500/10">
                  uses
                </del>
                <ins className="text-green-700 no-underline border-b-2 border-green-500/80 bg-green-500/10">
                  adopts
                </ins>{" "}
                a sequential explanatory mixed-methods design
                <ins className="text-green-700 no-underline border-b-2 border-green-500/80 bg-green-500/10">
                  , in which the quantitative results inform the qualitative phase
                </ins>{" "}
                (Creswell &amp; Plano Clark, 2018).
              </p>

              <p className="font-serif text-[14px] leading-[1.65] text-[#1B1F27] mb-3.5">
                Participants were{" "}
                <del className="text-red-700 line-through decoration-[1.5px] bg-red-500/10">
                  chosen
                </del>
                <ins className="text-green-700 no-underline border-b-2 border-green-500/80 bg-green-500/10">
                  purposively sampled
                </ins>{" "}
                from three public universities.
              </p>

              {/* Expert note — fonts bumped from 11 → 12.5 */}
              <div className="p-3 rounded-lg border-l-[3px] border-amber-500 bg-[#FBF6EC] text-[12.5px] text-[#4B4232] leading-relaxed">
                <strong className="text-[#8A6A32] font-bold mr-1.5">
                  Expert note
                </strong>
                Tie the sampling rationale back to RQ2.
              </div>
            </motion.div>

            {/* Proof Packet Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              style={{ transform: "rotate(-2deg)" }}
              className="absolute -bottom-28 -right-6 w-[85%] bg-[#181C24] border border-green-500/40 rounded-2xl p-4 shadow-[0_24px_60px_rgba(0,0,0,0.7)] z-20"
            >
              <div className="flex items-center gap-2 mb-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-green-400 shrink-0"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-white font-bold text-[14px] tracking-tight">
                  Proof packet
                </span>
                <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-green-300 bg-green-500/15 border border-green-500/30 rounded-full px-2.5 py-0.5">
                  every project
                </span>
              </div>

              <ul className="space-y-2">
                {[
                  "AI-content report",
                  "Plagiarism report",
                  "Reference / DOI verification report",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[13px] text-white/90"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-400 shrink-0"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* ── MOBILE: Manuscript + Proof Packet ──────────────── */}
        <div className="lg:hidden relative mt-8 w-full">
          <div className="relative bg-[#F7F8FB] text-[#1B1F27] rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-1.5 mb-3 text-[11px] text-[#6B7280]">
              <span className="w-2 h-2 rounded-full bg-[#FCA5A5]" />
              <span className="w-2 h-2 rounded-full bg-[#FCD34D]" />
              <span className="w-2 h-2 rounded-full bg-[#86EFAC]" />
              <span className="ml-auto font-medium">
                Chapter 3 · tracked changes
              </span>
            </div>

            <p className="font-serif text-[14px] leading-[1.7] text-[#1B1F27] mb-3">
              The study{" "}
              <del className="text-red-700 line-through decoration-[1.5px] bg-red-500/10">
                uses
              </del>
              <ins className="text-green-700 no-underline border-b-2 border-green-500/80 bg-green-500/10">
                adopts
              </ins>{" "}
              a sequential explanatory mixed-methods design.
            </p>

            <div className="mt-3 p-2.5 rounded-lg border-l-[3px] border-amber-500 bg-[#FBF6EC] text-[12px] text-[#4B4232] leading-relaxed">
              <strong className="text-[#8A6A32] font-bold mr-1.5">
                Expert note
              </strong>
              Tie the sampling rationale back to RQ2.
            </div>
          </div>

          {/* Proof packet */}
          <div className="mt-4 bg-[#181C24] border border-green-500/40 rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 mb-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-400 shrink-0"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span className="text-white font-bold text-[13px]">
                Proof packet
              </span>
              <span className="ml-auto text-[9px] font-bold uppercase tracking-widest text-green-300 bg-green-500/15 border border-green-500/30 rounded-full px-2 py-0.5">
                every project
              </span>
            </div>
            <ul className="space-y-1.5">
              {["AI-content report", "Plagiarism report", "Reference / DOI verification"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[12px] text-white/90"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-400 shrink-0"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Blue glow at bottom of hero */}
      <div className="absolute bottom-[-2px] left-1/2 -translate-x-1/2 w-[120%] sm:w-[80%] h-[120px] bg-[radial-gradient(ellipse_at_center_bottom,rgba(37,99,235,0.5)_0%,transparent_70%)] z-30 pointer-events-none" />
    </section>
  );
}