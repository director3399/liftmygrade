import React from "react";
import SectionLabel from "./SectionLabel";
import { ArrowRight } from "./Icons";

export default function StartPaths() {
  const paths = [
    {
      title: "Research & Publication",
      desc: "Thesis, dissertation, publication, literature review or methodology help — tell us your stage and subject.",
      iconColor: "text-green-600",
      iconBg: "bg-green-50",
      ctaText: "Chat on WhatsApp",
      ctaLink:
        "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20a%20free%20consultation%20about%20my%20thesis%20/%20dissertation%20/%20publication.",
      ctaStyle:
        "bg-green-600 text-white hover:bg-green-700",
      featured: true,
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
      ),
    },
    {
      title: "International Admissions",
      desc: "Bachelor's or Master's abroad — readiness assessment, country shortlisting, detailed roadmap, and your application documents.",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      ctaText: "Readiness Form",
      ctaLink: "/readiness-assessment",
      ctaStyle: "bg-white border border-neutral-200 text-[#171717] hover:bg-neutral-50",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: "Book & Chapter Editing",
      desc: "Developmental review, line editing and publisher formatting for books, volumes and chapters.",
      iconColor: "text-amber-700",
      iconBg: "bg-amber-50",
      ctaText: "Chat on WhatsApp",
      ctaLink:
        "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20help%20with%20my%20book%20/%20book%20chapter.",
      ctaStyle: "bg-green-600 text-white hover:bg-green-700",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
      ),
    },
    {
      title: "Career & Professional",
      desc: "Résumé, LinkedIn, company SOP, grant writing and PR writing — project-based support.",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
      ctaText: "Chat on WhatsApp",
      ctaLink:
        "https://wa.me/919147720702?text=Hi%20LiftmyGrade%2C%20I%27d%20like%20a%20career%20/%20professional%20consultation.",
      ctaStyle:
        "bg-white border border-neutral-200 text-[#171717] hover:bg-neutral-50",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white"
      id="start-here"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="flex flex-col">
            <SectionLabel>Not Sure Where To Start?</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-4">
              Begin With a Consultation
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">or a Readiness Assessment</span>
                <svg
                  className="absolute bottom-0 left-0 w-full h-3 text-blue-500 -z-0"
                  viewBox="0 0 100 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 5,15 C 20,5 40,12 60,8 C 80,4 90,15 95,12"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start justify-end">
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              Pick the path that matches where you are right now. We'll point
              you to exactly the right service for your goal.
            </p>
          </div>
        </div>

        {/* 4-Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {paths.map((p, i) => (
            <div
              key={i}
              className={`flex flex-col gap-4 rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 ${
                p.featured
                  ? "bg-gradient-to-br from-green-50/60 via-white to-white border-green-200 hover:border-green-300 hover:shadow-[0_12px_40px_-10px_rgba(46,194,126,0.2)]"
                  : "bg-white border-neutral-200 hover:border-blue-500/40 hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.15)]"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${p.iconBg} ${p.iconColor} flex items-center justify-center shrink-0`}
              >
                {p.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#171717] tracking-tight leading-tight">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed flex-1">
                {p.desc}
              </p>

              {/* CTA */}
              <a
                href={p.ctaLink}
                target={p.ctaLink.startsWith("http") ? "_blank" : undefined}
                rel={p.ctaLink.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-colors mt-2 ${p.ctaStyle}`}
              >
                {p.ctaText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}