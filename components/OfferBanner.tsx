"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OfferBanner() {
  const banners = [
    {
      image: "/banner/banner1.png",
      alt: "AI & Plagiarism Report — ₹99",
      link: "/#contact",
      width: 1600,
      height: 500,
    },
    {
      image: "/banner/banner2.png",
      alt: "Personalised Roadmap Plan — ₹99",
      link: "/#contact",
      width: 1600,
      height: 500,
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
              <Link
                key={i}
                href={banner.link}
                className="w-full shrink-0 block rounded-2xl sm:rounded-3xl overflow-hidden"
              >
                {/* 
                  No fixed aspect ratio — image scales to fill the full width 
                  and the height is derived from the intrinsic image dimensions.
                */}
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  width={banner.width}
                  height={banner.height}
                  priority={i === 0}
                  sizes="100vw"
                  className="w-full h-auto object-contain block"
                />
              </Link>
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