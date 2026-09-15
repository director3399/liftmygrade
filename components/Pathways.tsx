"use client";

import React from "react";
import Link from "next/link";
import SectionLabel from "./SectionLabel";
import { allServices, ServiceItem } from "@/data/services";
import { ArrowRight, DiagonalArrow } from "./Icons";

const ServiceCard = ({ item }: { item: ServiceItem }) => {
  return (
    <Link
      href={item.link}
      className="group relative w-[280px] sm:w-[320px] md:w-[340px] shrink-0 bg-[#F9FAFB] hover:bg-white border border-neutral-200/80 hover:border-blue-500 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.12)] hover:-translate-y-1.5"
    >
      <div>
        {/* Top Bar: Category / Free Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400">
            {item.category}
          </span>
          {item.isFree ? (
            <span className="text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100/80 px-2 py-0.5 rounded-full">
              Free
            </span>
          ) : item.tags && item.tags.length > 0 ? (
            <span className="text-[10px] font-semibold text-neutral-600 bg-neutral-200/60 px-2 py-0.5 rounded-full">
              {item.tags[0]}
            </span>
          ) : null}
        </div>

        {/* Service Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#171717] tracking-tight group-hover:text-blue-600 transition-colors mb-2.5 line-clamp-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
          {item.desc}
        </p>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
        <span className="text-xs font-semibold text-neutral-700 group-hover:text-blue-600 transition-colors">
          Learn more
        </span>
        <div className="w-7 h-7 rounded-full bg-white group-hover:bg-blue-600 text-neutral-500 group-hover:text-white flex items-center justify-center border border-neutral-200 group-hover:border-blue-600 transition-all duration-300 shadow-xs">
          <DiagonalArrow className="w-3 h-3" />
        </div>
      </div>
    </Link>
  );
};

export default function Pathways() {
  // Split services into two distinct balanced groups
  const half = Math.ceil(allServices.length / 2);
  const row1Services = allServices.slice(0, half);
  const row2Services = allServices.slice(half);

  // Duplicate each row for smooth seamless infinite scroll loops
  const marqueeRow1 = [...row1Services, ...row1Services];
  const marqueeRow2 = [...row2Services, ...row2Services];

  return (
    <section
      className="py-16 sm:py-24 bg-white overflow-hidden relative"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-12">
        {/* Section Label */}
        <div className="flex items-center gap-4 mb-4">
          <SectionLabel>Our Services</SectionLabel>
        </div>

        {/* Header Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
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

          {/* Right: Description + Button */}
          <div className="flex flex-col items-start justify-end">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 sm:mb-8">
              Explore our complete range of academic, research, doctoral, and career solutions — from free readiness assessment to thesis defense and professional branding.
            </p>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore All Services
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full text-blue-600">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Dual Marquee Container */}
      <div className="relative w-full overflow-hidden pause-hover flex flex-col gap-6 pt-2 pb-6">
        {/* Gradient edge fades for polished aesthetic - hidden on mobile */}
        <div className="hidden md:block absolute top-0 left-0 w-24 lg:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute top-0 right-0 w-24 lg:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1: Right to Left (Visible on all screens) */}
        <div className="animate-marquee flex gap-5 sm:gap-6 pl-4">
          {marqueeRow1.map((item, index) => (
            <ServiceCard key={`r1-${item.id}-${index}`} item={item} />
          ))}
        </div>

        {/* Row 2: Left to Right (Hidden on mobile, visible on desktop/tablet) */}
        <div className="hidden md:flex">
          <div className="animate-marquee-reverse flex gap-5 sm:gap-6 pl-4">
            {marqueeRow2.map((item, index) => (
              <ServiceCard key={`r2-${item.id}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}