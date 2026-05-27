import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";
import { ArrowRight } from "./Icons";

export default function Workshops() {
  const events = [
    {
      title: "SOP & LOR Masterclass",
      date: "Aug 15, 2025 — 6:00 PM (Live Session)",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      active: true,
    },
    {
      title: "PhD Guidance & Strategy",
      date: "Sep 02, 2025 — 5:00 PM (Mentorship Hub)",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      active: false,
    },
    {
      title: "Academic Planning Workshop",
      date: "Sep 20, 2025 — 7:00 PM (Webinar)",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      active: false,
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#050B1D] rounded-[2.5rem] md:rounded-[4rem] mx-4 md:mx-12 text-white overflow-hidden my-12" id="event">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <SectionLabel light>Workshops</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mt-6">
              Programs, Workshops
              <br />
              & Planning Sessions
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="text-lg text-white/60 leading-relaxed max-w-lg font-light lg:ml-auto">
              Join focused sessions where ambitious students come together to learn, reflect, and build stronger academic profiles. Each event is designed to help you navigate your journey with confidence.
            </p>
          </div>
        </div>

        {/* Event Cards Slider UI */}
        <div className="relative flex items-center justify-center gap-6 md:gap-10 mb-16 overflow-visible">
          {/* Main Focused Card */}
          <div className="relative w-full max-w-[800px] h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden group shadow-2xl z-20">
            <Image
              src={events[0].image}
              alt={events[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/90 via-transparent to-transparent" />

            {/* Card Content */}
            <div className="absolute top-6 right-6">
              <button className="bg-white text-[#050B1D] px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:bg-neutral-100 transition-colors">
                Register Now
              </button>
            </div>

            <div className="absolute bottom-10 left-10 right-10">
              <p className="text-sm md:text-base text-white/80 font-medium mb-4">
                {events[0].date}
              </p>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                {events[0].title}
              </h3>
            </div>
          </div>

          {/* Side Card (Right) */}
          <div className="hidden lg:block relative w-[400px] h-[450px] rounded-[2rem] overflow-hidden opacity-40 hover:opacity-60 transition-opacity transform translate-x-4">
            <Image
              src={events[1].image}
              alt={events[1].title}
              fill
              className="object-cover grayscale-[0.5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-xs text-white/70 mb-2">{events[1].date}</p>
              <h3 className="text-2xl font-bold leading-tight">{events[1].title}</h3>
            </div>
          </div>

          {/* Side Card (Left - Peek) */}
          <div className="hidden lg:block absolute left-0 w-[400px] h-[450px] rounded-[2rem] overflow-hidden opacity-40 transform -translate-x-full">
            <Image
              src={events[2].image}
              alt={events[2].title}
              fill
              className="object-cover grayscale-[0.5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-white transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#050B1D] hover:bg-neutral-200 transition-colors">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
