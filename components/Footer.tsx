import React from "react";
import Image from "next/image";
import { ArrowRight, Instagram, Youtube, Facebook, Linkedin } from "./Icons";
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-12 lg:gap-16 items-start mb-16 sm:mb-24">
          
          {/* Column 1: Branding and Company Details */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="mb-8">
              <div className="flex items-center gap-2.5 text-2xl md:text-3xl font-extrabold tracking-tighter uppercase">
                <Image src="/logo-3.webp" alt="LiftmyGrade" width={160} height={40} className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90" />
                <span>LIFT<span className="font-light opacity-50">MYGRADE</span></span>
              </div>
            </div>

            <div className="mb-10 text-white/80 font-light max-w-lg leading-relaxed space-y-4">
              <p>
                <strong className="font-semibold text-white">LiftmyGrade</strong> is your Academic, Research, Career & Strategic Communication Ecosystem.
              </p>
              <p>
                We empower students, researchers, professionals, startups, and institutions through global education pathways, PhD admissions support, research and publication guidance, career branding, grant writing, company documentation, and strategic communication services that drive meaningful growth and long-term impact.
              </p>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-3 flex flex-col gap-4 lg:pl-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">Useful Links</h3>
            <div className="flex flex-col gap-3">
              <a href="/services" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Our Services</a>
              <a href="/how-we-work" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">How We Work</a>
              <a href="/pricing" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Pricing</a>
              <a href="/career-services" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Career Services</a>
              <a href="/what-to-expect" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">What to Expect</a>
              <a href="/#testimonial" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Student Success</a>
              <a href="/refund-policy" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Privacy & Refund</a>
            </div>
          </div>

          {/* Column 3: Get in Touch & Contact */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">Get in Touch</h3>
            
            <div className="flex items-center gap-3 mb-6">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/share/1YvxK4wTn7/?mibextid=wwXIfr" },
                { Icon: Instagram, href: "https://www.instagram.com/liftmygrade?igsh=Ynl2dXdrZHFqM2dp" },
                { Icon: Youtube, href: "https://www.youtube.com/@LiftMyGrade" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/lift-my-grade/" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white! flex items-center justify-center hover:bg-white hover:text-[#050B1D]! transition-all transform hover:-translate-y-1">
                  <social.Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-sm sm:text-base font-light text-white/80 space-y-2 mt-2">
              <p>+91 90513 84241</p>
              <a href="mailto:info@liftmygrade.com" className="hover:text-white transition-colors block">info@liftmygrade.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Blue Glow at Bottom */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
    </footer>
  );
}
