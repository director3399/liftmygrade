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
      title: "Journal Fit Report",
      desc: "A live journal-fit and indexing report for any manuscript you're about to submit — with a database-level breakdown and risky-journal screening.",
      cta: "Get Report",
      link: "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20to%20get%20the%20Journal%20Fit%20Report",
    },
    {
      image: "/banner/banner2.webp",
      tag: "Country-Specific",
      title: "Personalised Roadmap Plan",
      desc: "A ready-to-follow roadmap with timelines, tests, intake windows, and a document checklist for your target country.",
      cta: "Get Roadmap",
      link: "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20to%20get%20the%20Personalised%20Roadmap%20Plan",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-advance only for mobile carousel every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section
      className="w-full bg-transparent pt-4 sm:pt-6 pb-6 sm:pb-8 px-6 md:px-12 lg:px-16"
      id="offer-banner"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── DESKTOP / LAPTOP (md and up): Clean Side-by-Side Grid ── */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {banners.map((banner, i) => (
            <a
              key={`desktop-${i}`}
              href={banner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full block rounded-3xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  priority={i === 0}
                  sizes="50vw"
                  className="object-cover object-center grayscale-[0.15] group-hover:scale-105 transition-transform duration-[1.2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050B1D]/95 via-[#050B1D]/85 to-[#050B1D]/60" />
                <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-blue-600/20 blur-[100px]" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between p-6 lg:p-7 min-h-[190px] h-full gap-4">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 mb-2">
                    {banner.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-2">
                    {banner.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light">
                    {banner.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <div className="inline-flex items-center gap-2 bg-white text-[#050B1D] pl-4 pr-1.5 py-1 rounded-full text-xs sm:text-sm font-semibold group-hover:bg-neutral-100 transition-all">
                    {banner.cta}
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-blue-600 rounded-full text-white group-hover:bg-blue-700 transition-colors shrink-0">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── MOBILE (below md): Auto-sliding Carousel ── */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: `-${index * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {banners.map((banner, i) => (
                <a
                  key={`mobile-${i}`}
                  href={banner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full shrink-0 block rounded-2xl overflow-hidden"
                >
                  {/* Background image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={banner.image}
                      alt={banner.title}
                      fill
                      priority={i === 0}
                      sizes="100vw"
                      className="object-cover object-center grayscale-[0.15]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B1D]/95 via-[#050B1D]/85 to-[#050B1D]/60" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-between p-5 min-h-[200px] gap-3">
                    <div>
                      <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 mb-1.5">
                        {banner.tag}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight leading-snug mb-1.5">
                        {banner.title}
                      </h3>
                      <p className="text-xs text-white/75 leading-relaxed font-light">
                        {banner.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <div className="inline-flex items-center gap-2 bg-white text-[#050B1D] pl-3.5 pr-1 py-1 rounded-full text-xs font-semibold">
                        {banner.cta}
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full text-white shrink-0">
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator for Mobile */}
          <div className="flex justify-center gap-1.5 mt-3.5">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-[#171717]" : "w-1.5 bg-neutral-300"
                }`}
                aria-label={`Go to banner ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}