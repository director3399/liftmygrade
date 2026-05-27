"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AcademicJourney() {
  const stages = [
    {
      id: "01",
      title: "Class 10 Foundation",
      desc: "Early profile building and comprehensive academic roadmap planning.",
    },
    {
      id: "02",
      title: "Class 11–12 Prep",
      desc: "Standardized testing, extracurriculars, and university shortlisting.",
    },
    {
      id: "03",
      title: "Bachelor's Abroad",
      desc: "Application execution, personal essays, and admission strategy.",
    },
    {
      id: "04",
      title: "IELTS / GRE Prep",
      desc: "Targeted coaching to achieve required test scores for top universities.",
    },
    {
      id: "05",
      title: "Master's Abroad",
      desc: "Specialized positioning and statement of purpose for advanced degrees.",
    },
    {
      id: "06",
      title: "Research & Pubs",
      desc: "End-to-end guidance for publishing in international journals.",
    },
    {
      id: "07",
      title: "Fully Funded PhD",
      desc: "Research proposal refinement and professor outreach strategy.",
    },
    {
      id: "08",
      title: "Global Career",
      desc: "Post-study work strategies, networking, and professional growth.",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Force clear any stale styles
      gsap.set(sectionRef.current, { clearProps: "all" });
      gsap.set(trackRef.current, { clearProps: "all" });

      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const diff = trackWidth - viewportWidth;
        return diff > 0 ? -diff : 0;
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: trackRef.current, // Wait until the carousel itself is in view
        start: "center center", // Pin when the carousel is perfectly centered on screen
        end: () => `+=${Math.abs(getScrollAmount())}`,
        pin: sectionRef.current, // Pin the entire section container
        animation: tween,
        scrub: 1,
        anticipatePin: 1, // This tells GSAP to anticipate the pinning and prevents the tiny visual jerk/jump
        invalidateOnRefresh: true,
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden w-full" id="journey">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-start mb-4"
          >
            <SectionLabel>Journey</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#171717] leading-[1.2] tracking-tight max-w-3xl"
          >
            Know What To Do At Every Stage Of Your Study Abroad Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-neutral-700 leading-relaxed max-w-xl mt-6"
          >
            Navigate every stage of your academic growth with our comprehensive mentorship roadmap, designed for long-term success.
          </motion.p>
        </div>
      </div>

      <div className="w-full overflow-hidden pb-16 pt-8">
        <div 
          ref={trackRef}
          className="md:h-[520px] relative flex flex-col md:flex-row w-full md:w-max gap-8 md:gap-0 pl-6 md:pl-12 lg:pl-16 xl:pl-24 pr-6 md:pr-12 lg:pr-16 max-w-xl md:max-w-none mx-auto"
        >
          {stages.map((stage, i) => {
            const isTop = i % 2 === 0;
            return (
              <div key={stage.id} className="relative md:w-[320px] w-full shrink-0 group pl-10 md:pl-0">

                {/* Mobile Dot */}
                <div className="md:hidden absolute left-[11px] top-[30px] w-[10px] h-[10px] rounded-full bg-neutral-200 group-hover:bg-blue-500 z-10 transition-colors" />

                {/* Mobile Line Segment (hide on last item) */}
                {i < stages.length - 1 && (
                  <div className="md:hidden absolute left-[15px] top-[36px] bottom-[-80px] w-px border-l-2 border-dashed border-neutral-300 z-0" />
                )}

                {/* Desktop S-Curve Connectors (hidden on mobile) */}
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute left-[50%] top-[90px] w-full h-[340px] z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    {isTop ? (
                      <>
                        <div className="absolute top-0 left-0 w-1/2 h-1/2 border-t-2 border-r-2 border-dashed border-neutral-400 rounded-tr-[40px]"></div>
                        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-b-2 border-l-2 border-dashed border-neutral-400 rounded-bl-[40px]"></div>
                      </>
                    ) : (
                      <>
                        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-b-2 border-r-2 border-dashed border-neutral-400 rounded-br-[40px]"></div>
                        <div className="absolute top-0 right-0 w-1/2 h-1/2 border-t-2 border-l-2 border-dashed border-neutral-400 rounded-tl-[40px]"></div>
                      </>
                    )}
                  </div>
                )}

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`
                    relative z-10 w-full md:w-[280px] md:h-[180px] bg-white rounded-3xl p-6
                    border border-neutral-200/80 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.03)]
                    hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:border-neutral-300 
                    transition-all duration-300 ease-out
                    md:absolute md:left-1/2 md:-translate-x-1/2
                    ${isTop ? 'md:top-0' : 'md:bottom-0'}
                  `}
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FAFAFA] border border-neutral-200 flex items-center justify-center shadow-sm group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300 shrink-0">
                        <span className="text-[11px] font-bold text-neutral-500 group-hover:text-blue-600 transition-colors tracking-wider">
                          {stage.id}
                        </span>
                      </div>
                      <h3 className="text-[17px] font-semibold text-neutral-900 tracking-tight leading-tight">
                        {stage.title}
                      </h3>
                    </div>
                    <p className="text-[13px] text-neutral-700 leading-relaxed line-clamp-3">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* Spacer for horizontal scroll padding */}
          <div className="hidden md:block w-16 shrink-0" />
        </div>
      </div>
    </section>
  );
}
