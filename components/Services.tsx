import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function Services() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Column: Text Content */}
          <div className="flex flex-col pt-4">
            <SectionLabel>Pathways</SectionLabel>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] leading-[1.2] mb-6 tracking-tight">
              Academic Pathways
              <br />
              Built Around Your Goals
            </h2>
            
            <p className="text-base text-neutral-500 leading-relaxed max-w-md font-light mb-16">
              Structured guidance designed to help you navigate every stage of your global academic journey.
            </p>

            <div className="mt-4">
              <div className="text-sm font-semibold text-neutral-400 mb-4 tracking-widest uppercase">01 / 04</div>
              <h3 className="text-2xl md:text-4xl font-bold text-[#171717] mb-6 tracking-tight">Bachelor&apos;s Abroad</h3>
              <p className="text-base text-neutral-500 leading-relaxed font-light max-w-md mb-10">
                Strategic guidance for high school students aiming for premium global universities. Build a profile that stands out in the competitive admission landscape.
              </p>

              {/* Thick Progress Bars */}
              <div className="flex gap-4 mt-6">
                <div className="h-1.5 w-16 bg-blue-600 rounded-full" />
                <div className="h-1.5 w-16 bg-neutral-100 rounded-full" />
                <div className="h-1.5 w-16 bg-neutral-100 rounded-full" />
                <div className="h-1.5 w-16 bg-neutral-100 rounded-full" />
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Image */}
          <div className="relative aspect-4/5 md:aspect-auto md:h-[650px] rounded-[2.5rem] overflow-hidden shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1744288281679-bd346e51972a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJlbWl1bSUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8fDA%3D"
              alt="Premium University Campus"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
