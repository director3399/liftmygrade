"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ArrowRight } from "./Icons";

type Slide = {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
  price: string;
  cta: string;
  link: string;
};

export default function PromoPopup() {
  const slides: Slide[] = [
    {
      id: "slide1",
      image: "/popup/popup1.webp",
      alt: "Journal Fit Report — ₹199",
      tag: "Instant Report",
      title: "Journal Fit Report",
      desc: "A live journal-fit and indexing report for any manuscript you're about to submit — with a database-level breakdown and risky-journal screening.",
      price: "₹199",
      cta: "Get Report",
      link: "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20to%20get%20the%20Journal%20Fit%20Report",
    },
    {
      id: "slide2",
      image: "/popup/popup2.webp",
      alt: "Personalised Roadmap Plan — ₹199",
      tag: "Country-Specific",
      title: "Personalised Roadmap Plan",
      desc: "A ready-to-follow roadmap with timelines, tests, intake windows, and a document checklist for your target country.",
      price: "₹199",
      cta: "Get Roadmap",
      link: "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20to%20get%20the%20Personalised%20Roadmap%20Plan",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  /* ────────────────────────────────────────────────────────────
     Trigger logic:
     - Show only ONCE per session
     - Wait for user to scroll past the hero
     - Then wait a further grace period before showing
     ──────────────────────────────────────────────────────────── */
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("promoPopupShown");
    if (alreadyShown) return;

    let shown = false;

    const handleScroll = () => {
      if (shown) return;
      if (window.scrollY > window.innerHeight * 1.5) {
        shown = true;
        setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem("promoPopupShown", "true");
          window.removeEventListener("scroll", handleScroll);
        }, 12000);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ────────────────────────────────────────────────────────────
     Auto-carousel inside popup — rotate every 5s while open
     ──────────────────────────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOpen, slides.length]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop — does NOT close the popup */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Popup card — compact modal size on laptop/desktop, comfortable fit on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[440px] md:max-w-[560px] lg:max-w-[580px]"
          >
            {/* Close button — the only way to dismiss */}
            <button
              onClick={handleClose}
              aria-label="Close popup"
              className="absolute -top-3 -right-3 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] flex items-center justify-center text-[#171717] hover:bg-neutral-100 hover:scale-105 transition-all"
            >
              <X className="w-4 h-4 sm:w-4.5 sm:h-4.5" strokeWidth={2.5} />
            </button>

            {/* ── Slide viewport (compact rectangle / soft aspect on desktop) ─────────────── */}
            <div className="relative aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/10] overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_24px_80px_-10px_rgba(0,0,0,0.6)]">
              {/* Sliding track */}
              <motion.div
                className="flex h-full"
                animate={{ x: `-${slideIndex * 100}%` }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {slides.map((slide, i) => (
                  <a
                    key={slide.id}
                    href={slide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-full shrink-0 block group"
                  >
                    {/* Background image — bright and clear */}
                    <Image
                      src={slide.image}
                      alt=""
                      fill
                      priority={i === 0}
                      sizes="(max-width: 768px) 100vw, 1040px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s]"
                      aria-hidden="true"
                    />

                    {/* Soft overlay — only darkens the LEFT side where text sits */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B1D]/85 via-[#050B1D]/55 to-transparent" />
                    {/* Very subtle bottom fade so the price/CTA row stays readable */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050B1D]/70 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-5 sm:p-6 md:p-7">
                      {/* Top: tag */}
                      <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                        {slide.tag}
                      </span>

                      {/* Middle: title + desc */}
                      <div className="max-w-md">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                          {slide.title}
                        </h3>
                        {/* Description — hidden on mobile, visible on sm and up */}
                        <p className="hidden sm:block text-xs sm:text-sm text-white/85 leading-relaxed font-light drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] line-clamp-3">
                          {slide.desc}
                        </p>
                      </div>

                      {/* Bottom: price + CTA */}
                      <div className="flex items-end justify-between gap-3 pt-2">
                        <div className="flex flex-col">
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white/60 mb-0.5">
                            Starting at
                          </span>
                          <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                            {slide.price}
                          </span>
                        </div>

                        <div className="inline-flex items-center gap-2 bg-white text-[#050B1D] pl-3.5 sm:pl-4 pr-1 py-1 sm:py-1.5 rounded-full text-xs font-semibold group-hover:bg-neutral-100 transition-all">
                          {slide.cta}
                          <span className="inline-flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-blue-600 rounded-full text-white group-hover:bg-blue-700 transition-colors shrink-0">
                            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </motion.div>

              {/* Progress dots — hidden on mobile, visible on sm+ */}
              <div className="hidden sm:flex absolute bottom-6 right-6 z-20 gap-2">
                {slides.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === slideIndex ? "w-6 bg-white" : "w-1.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}