"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionLabel from "./SectionLabel";

export default function Journey() {
  const researchTrack = [
    { id: "01", title: "Brief", desc: "Share your draft, stage, subject, and deadline in a free consultation." },
    { id: "02", title: "Scope Agreed", desc: "We agree the stages, timeline, and deliverables for your work before the review begins." },
    { id: "03", title: "Expert Assigned", desc: "A PhD-level specialist from your own discipline takes your project." },
    { id: "04", title: "Chapter-wise Review", desc: "Tracked-changes review and structuring, chapter by chapter — you keep writing." },
    { id: "05", title: "Quality Check + Delivery", desc: "Subject, language, and final QA layers — then your file with the AI, plagiarism & reference/DOI packet." },
    { id: "06", title: "Unlimited Revisions", desc: "We keep revising until you're confident to submit and defend." },
  ];

  const admissionsTrack = [
    { id: "01", title: "Readiness Form", desc: "An honest snapshot of your eligibility, early strengths, visible gaps, and where you realistically stand." },
    { id: "02", title: "One-to-One Consultation", desc: "Beyond the form — your aspirations, budget, timeline and intent. We understand the person behind the profile." },
    { id: "03", title: "Country Shortlisting", desc: "Together we filter down to the top 1–3 countries that best fit your goal, budget and profile." },
    { id: "04", title: "Detailed Roadmap", desc: "A specific plan for your destinations: timeline, intakes, tests, indicative budget and document checklist." },
  ];

  const StepCard = ({
    step,
    accent,
  }: {
    step: { id: string; title: string; desc: string };
    accent: "amber" | "blue";
  }) => {
    const isAmber = accent === "amber";
    const numberColor = isAmber ? "text-amber-200" : "text-blue-200";
    const labelColor = isAmber ? "text-amber-600" : "text-blue-600";
    const cardHover = isAmber
      ? "hover:border-amber-300 hover:shadow-[0_12px_40px_-12px_rgba(201,162,107,0.28)]"
      : "hover:border-blue-500/40 hover:shadow-[0_12px_40px_-12px_rgba(59,130,246,0.25)]";

    return (
      <div
        className={`relative group bg-white border border-neutral-200 rounded-3xl p-6 sm:p-7 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 ${cardHover} overflow-hidden min-h-[200px] sm:min-h-[220px]`}
      >
        <span
          className={`absolute top-3 right-4 sm:top-4 sm:right-5 text-[52px] sm:text-[64px] font-bold leading-none tracking-tighter ${numberColor} select-none pointer-events-none`}
        >
          {step.id}
        </span>

        <div className="flex flex-col gap-2 relative z-10 mt-auto">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${labelColor}`}>
            Step {step.id}
          </span>
          <h4 className="text-[17px] sm:text-[18px] font-bold text-[#171717] leading-tight">
            {step.title}
          </h4>
          <p className="text-[13px] sm:text-sm text-neutral-600 leading-relaxed">
            {step.desc}
          </p>
        </div>
      </div>
    );
  };

/* ────────────────────────────────────────────────────────────
   MobileCarousel — transform-based slider.
   No native scroll, no snap, no scrollTo. Pure translateX +
   CSS transition. Fully smooth, fully controllable.
   ──────────────────────────────────────────────────────────── */
const MobileCarousel = ({
  steps,
  accent,
}: {
  steps: typeof researchTrack;
  accent: "amber" | "blue";
}) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 3.5s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  // Swipe support (touch gestures)
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const delta = touchStartX.current - touchEndX.current;
      if (delta > 50) {
        // swipe left → next
        setIndex((prev) => Math.min(prev + 1, steps.length - 1));
      } else if (delta < -50) {
        // swipe right → prev
        setIndex((prev) => Math.max(prev - 1, 0));
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    // Resume after 4s
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <div className="lg:hidden">
      {/* Viewport — clips overflow */}
      <div
        className="overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Sliding track — moves via translateX */}
        <div
          className="flex gap-4 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(calc(-${index} * (85% + 16px)))`,
          }}
        >
          {steps.map((step) => (
            <div key={step.id} className="shrink-0 w-[85%]">
              <StepCard step={step} accent={accent} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-5">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 4000);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-[#171717]" : "w-2 bg-neutral-300"
            }`}
            aria-label={`Go to step ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

  return (
    <section
      className="py-16 sm:py-24 bg-white w-full overflow-hidden relative"
      id="journey"
    >
      <div className="px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-16">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="flex flex-col">
                <div>
                  <SectionLabel>Process</SectionLabel>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-4 md:mt-auto">
                  How Our System Works
                </h2>
              </div>

              <div className="flex flex-col items-start justify-end">
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Two tracks, one standard — you always know the next step.
                </p>
              </div>
            </div>
          </div>

          {/* TRACK 1 */}
          <div className="mb-16 sm:mb-24">
            <div className="mb-8 pb-5 border-b border-neutral-200">
              <h3 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight mb-1">
                Thesis, Dissertation &amp; Publication Track
              </h3>
              <p className="text-sm sm:text-base text-neutral-500">
                For scholars enrolled or publishing
              </p>
            </div>

            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {researchTrack.map((step) => (
                <StepCard key={step.id} step={step} accent="amber" />
              ))}
            </div>

            <MobileCarousel steps={researchTrack} accent="amber" />
          </div>

          {/* TRACK 2 */}
          <div>
            <div className="mb-8 pb-5 border-b border-neutral-200">
              <h3 className="text-xl sm:text-2xl font-bold text-[#171717] tracking-tight mb-1">
                International Admissions Track
              </h3>
              <p className="text-sm sm:text-base text-neutral-500">
                Bachelor's · Master's
              </p>
            </div>

            <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {admissionsTrack.map((step) => (
                <StepCard key={step.id} step={step} accent="blue" />
              ))}
            </div>

            <MobileCarousel steps={admissionsTrack} accent="blue" />
          </div>
        </div>
      </div>
    </section>
  );
}