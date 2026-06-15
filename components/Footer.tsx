import React from "react";
import { ArrowRight, Instagram, Youtube } from "./Icons";
export default function Footer() {
  return (
    <footer className="relative bg-[#050B1D] text-white pt-24 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Top Gradient Overlay for smooth transition from content */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Footer CTA Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            Ready To Build Your Global
            <br />
            Academic Journey?
          </h2>
          <p className="text-base sm:text-lg text-white/60 mb-10 font-light max-w-xl">
            Start with a structured roadmap designed around your academic goals.
          </p>
          <a
            href="/readiness-assessment"
            className="inline-flex items-center gap-3 bg-white text-[#050B1D]! px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-neutral-100 transition-all group"
          >
            Get Free Readiness Report
            <ArrowRight className="w-4 h-4 text-[#050B1D]! transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-white/10 mb-16 sm:mb-20" />

        {/* Bottom Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start mb-16 sm:mb-24">
          {/* Left Column: Branding and Company Details */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 tracking-tight leading-tight">
              Let&apos;s Build the Future
              <br />
              You&apos;re Meant to Lead
            </h3>

            <div className="mb-16 sm:mb-20 text-white/80 font-light max-w-lg leading-relaxed space-y-4">
              <p>
                <strong className="font-semibold text-white">LiftmyGrade</strong> is your Academic, Research, Career & Strategic Communication Ecosystem.
              </p>
              <p>
                We empower students, researchers, professionals, startups, and institutions through global education pathways, PhD admissions support, research and publication guidance, career branding, grant writing, company documentation, and strategic communication services that drive meaningful growth and long-term impact.
              </p>
            </div>

            <div className="mt-auto hidden lg:block">
              <div className="flex items-center gap-2.5 text-2xl md:text-3xl font-extrabold tracking-tighter uppercase">
                <img src="/logo-3.png" alt="LiftmyGrade" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90" />
                <span>LIFT<span className="font-light opacity-50">MYGRADE</span></span>
              </div>
            </div>
          </div>

          {/* Right Column: Nav and Contact */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10 md:gap-12 lg:gap-8 w-full">
            
            {/* Column 1: Company Links */}
            <div className="flex flex-col gap-4">
              <div className="text-xs sm:text-sm font-semibold text-white/40 uppercase tracking-widest mb-2">Company</div>
              <a href="/services" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Our Services</a>
              <a href="/how-we-work" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">How We Work</a>
              <a href="/pricing" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Pricing</a>
              <a href="/career-services" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Career Services</a>
            </div>

            {/* Column 2: Legal & Resources */}
            <div className="flex flex-col gap-4">
              <div className="text-xs sm:text-sm font-semibold text-white/40 uppercase tracking-widest mb-2">Resources</div>
              <a href="/what-to-expect" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">What to Expect</a>
              <a href="/#testimonial" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Student Success</a>
              <a href="/refund-policy" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Privacy & Refund</a>
            </div>

            {/* Column 3: Contact & Socials */}
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-4">
              <div className="text-xs sm:text-sm font-semibold text-white/40 uppercase tracking-widest mb-2">Connect</div>
              <div className="text-sm sm:text-base font-light text-white/80 space-y-1">
                <p>+91 90513 84241</p>
                <a href="mailto:info@liftmygrade.com" className="hover:text-white transition-colors">info@liftmygrade.com</a>
              </div>
              <div className="flex items-center gap-3 mt-4">
                {[
                  { Icon: Instagram, href: "https://www.instagram.com/liftmygrade?igsh=Ynl2dXdrZHFqM2dp" },
                  { Icon: Youtube, href: "https://www.youtube.com/@LiftMyGrade" }
                ].map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white! flex items-center justify-center hover:bg-white hover:text-[#050B1D]! transition-all transform hover:-translate-y-1">
                    <social.Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Branding (only visible on mobile/tablet) */}
            <div className="col-span-2 sm:col-span-3 mt-8 pt-8 border-t border-white/10 lg:hidden">
              <div className="flex items-center gap-2.5 text-2xl md:text-3xl font-extrabold tracking-tighter uppercase">
                <img src="/logo-3.png" alt="LiftmyGrade" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90" />
                <span>LIFT<span className="font-light opacity-50">MYGRADE</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Blue Glow at Bottom */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
    </footer>
  );
}
