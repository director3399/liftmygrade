import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { ArrowRight } from "./Icons";

export default function ResearchHub() {
  const features = [
    {
      title: "Publication Support",
      desc: "Get your research papers published in top-tier journals. Our mentors guide you through peer reviews and technical refinements.",
    },
    {
      title: "Professor Outreach",
      desc: "Master the art of cold emailing. Learn how to draft research-oriented communications that secure positive responses from global faculty.",
    },
    {
      title: "PhD Readiness",
      desc: "Prepare for the rigors of a doctoral journey. From proposal drafting to mock interviews, we ensure you are ready to excel.",
    },
    {
      title: "Funding Strategy",
      desc: "Navigate the complex landscape of fully funded PhD positions and research grants. We help you secure the financial support you deserve.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050B1D] text-white overflow-hidden" id="research">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left Column: Visual Representation of Research Ecosystem */}
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-square md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=90"
                alt="Research Laboratory Environment"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute -bottom-10 -right-6 md:right-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-4xl p-8 max-w-xs shadow-2xl z-20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">50+</div>
                <div className="text-sm font-bold tracking-tight">Active Research Mentors</div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed">Connecting you with scholars from world-class research institutions.</p>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col">
            <SectionLabel light>Specialized Hub</SectionLabel>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 tracking-tighter mt-6">
              Research & PhD
              <br />
              Guidance Ecosystem
            </h2>
            
            <p className="text-lg text-white/60 leading-relaxed mb-16 max-w-lg font-light">
              We go beyond generic admissions. LiftmyGrade provides a specialized ecosystem for students pursuing research-intensive careers and fully funded doctoral programs.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <div key={i} className="group cursor-default">
                  <div className="h-px w-12 bg-blue-600 mb-6 group-hover:w-full transition-all duration-500" />
                  <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
               <a
                href="#assessment"
                className="inline-flex items-center gap-3 text-blue-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group"
              >
                Access Research Hub
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
