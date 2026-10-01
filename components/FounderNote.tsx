"use client";

import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function FounderNote() {
  return (
    <section
      className="relative w-full bg-white py-20 sm:py-28 px-6 md:px-12 lg:px-16 overflow-hidden"
      id="founder-note"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-15%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-15%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* ── LEFT COLUMN: Label + heading + signature ─────── */}
          <div className="lg:col-span-4 flex flex-col lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-4 mb-6">
              Built around
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">one standard.</span>
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

            <p className="text-sm sm:text-base text-neutral-500 leading-relaxed max-w-sm font-light">
              Why we do this — and what every scholar we work with can hold us
              to.
            </p>

            {/* Signature block */}
            <div className="mt-10 lg:mt-14 pt-6 border-t border-neutral-200 flex items-center gap-4">
              <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200 bg-white">
                <Image
                  src="/logo-3.webp"
                  alt="LiftMyGrade"
                  fill
                  sizes="44px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-[#171717] leading-tight">
                  Founder
                </div>
                <div className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-0.5">
                  LiftMyGrade
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: The note ────────────────────────── */}
          <div className="lg:col-span-8 relative">
            {/* Vertical blue accent bar — anchors the text visually */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent hidden sm:block" />

            {/* Opening quote mark */}
            <span
              aria-hidden="true"
              className="block sm:pl-10 text-[56px] sm:text-[72px] leading-none font-serif text-blue-500/25 select-none pointer-events-none -mb-4"
            >
              &ldquo;
            </span>

            <div className="sm:pl-10 space-y-6 text-base sm:text-lg text-[#171717] leading-[1.75] tracking-tight">
              <p>
                At LiftMyGrade, we believe your research should be something you
                can{" "}
                <span className="font-semibold">
                  confidently defend
                </span>
                —not simply something you submit.
              </p>

              <p>
                That belief shapes everything we do. We work alongside scholars,
                chapter by chapter, helping them understand their research
                questions, methods, evidence, and reviewer feedback.
              </p>

              <p>
                We believe in proof over promises. Every reference is verified
                at its source, every project is reviewed by a specialist in the
                relevant doctoral field, and every manuscript passes through
                three layers of review before submission.
              </p>

              <p>
                From research mentorship and publication support to admissions
                documents and career branding, our goal is simple: to help
                scholars produce work they understand, trust, and can stand
                behind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}