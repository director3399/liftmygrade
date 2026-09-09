"use client";

import React from "react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";

export default function Pathways() {
  const pathways = [
    {
      id: "01",
      title: "Thesis Help",
      desc: "Structural review, academic editing, university-specific citation checks and a verified report — from your draft to a submission-ready thesis.",
      link: "/services#thesis",
      color: "#0000FF",
    },
    {
      id: "02",
      title: "Dissertation Support",
      desc: "Chapter-wise guidance calibrated to your supervisor's expectations — proposal, methodology, findings, defense.",
      link: "/services#dissertation",
      color: "#4169E1",
    },
    {
      id: "03",
      title: "Publication Help",
      desc: "Manuscript editing, a journal shortlist verified against official indexing, predatory screening and reviewer-response support.",
      link: "/services#publication",
      color: "#4863A0",
    },
    {
      id: "04",
      title: "Book Help",
      desc: "Developmental review, line editing and publisher submission formatting for academic books, edited volumes and chapters.",
      link: "/services#book",
      color: "#79BAEC",
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white"
      id="services"
    >
      <div className="max-w-7xl mx-auto">

        {/* =========================================================
            SECTION LABEL
           ========================================================= */}
        <div className="flex items-center gap-4 mb-4">
          <SectionLabel>Our Services</SectionLabel>
        </div>

        {/* =========================================================
            HEADER
           ========================================================= */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">

          {/* Left: Title */}
          <div className="flex flex-col">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight">
              Our
              <br />

              <span className="relative inline-block">
                <span className="relative z-10">
                  Services
                </span>

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

          {/* Right: Description + Button */}
          <div className="flex flex-col items-start justify-end">

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 sm:mb-8">
              Explore the programs, systems, and support services designed to
              help students move from academic planning to admissions, research
              opportunities, and long-term career growth.
            </p>

            <Link
              href="/services"
              className="
                inline-flex
                items-center
                gap-3
                bg-blue-600
                text-white
                px-5
                sm:px-6
                py-3.5
                sm:py-4
                rounded-full
                text-sm
                sm:text-base
                font-semibold
                hover:bg-blue-700
                transition-colors
              "
            >
              Explore All Services

              <span
                className="
                  inline-flex
                  items-center
                  justify-center
                  w-6
                  h-6
                  sm:w-8
                  sm:h-8
                  bg-white
                  rounded-full
                  text-blue-600
                "
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* =========================================================
            SERVICE CARDS
            Reference-inspired editorial card structure
           ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {pathways.map((pathway) => (
            <Link
              key={pathway.id}
              href={pathway.link}
              style={{
                backgroundColor: pathway.color,
              }}
              className="
                group
                relative
                min-h-[460px]
                p-7
                sm:p-8
                flex
                flex-col
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >

              {/* =====================================================
                  TOP ROW
                 ===================================================== */}
              <div className="flex items-start justify-between">

                {/* Number */}
                <span
                  className="
                    text-xs
                    font-semibold
                    tracking-wide
                    text-white
                  "
                >
                  {pathway.id}
                </span>

                {/* Icon */}
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-10
                    h-10
                    text-white
                  "
                >

                  {/* Thesis Help */}
                  {pathway.id === "01" && (
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="4"
                        y="5"
                        width="16"
                        height="14"
                        rx="1"
                      />
                      <path d="M8 9h8" />
                      <path d="M8 13h5" />
                    </svg>
                  )}

                  {/* Dissertation Support */}
                  {pathway.id === "02" && (
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="16"
                        rx="1"
                      />
                      <path d="M7 8h10" />
                      <path d="M7 12h10" />
                      <path d="M7 16h6" />
                    </svg>
                  )}

                  {/* Publication Help */}
                  {pathway.id === "03" && (
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 4h12v16H6z" />
                      <path d="M9 8h6" />
                      <path d="M9 12h6" />
                      <path d="M9 16h4" />
                    </svg>
                  )}

                  {/* Book Help */}
                  {pathway.id === "04" && (
                    <svg
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 4h14v16H5z" />
                      <path d="M8 8h8" />
                      <path d="M8 12h8" />
                      <path d="M8 16h5" />
                    </svg>
                  )}

                </span>
              </div>

              {/* =====================================================
                  TITLE
                 ===================================================== */}
              <div className="flex-1 flex items-center">

                <h3
                  className="
                    text-2xl
                    sm:text-[27px]
                    md:text-[28px]
                    font-semibold
                    leading-[1.05]
                    tracking-tight
                    text-white
                    max-w-[230px]
                  "
                >
                  {pathway.title}
                </h3>

              </div>

              {/* =====================================================
                  BOTTOM CONTENT
                 ===================================================== */}
              <div>

                {/* Description */}
                <p
                  className="
                    text-sm
                    leading-relaxed
                    max-w-[270px]
                    text-white
                  "
                >
                  {pathway.desc}
                </p>

                {/* CTA */}
                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-3
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-white
                  "
                >
                  Explore Service

                  <svg
                    className="
                      w-4
                      h-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </div>

              </div>

            </Link>faq
          ))}

        </div>
      </div>
    </section>
  );
}