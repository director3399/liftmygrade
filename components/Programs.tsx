import React from "react";
import SectionLabel from "./SectionLabel";
import { ArrowRight } from "./Icons";

type Program = {
  label: string;
  title: string;
  idealFor: string;
  outcome: string;
  features: string[];
  cta: string;
  link: string;
  featured?: boolean;
};

export default function Programs() {
  const researchPrograms: Program[] = [
    {
      label: "[ Thesis Help ]",
      title: "Thesis Help",
      idealFor: "Master's, MPhil & PhD candidates with a draft",
      outcome: "A submission-ready thesis you can defend",
      features: [
        "Structural review & academic editing",
        "University-specific citation & formatting check",
        "Literature review organisation",
        "Tracked-changes delivery",
        "AI, plagiarism & reference report",
      ],
      cta: "Request details",
      link: "/thesis-help",
      featured: true,
    },
    {
      label: "[ Dissertation Support ]",
      title: "Dissertation Support",
      idealFor: "Candidates at any stage — proposal to defense",
      outcome: "Chapters that meet supervisor and university standards",
      features: [
        "Proposal & methodology review",
        "Chapter-wise developmental review",
        "Data-analysis clarity review",
        "Defense preparation",
        "Tracked changes + verification report",
      ],
      cta: "Request details",
      link: "/dissertation-help",
      featured: true,
    },
    {
      label: "[ Publication Help ]",
      title: "Publication Help",
      idealFor: "Researchers submitting to peer-reviewed journals",
      outcome: "A positioned manuscript and a verified journal shortlist",
      features: [
        "Manuscript editing & positioning",
        "Journal shortlist verified against official indexing",
        "Predatory journal screening",
        "Submission formatting",
        "Response-to-reviewer support",
      ],
      cta: "Request details",
      link: "/publication-help",
      featured: true,
    },
    {
      label: "[ Book Help ]",
      title: "Book Help",
      idealFor: "Authors, volume editors and chapter contributors",
      outcome: "A publisher-ready manuscript",
      features: [
        "Developmental review",
        "Line & copy editing",
        "Citation/reference formatting",
        "Publisher submission formatting",
        "Reference/DOI verification",
      ],
      cta: "Request details",
      link: "/book-help",
      featured: true,
    },
  ];

  const admissionsPrograms: Program[] = [
    {
      label: "[ Starter ]",
      title: "Global Study Readiness Form",
      idealFor: "Bachelor's and Master's early planning",
      outcome: "Personalised direction",
      features: [
        "Profile evaluation",
        "Country & course alignment",
        "Goal-based strategy (PR, career, research)",
        "Gap analysis",
        "Personalised roadmap",
      ],
      cta: "Start",
      link: "/readiness-assessment",
    },
    {
      label: "[ Core ]",
      title: "Admission Strategy & Execution",
      idealFor: "Bachelor's and Master's applicants",
      outcome: "Higher acceptance rates at top universities",
      features: [
        "5 SOPs / admission essays",
        "1 academic CV & 1 LOR",
        "Strategy consultation",
        "University selection strategy",
        "IELTS/TOEFL/GRE planning",
        "Visa & financial planning guidance",
      ],
      cta: "Request details",
      link: "/services#admissions",
    },
    {
      label: "[ Career ]",
      title: "Global Career Branding Program",
      idealFor: "Graduates planning post-study work and PR",
      outcome: "Career-ready before & after admission",
      features: [
        "Résumé development",
        "LinkedIn optimisation",
        "Interview preparation",
        "Country-specific job strategy",
      ],
      cta: "Request details",
      link: "/career-services",
    },
  ];

  const ProgramCard = ({ p }: { p: Program }) => (
    <div
      className={`flex flex-col gap-5 rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 ${
        p.featured
          ? "bg-gradient-to-br from-amber-50/60 via-white to-white border-amber-200 hover:border-amber-300 hover:shadow-[0_12px_40px_-10px_rgba(201,162,107,0.25)]"
          : "bg-white border-neutral-200 hover:border-blue-500/40 hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.18)]"
      }`}
    >
      {/* Label */}
      <span
        className={`text-[10px] font-bold uppercase tracking-widest ${
          p.featured ? "text-amber-700" : "text-blue-600"
        }`}
      >
        {p.label}
      </span>

      {/* Title */}
      <h3 className="text-xl sm:text-[22px] font-bold text-[#171717] tracking-tight leading-tight">
        {p.title}
      </h3>

      {/* Ideal for / Outcome */}
      <div className="grid grid-cols-1 gap-3 py-4 border-y border-neutral-100">
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
            Ideal For
          </div>
          <p className="text-sm text-[#171717] leading-relaxed">{p.idealFor}</p>
        </div>
        <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-1">
            Outcome
          </div>
          <p className="text-sm text-[#171717] leading-relaxed">{p.outcome}</p>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2 flex-1">
        {p.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-700 leading-relaxed">
            <svg
              className="w-4 h-4 text-green-600 shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={p.link}
        className={`inline-flex items-center gap-2 text-sm font-semibold mt-2 transition-all ${
          p.featured ? "text-amber-700 hover:text-amber-800" : "text-blue-600 hover:text-blue-800"
        }`}
      >
        {p.cta}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );

  return (
    <section
      className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white"
      id="programs"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 sm:mb-16">
          <div className="flex flex-col">
            <SectionLabel>Programs</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] leading-[1.1] tracking-tight mt-4">
              Clear Programs,
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Structured Support</span>
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
              Thesis, dissertation, publication and book help lead; admissions
              and career programs follow. Every program starts with a free
              consultation where we scope your project and confirm a fee in
              writing before any work begins.
            </p>
          </div>
        </div>

        {/* Research Programs (4) */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
            Research &amp; Publication
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {researchPrograms.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        {/* Admissions & Career Programs (3) */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
            Admissions &amp; Career
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {admissionsPrograms.map((p) => (
              <ProgramCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        {/* Bottom note — matches client's consultation-based pricing */}
        <p className="text-center text-xs sm:text-sm text-neutral-500 mt-12 leading-relaxed">
          Not sure which program fits?{" "}
          <a
            href="/#contact"
            className="text-blue-600 font-semibold hover:underline"
          >
            Book a free consultation
          </a>{" "}
          and we'll point you to the right one.
        </p>
      </div>
    </section>
  );
}