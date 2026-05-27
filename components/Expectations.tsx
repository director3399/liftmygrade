import React from "react";
import Image from "next/image";
import { DiagonalArrow } from "./Icons";

export default function Expectations() {
  const items = [
    {
      title: "Mindset Elevation",
      desc: "Shift from reactive to proactive leadership. Develop the mental clarity needed to navigate complex challenges with confidence and calm.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      reverse: false,
    },
    {
      title: "Confident Decision Making",
      desc: "Learn frameworks that remove hesitation and build trust in your judgment. Make decisions your team can rally behind.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      reverse: true,
    },
    {
      title: "20 Years in 5 Years",
      desc: "Accelerate your leadership growth. Compress decades of learning into focused, high-impact coaching sessions that deliver lasting results.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      reverse: false,
    },
  ];

  return (
    <section className="py-24 px-12 bg-white" id="expect">
      <div className="grid md:grid-cols-2 gap-12 mb-16 items-end">
        <div className="expect-title-col">
          <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] text-[#171717] tracking-tight">
            What You Can Expect
            <br />
            After Working Together
          </h2>
        </div>
        <div className="flex justify-end">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors"
          >
            Let&apos;s talk
            <span className="inline-flex items-center justify-center w-8 h-8 bg-white rounded-full text-blue-600">
              <DiagonalArrow className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>

      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 md:gap-24 py-16 border-t border-neutral-100 items-center ${
              index === items.length - 1 ? "border-b" : ""
            }`}
          >
            <div className={`${item.reverse ? "md:order-last" : ""}`}>
              <h3 className="text-3xl font-semibold text-[#171717] mb-6 tracking-tight">{item.title}</h3>
              <p className="text-lg text-neutral-500 leading-relaxed font-light max-w-lg">
                {item.desc}
              </p>
            </div>
            <div className="relative h-[340px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
