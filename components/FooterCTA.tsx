import React from "react";
import Image from "next/image";
import { DiagonalArrow } from "./Icons";

export default function FooterCTA() {
  const images = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80",
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 bg-blue-600 rounded-4xl mx-4 md:mx-12 mb-12 text-center text-white overflow-hidden" id="connect">
      <div className="relative z-20">
        <h2 className="text-4xl md:text-6xl font-semibold mb-12 leading-[1.1] tracking-tight max-w-4xl mx-auto">
          Ready To Improve Your Leadership Skills?
        </h2>
        
        <div className="flex justify-center mb-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-5 rounded-full text-lg font-bold hover:bg-neutral-50 transition-all shadow-xl hover:scale-105"
          >
            Let&apos;s talk
            <span className="inline-flex items-center justify-center w-9 h-9 bg-blue-600 rounded-full text-white">
              <DiagonalArrow className="w-5 h-5" />
            </span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden relative border-4 border-white/10 transform transition-transform hover:scale-105 duration-500">
              <Image
                src={img}
                alt={`Leadership moment ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative patterns or glows */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_40%)]" />
    </section>
  );
}
