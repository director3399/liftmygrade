import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { ArrowRight, DiagonalArrow } from "./Icons";

const cards = [
  {
    id: "01",
    title: "Your Thesis Reads Like a Draft, Not a Final Submission",
    desc: "Chapters written months apart, citations in three styles, and an argument that never quite lands. Structural review and academic editing turn it into one document you can defend.",
    actionText: "Get Thesis Help",
    actionLink: "/readiness-assessment",
  },
  {
    id: "02",
    title: "Manuscripts Rejected on Structure, Not Substance",
    desc: "Good research sent back for IMRaD logic, journal fit, or formatting. Positioning, a verified journal shortlist, and reviewer-response support fix the part that isn't the science.",
    actionText: "Get Publication Help",
    actionLink: "/readiness-assessment",
  },
  {
    id: "03",
    title: "No Way to Prove Your Work Is Original",
    desc: "Supervisors, editors, and viva panels ask. Every project ships with an AI-content report, a plagiarism report, and reference/DOI verification of every citation.",
    actionText: "See How Verification Works",
    actionLink: "/readiness-assessment",
  },
];

const StickyCard = ({ card, index }: any) => {
  return (
    <div
      className="sticky flex items-center justify-center w-full"
      style={{
        top: `calc(10vh + ${index * 80}px)`,
      }}
    >
      <div className="w-full bg-[#F9F9F9] border border-neutral-100 rounded-4xl lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 shadow-[0_-8px_30px_-15px_rgba(0,0,0,0.1)] mb-4 sm:mb-8 lg:mb-12 origin-top">
        <div className="mb-4 sm:mb-6">
          <span className="text-xs sm:text-sm font-semibold text-neutral-400 tracking-widest uppercase block mb-2">
            Challenge {card.id}
          </span>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#171717] tracking-tight leading-tight">
            {card.title}
          </h3>
        </div>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 sm:mb-8">
          {card.desc}
        </p>
        <a
          href={card.actionLink}
          className="inline-flex items-center gap-2 text-sm font-semibold border-b-2 border-black hover:opacity-70 transition-all pb-1 w-max"
        >
          {card.actionText} <DiagonalArrow className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>
    </div>
  );
};

export default function Challenges() {
  return (
    <section
      className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white relative"
      id="reality"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-24 max-w-4xl">
          <SectionLabel>The Reality</SectionLabel>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-4 sm:mt-6">
            Why Ambitious Scholars Get Stuck
            <br />
            <span className="text-neutral-400">
              — and How We Unstick Them
            </span>
          </h2>
        </div>

        {/* Scroll Container */}
        <div className="relative flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 items-start">
          {/* Left Cards */}
          <div className="w-full lg:w-1/2 relative lg:pb-[10vh]">
            {cards.map((card, i) => (
              <StickyCard key={card.id} card={card} index={i} />
            ))}
          </div>

          {/* Right Image (Sticky) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-[15vh] h-[300px] sm:h-[400px] lg:h-[70vh] rounded-4xl lg:rounded-[3rem] overflow-hidden order-first lg:order-last mb-8 sm:mb-12 lg:mb-0">
            <div className="relative w-full h-full">
              <Image
                src="/cap-men.webp"
                alt="Scholar planning future"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}