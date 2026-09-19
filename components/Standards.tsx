import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function Standards() {
  const pillars = [
    {
      title: "Viva-Safe Support",
      desc: "Edited with you. Defended by you. You can explain every page, because you wrote it.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </svg>
      ),
    },
    {
      title: "Subject-Matched PhD Experts",
      desc: "Every project goes to a specialist whose own doctoral field matches your discipline — not a generalist pool.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
      ),
    },
    {
      title: "3-Layer Quality Check",
      desc: "Subject/domain review by a PhD-level expert, then a language & style pass, then final QA and verification.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: "Verified References (DOI-Checked)",
      desc: "Every citation is checked against real, indexed sources via Crossref/publisher lookup before delivery.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
    },
    {
      title: "Full Proof Packet at Delivery",
      desc: "A PDF packet with your AI-content report, plagiarism report, and reference/DOI verification report.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
    },
    {
      title: "Unlimited Revisions",
      desc: "Revised until you're confident to submit and defend — every round, until it's ready.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
          <path d="M21 3v5h-5" />
          <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
          <path d="M8 16H3v5" />
        </svg>
      ),
    },
  ];

  const trustLine = [
    "Verified journal screening — Scopus / WoS / UGC-CARE / Google Scholar",
    "Registered legal entity (LLP)",
    "Transparent, milestone-based process",
    "7-day refund window",
  ];

  return (
    <section
      className="relative py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-[#F6F8F7] overflow-hidden"
      id="standard"
    >
      {/* ── Background image layer ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/project.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        {/* Soft overlay to keep content legible */}
        <div className="absolute inset-0 bg-[#F6F8F7]/85" />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <SectionLabel>Every Project, The Same Standard</SectionLabel>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight">
              How Every Project
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Is Delivered</span>
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
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed self-end">
              Edited with you, defended by you — six commitments on every
              thesis, dissertation, manuscript and book.
            </p>
          </div>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/30 hover:shadow-[0_8px_30px_-6px_rgba(59,130,246,0.12)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#171717] tracking-tight mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <div className="mt-10 sm:mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm text-neutral-600">
          {trustLine.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600 shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}