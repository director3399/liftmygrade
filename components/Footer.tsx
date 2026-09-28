import React from "react";
import Image from "next/image";
import { ArrowRight, Instagram, Youtube, Facebook, Linkedin } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative bg-[#050B1D] text-white pt-24 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      {/* Top Gradient Overlay for smooth transition from content */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Bottom Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-12 lg:gap-16 items-start mb-16 sm:mb-24">

          {/* Column 1: Branding and Company Details */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="mb-8">
              <div className="flex items-center gap-2.5 text-2xl md:text-3xl font-extrabold tracking-tighter uppercase">
                <Image src="/logo-3.webp" alt="LiftmyGrade" width={160} height={40} className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90" style={{ width: 'auto' }} />
                <span>LIFT<span className="font-light opacity-50">MYGRADE</span></span>
              </div>
            </div>

            <div className="mb-10 text-white/80 font-light max-w-lg leading-relaxed space-y-4">
              <p>
                <strong className="font-semibold text-white">LiftMyGrade</strong> is your Academic, Research, Career & Strategic Communication Ecosystem.
              </p>
              <p>
                We help scholars and researchers move from thesis and dissertation work to publication, with PhD-level experts, chapter-wise review, and a full AI, plagiarism & reference/DOI verification report on every project. We also support Bachelor's, Master's, and PhD applicants with SOPs, LORs, and academic CVs, and provide career branding, grant writing, and strategic communication for professionals and institutions.
              </p>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-3 flex flex-col gap-4 lg:pl-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight">Useful Links</h3>
            <div className="flex flex-col gap-3">
              <a href="/services" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Our Services</a>
              <a href="/how-we-work" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">How We Work</a>
              <a href="/career-services" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Career Services</a>
              <a href="/blog" className="text-sm sm:text-base font-light text-white/70 hover:text-white transition-colors">Blog</a>
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

            <div className="text-sm sm:text-base font-light text-white/80 space-y-3 mt-2">
              {/* Phone with icon */}
              <a
                href="tel:+919147720702"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-[#050B1D] transition-all shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>+91 9147720702</span>
              </a>

              {/* Email with icon */}
              <a
                href="mailto:info@liftmygrade.com"
                className="flex items-center gap-3 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 group-hover:bg-white group-hover:text-[#050B1D] transition-all shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span>info@liftmygrade.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Blue Glow at Bottom */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none" />
    </footer>
  );
}