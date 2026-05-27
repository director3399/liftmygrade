import React from "react";

export default function Philosophy() {
  return (
    <section className="relative py-48 px-6 md:px-12 bg-[#050B1D] text-center overflow-hidden" id="quote">
      {/* Cinematic Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-4xl text-blue-500 mb-12 font-serif leading-none opacity-40">&ldquo;</div>
        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tighter italic">
          The strongest academic journeys are built with structure, direction, and mentorship.
        </blockquote>
        <div className="mt-16 inline-flex items-center gap-4">
           <div className="h-px w-12 bg-blue-500/40" />
           <cite className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs not-italic">Platform Philosophy</cite>
           <div className="h-px w-12 bg-blue-500/40" />
        </div>
      </div>
    </section>
  );
}
