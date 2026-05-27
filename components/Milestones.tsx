import React from "react";
import Image from "next/image";
import { ArrowRight } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function Milestones() {
  const items = [
    {
      id: "01",
      title: "Clear Academic Direction",
      desc: "Gain absolute clarity on your global academic pathway. We help you choose the right destination, university, and program that aligns with your long-term goals.",
      tags: ["Roadmap", "Planning", "Clarity", "Strategy"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      reverse: false,
    },
    {
      id: "02",
      title: "Build A Profile That Universities Notice",
      desc: "Build a competitive research profile. From publication support to professor outreach, we ensure your profile reflects high-tier academic contribution.",
      tags: ["Research", "Publications", "Profile", "PhD"],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      reverse: true,
    },
    {
      id: "03",
      title: "Better Career Alignment",
      desc: "Ensure your academic journey leads to global career growth. We focus on PR pathways, industry alignment, and building a global professional brand.",
      tags: ["Career", "Growth", "Industry", "Academic Goals"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      reverse: false,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white" id="outcome">
      <div className="max-w-7xl mx-auto">
        {/* Header Area with Dual Alignment */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Label and Title */}
          <div className="flex flex-col">
            <SectionLabel>Outcomes</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-auto">
              What You Can Expect
              <br />
              After Joining the Ecosystem
            </h2>
          </div>

          {/* Right Column: Description and Button Left-Aligned with each other */}
          <div className="flex flex-col items-start justify-end">
            <p className="text-base text-neutral-700 leading-relaxed max-w-[320px] mb-8">
              These are the transformations our students experience through structured mentorship.
            </p>
            <a
              href="#assessment"
              className="inline-flex items-center gap-3 bg-blue-600 text-white! px-6 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors"
            >
              See the Pathways
              <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-blue-600">
                <ArrowRight className="w-4 h-4" />
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
              className={`grid md:grid-cols-2 gap-12 md:gap-24 py-16 items-stretch border-b border-neutral-200`}
            >
              <div className={`${item.reverse ? "md:order-last" : ""} flex flex-col justify-between py-2`}>
                {/* Block 1: Number + Title */}
                <div className="title-block">
                  <h3 className="text-3xl font-bold text-[#171717] tracking-tight flex items-baseline gap-4">
                    <span>{item.id}</span>
                    {item.title}
                  </h3>
                </div>

                {/* Block 2: Description + Tags */}
                <div className="content-block mt-12 md:mt-0">
                  <p className="text-lg text-neutral-700 leading-relaxed max-w-lg mb-8">
                    {item.desc}
                  </p>

                  {/* Pill Tags */}
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-5 py-2 border border-neutral-300 rounded-full text-sm text-neutral-600 font-medium hover:bg-neutral-50 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative aspect-16/10 md:h-[320px] rounded-3xl overflow-hidden shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
