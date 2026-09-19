"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "./Icons";

export default function QuickReports() {
  const quickServices = [
    {
      title: "AI & Plagiarism Report",
      price: "₹99",
      tag: "Instant Report",
      desc: "A verified AI-content and plagiarism report for any document you're about to submit — with a source-level breakdown.",
      image: "/banner/banner1.png",
      link: "/#contact",
    },
    {
      title: "Personalised Roadmap Plan",
      price: "₹99",
      tag: "Country-Specific",
      desc: "A ready-to-follow roadmap with timelines, tests, intake windows, and a document checklist for your target country.",
      image: "/banner/banner2.png",
      link: "/#contact",
    },
  ];

  return (
    <section
      className="bg-transparent w-full px-6 md:px-12 lg:px-16 pt-16 sm:pt-20 pb-12 sm:pb-16 relative z-30"
      id="pricing-banner"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro Line */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#171717] tracking-tight leading-tight max-w-2xl mx-auto">
            Two reports to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">get you moving.</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-2.5 text-blue-500 -z-0"
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

        {/* Two-Card Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {quickServices.map((svc, i) => (
            <Link
              key={i}
              href={svc.link}
              className="group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden flex flex-row hover:border-blue-500/40 hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.18)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Side */}
              <div className="relative w-[40%] sm:w-[42%] shrink-0 overflow-hidden bg-neutral-100">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 40vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent" />
              </div>

              {/* Content Side */}
              <div className="flex-1 p-5 sm:p-7 flex flex-col justify-between min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 pt-1">
                      {svc.tag}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight leading-none">
                      {svc.price}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#171717] tracking-tight mb-2 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="mt-5 flex items-center text-blue-600 font-semibold text-xs tracking-wider uppercase group-hover:gap-2 transition-all">
                  Get It Now
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs sm:text-sm text-neutral-500 mt-8 sm:mt-10 leading-relaxed">
          Looking for something else?{" "}
          <a
            href="/#contact"
            className="text-blue-600 font-semibold hover:underline"
          >
            Book a free consultation
          </a>{" "}
          or{" "}
          <a
            href="/services"
            className="text-blue-600 font-semibold hover:underline"
          >
            explore our full range of services
          </a>
          .
        </p>
      </div>
    </section>
  );
}