"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Popup = {
  id: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  link: string;
};

export default function PromoPopup() {
  const popups: Popup[] = [
    {
      id: "popup1",
      image: "/popup/popup1.webp",
      alt: "Special offer 1",
      width: 800,
      height: 1000,
      link: "/#contact",
    },
    {
      id: "popup2",
      image: "/popup/popup2.webp",
      alt: "Special offer 2",
      width: 800,
      height: 1000,
      link: "/#contact",
    },
  ];

  // Currently visible popup — null means none open
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Which popups have already been shown this session (prevents re-show)
  const [shownIds, setShownIds] = useState<string[]>([]);

  // Helper — find next unseen popup and show it
  const showNextUnseen = (currentShown: string[]) => {
    const next = popups.findIndex((p) => !currentShown.includes(p.id));
    if (next === -1) return; // All popups already shown
    setActiveIndex(next);
    setShownIds([...currentShown, popups[next].id]);
    sessionStorage.setItem(
      "promoPopupShown",
      JSON.stringify([...currentShown, popups[next].id])
    );
  };

  // ── On mount: restore session state, and schedule popup 1 ──
  useEffect(() => {
    const stored = sessionStorage.getItem("promoPopupShown");
    const alreadyShown: string[] = stored ? JSON.parse(stored) : [];

    setShownIds(alreadyShown);

    // If both popups already shown this session → do nothing
    if (alreadyShown.length >= popups.length) return;

    // First popup trigger: 10s after load OR scroll past 80% of viewport
    let firstTriggered = false;
    const triggerFirst = () => {
      if (firstTriggered) return;
      firstTriggered = true;
      showNextUnseen(alreadyShown);
    };

    const timer = setTimeout(triggerFirst, 10000);

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        triggerFirst();
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── When a popup is dismissed: wait, then trigger the next unseen one ──
  useEffect(() => {
    if (activeIndex !== null) return; // Popup currently open — don't schedule
    if (shownIds.length === 0) return; // Nothing shown yet — wait for first trigger
    if (shownIds.length >= popups.length) return; // All shown — done

    // Second popup trigger: 20s after the first was dismissed
    const timer = setTimeout(() => {
      showNextUnseen(shownIds);
    }, 20000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, shownIds]);

  const handleClose = () => {
    setActiveIndex(null);
  };

  return (
    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          key={popups[activeIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div
            onClick={handleClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[480px] sm:max-w-[520px]"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              aria-label="Close popup"
              className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center text-[#171717] hover:bg-neutral-100 hover:scale-105 transition-all"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
            </button>

            {/* Image — wrapped in Link for redirection */}
            <Link
              href={popups[activeIndex].link}
              onClick={handleClose}
              aria-label={popups[activeIndex].alt}
              className="relative block rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_80px_-10px_rgba(0,0,0,0.6)] group"
            >
              <Image
                src={popups[activeIndex].image}
                alt={popups[activeIndex].alt}
                width={popups[activeIndex].width}
                height={popups[activeIndex].height}
                priority
                sizes="(max-width: 640px) 90vw, 520px"
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-500"
              />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}