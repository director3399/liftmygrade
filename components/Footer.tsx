import React from "react";
import { ArrowRight, Facebook, Instagram, Linkedin, Youtube } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative bg-[#050B1D] text-white pt-24 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Top Gradient Overlay for smooth transition from content */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Footer CTA Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            Ready To Build Your Global
            <br />
            Academic Journey?
          </h2>
          <p className="text-lg text-white/60 mb-10 font-light max-w-xl">
            Start with a structured roadmap designed around your academic goals.
          </p>
          <a
            href="#assessment"
            className="inline-flex items-center gap-3 bg-white text-[#050B1D]! px-8 py-4 rounded-full text-base font-semibold hover:bg-neutral-100 transition-all group"
          >
            Get Your Personalized Roadmap
            <ArrowRight className="w-4 h-4 text-[#050B1D]! transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-white/10 mb-20" />

        {/* Bottom Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 items-start mb-24">
          {/* Left Column: Branding and Newsletter */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-semibold mb-10 tracking-tight leading-tight">
              Let&apos;s Build the Future
              <br />
              You&apos;re Meant to Lead
            </h3>

            <div className="relative max-w-md group mb-20">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4.5 text-sm focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 w-[46px] h-[46px] bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="mt-auto">
              <div className="text-2xl md:text-3xl font-extrabold tracking-tighter uppercase">LIFT<span className="font-light opacity-50">MYGRADE</span></div>
            </div>
          </div>

          {/* Right Column: Nav and Contact */}
          <div className="lg:col-span-7 grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 h-full">
            {/* Links Stack */}
            <div className="lg:col-span-3 flex flex-wrap gap-x-8 gap-y-4 mb-16">
              {["Bachelor's Abroad", "Master's Abroad", "PhD Guidance", "Research Guidance", "Workshops", "Contact"].map((link) => (
                <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-base font-medium text-white/70 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <div className="text-sm font-semibold text-white/40 mb-4 uppercase tracking-widest">Connect</div>
                <div className="text-base font-light text-white/80">
                  Global Mentorship Hub
                  <br />
                  Academic Support
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <div className="text-sm font-semibold text-white/40 mb-4 uppercase tracking-widest">Support</div>
                <div className="text-base font-light text-white/80">
                  +91 (800) 555-4832
                  <br />
                  hello@liftmygrade.com
                </div>
              </div>
            </div>

            <div className="md:col-span-2 lg:col-span-1 flex items-end justify-end md:justify-start lg:justify-end gap-3 mt-auto">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white text-[#050B1D]! flex items-center justify-center hover:bg-blue-600 hover:text-white! transition-all transform hover:-translate-y-1">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Deep Blue Glow at Bottom */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
    </footer>
  );
}
