"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "./Icons";

export default function OfferBanner() {
  const banners = [
    {
      image: "/banner/banner1.webp",
      tag: "Instant Report",
      title: "AI & Plagiarism Report",
      desc: "A verified AI-content and plagiarism report for any document you're about to submit — with a source-level breakdown.",
      price: "₹99",
      cta: "Get Report",
      link: "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20to%20get%20the%20AI%20%26%20Plagiarism%20Report",
    },
    {
      image: "/banner/banner2.webp",
      tag: "Country-Specific",
      title: "Personalised Roadmap Plan",
      desc: "A ready-to-follow roadmap with timelines, tests, intake windows, and a document checklist for your target country.",
      price: "₹199",
      cta: "Get Roadmap",
      link: "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20to%20get%20the%20Personalised%20Roadmap%20Plan",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section
      className="w-full bg-transparent pt-6 sm:pt-8 pb-6 sm:pb-8 px-6 md:px-12 lg:px-16"
      id="offer-banner"
    >
      <div className="max-w-7xl mx-auto">
        {/* Viewport */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          <motion.div
            className="flex"
            animate={{ x: `-${index * 100}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {banners.map((banner, i) => (
              <a
                key={i}
                href={banner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full shrink-0 block rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                {/* ── Background image layer ─────────────────────── */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={banner.image}
                    alt=""
                    fill
                    priority={i === 0}
                    sizes="100vw"
                    className="object-cover object-center grayscale-[0.15] group-hover:scale-105 transition-transform duration-[1.2s]"
                    aria-hidden="true"
                  />
                  {/* Dark overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050B1D]/95 via-[#050B1D]/80 to-[#050B1D]/50" />
                  {/* Subtle blue glow on the right for depth */}
                  <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-600/25 blur-[120px]" />
                </div>

                {/* ── Content layer ─────────────────────────────── */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 lg:p-10 min-h-[200px] sm:min-h-[220px]">
                  {/* Left side: text content */}
                  <div className="flex-1 min-w-0 max-w-2xl">
                    {/* Tag */}
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 mb-3">
                      {banner.tag}
                    </span>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-3">
                      {banner.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl font-light">
                      {banner.desc}
                    </p>
                  </div>

                  {/* Right side: price + CTA */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-4 sm:gap-3 shrink-0">
                    {/* Price */}
                    <div className="flex flex-col items-start sm:items-end">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-0.5">
                        Starting at
                      </span>
                      <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">
                        {banner.price}
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2.5 bg-white text-[#050B1D] pl-5 pr-1.5 py-1.5 rounded-full text-sm font-semibold group-hover:bg-neutral-100 transition-all">
                      {banner.cta}
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white group-hover:bg-blue-700 transition-colors shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[#171717]" : "w-2 bg-neutral-300"
              }`}
              aria-label={`Go to banner ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}