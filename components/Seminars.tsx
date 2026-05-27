import React from "react";
import Image from "next/image";
import SectionLabel from "./SectionLabel";

export default function Seminars() {
  return (
    <section className="py-24 px-12 bg-[#0a1128] rounded-4xl mx-4 md:mx-12 text-white overflow-hidden my-12" id="seminars">
      <SectionLabel light>Upcoming</SectionLabel>

      <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
        <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] text-white tracking-tight">
          Upcoming Seminars
          <br />
          & Workshops
        </h2>
        <div className="seminars-desc">
          <p className="text-base text-white/60 leading-relaxed max-w-lg font-light">
            Join our upcoming events designed to sharpen your leadership
            skills, strengthen team dynamics, and accelerate your professional
            growth.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/8 transition-colors duration-300">
          <div className="relative h-72 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
              alt="Upcoming workshop seminar"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-10">
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Upcoming Sessions & Workshops</h3>
            <p className="text-base text-white/50 leading-relaxed font-light">
              Interactive sessions focused on building practical leadership
              skills and team management strategies.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/8 transition-colors duration-300">
          <div className="relative h-72 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
              alt="Effective leadership masterclass"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-10">
            <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">Effective Leadership Masterclass</h3>
            <p className="text-base text-white/50 leading-relaxed font-light">
              A deep-dive into decision making, emotional intelligence, and
              building high-performance teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
