import React from "react";
import Image from "next/image";
import { ArrowRight } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function Milestones() {
  const items = [
    {
      id: "01",
      title: "Value Built In — At No Cost",
      desc: "The groundwork is on us. From free readiness reports to detailed country roadmaps, you decide with confidence.",
      tags: ["Readiness", "Roadmap", "Shortlisting", "Consultation"],
      image: "/outcome/outcome1.png",
      reverse: false,
    },
    {
      id: "02",
      title: "End-to-End Dedicated Support",
      desc: "From your first enquiry to final submission, your dedicated mentor stays with you across the entire journey.",
      tags: ["Mentor", "Timelines", "Responsive", "Secure"],
      image: "/outcome/outcome2.webp",
      reverse: true,
    },
    {
      id: "03",
      title: "Original & Next-Edge Documents",
      desc: "Plagiarism-free, non-templated professional documents crafted from scratch to get your profile noticed.",
      tags: ["SOP", "Resume", "Authentic", "Publication"],
      image: "/outcome/outcome3.webp",
      reverse: false,
    },
    {
      id: "04",
      title: "Guidance Through the Whole Journey",
      desc: "You're never left guessing what comes next. We track every deadline and guide you through exams and visas.",
      tags: ["Step-by-Step", "Visas", "Deadlines", "Advice"],
      image: "/outcome/outcome4.webp",
      reverse: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white" id="outcome">
      <div className="max-w-7xl mx-auto">
        {/* Header Area with Dual Alignment */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
          {/* Left Column: Label and Title */}
          <div className="flex flex-col">
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-4 md:mt-auto">
              What You Can Expect
              <br />
              After Joining the Ecosystem
            </h2>
          </div>

          {/* Right Column: Description and Button Left-Aligned with each other */}
          <div className="flex flex-col items-start justify-end">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 sm:mb-8">
              When you join LiftmyGrade, you're not buying a one-off document — you're stepping into a support system built around you.
            </p>
            <a
              href="/what-to-expect"
              className="inline-flex items-center gap-3 bg-blue-600 text-white! px-5 sm:px-6 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-blue-700 transition-colors"
            >
              Read Our Full Commitment
              <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full text-blue-600">
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </span>
            </a>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-neutral-200 mb-0" />

        {/* List of Outcomes */}
        <div className="flex flex-col">
          {items.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 md:gap-24 py-12 sm:py-16 items-stretch border-b border-neutral-200`}
            >
              <div className={`${item.reverse ? "md:order-last" : ""} flex flex-col justify-center gap-8 sm:gap-16 md:gap-40 py-2`}>
                {/* Block 1: Number + Title */}
                <div className="title-block">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight flex items-baseline gap-4">
                    <span>{item.id}</span>
                    {item.title}
                  </h3>
                </div>

                {/* Block 2: Description + Tags */}
                <div className="content-block">
                  <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-lg mb-6 sm:mb-8">
                    {item.desc}
                  </p>

                  {/* Pill Tags */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {item.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-4 sm:px-5 py-1.5 sm:py-2 border border-neutral-300 rounded-full text-xs sm:text-sm text-neutral-600 font-medium hover:bg-neutral-50 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full overflow-hidden mt-6 md:mt-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover rounded-2xl md:rounded-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 flex justify-center">
          <a href="/what-to-expect" className="inline-flex items-center gap-3 bg-white border border-neutral-200 text-[#171717] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold hover:border-neutral-300 hover:bg-neutral-50 shadow-sm transition-all">
            View What to Expect
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
