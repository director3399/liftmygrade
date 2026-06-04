"use client";

import React from "react";
import SectionLabel from "./SectionLabel";
import { ArrowRight, Check } from "./Icons";
import { motion } from "framer-motion";

const programs = [
  {
    name: "Global Study Readiness Report",
    price: "FREE",
    tag: "STARTER",
    outcome: "Lead Qualification + Personalized Direction",
    idealFor: "Bachelor's, Master's, PhD early planning",
    includes: [
      "Profile Evaluation",
      "Country & Course Alignment",
      "Goal-Based Strategy (PR, Career, Research)",
      "Gap Analysis",
      "Personalized Roadmap",
    ]
  },
  {
    name: "Admission Strategy & Execution",
    price: "$350",
    tag: "CORE",
    outcome: "Higher acceptance rates at top universities.",
    idealFor: "Bachelor's and Master's applicants",
    includes: [
      "5 SOPs / Admission Essays",
      "1 Academic CV & 1 LOR",
      "Strategy Consultation",
      "University Selection Strategy",
      "IELTS/TOEFL/GRE Planning",
      "Visa & Financial Planning Guidance",
    ]
  },
  {
    name: "Customized Admission Program",
    price: "Consultation Based",
    tag: "TAILORED",
    outcome: "Customized admission roadmap.",
    idealFor: "Complex profiles & niche programs",
    includes: [
      "Extended University Applications",
      "Multiple Country Planning",
      "Scholarship Strategy",
      "Additional Essays & Documentation",
      "Profile Building Support",
      "Specialized Application Requirements",
    ]
  },
  {
    name: "PhD Specialization",
    price: "$450",
    tag: "FLAGSHIP",
    highlight: true,
    outcome: "Secured funding and aligned supervision.",
    idealFor: "Research-focused Master's and PhD students.",
    includes: [
      "Professor Outreach Strategy",
      "Email Frameworks & Personalization",
      "Research Proposal Development",
      "University & Supervisor Targeting",
      "Funding Strategy",
      "Mentor Guidance",
    ]
  },
  {
    name: "Research & Publication Support",
    price: "Consultation Based",
    tag: "ACADEMIC",
    outcome: "Stronger research portfolio.",
    idealFor: "Students building a research-heavy profile",
    includes: [
      "Research Mentorship",
      "Paper Structuring",
      "Journal Publication Support",
      "Academic Profile Development",
      "Scopus, Google Scholar, UGC",
    ]
  },
  {
    name: "Global Career Branding Program",
    price: "$200",
    tag: "CAREER",
    outcome: "Career-Ready Before & After Admission.",
    idealFor: "Graduates planning post-study work and PR",
    includes: [
      "Resume Development",
      "LinkedIn Optimization",
      "Interview Preparation",
      "Country-Specific Job Strategy",
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-[#F6F8F7]" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <SectionLabel>Programs & Support Systems</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#171717] mt-6 mb-6 tracking-tight">
              Structured Academic <br className="hidden md:block" />
              Growth Programs
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Explore the programs, systems, and support services designed to help students move from academic planning to admissions, research opportunities, and long-term career growth.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((pkg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col p-8 lg:p-10 rounded-[32px] transition-all duration-500 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] ${
                pkg.highlight ? "border-2 border-blue-500 transform lg:-translate-y-4" : "border border-neutral-100"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md z-10 whitespace-nowrap">
                  Most Recommended
                </div>
              )}
              
              <div className="mb-6 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <span className={`text-[11px] font-bold uppercase tracking-widest ${pkg.highlight ? "text-blue-600" : "text-neutral-400"}`}>
                    [ {pkg.tag} ]
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#171717] leading-tight mt-2">{pkg.name}</h3>
                
                <div className="mt-4 pb-6 border-b border-neutral-100">
                  <span className="text-3xl font-extrabold text-[#171717] tracking-tight">{pkg.price}</span>
                  {pkg.price !== "FREE" && pkg.price !== "Consultation Based" && <span className="text-sm font-medium text-neutral-500 ml-1">/ program</span>}
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mb-8">
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Ideal For</span>
                  <p className="text-sm text-neutral-700 leading-snug">{pkg.idealFor}</p>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-1">Outcome</span>
                  <p className="text-sm font-medium text-[#171717] leading-snug">{pkg.outcome}</p>
                </div>
              </div>
              
              <div className="flex-1">
                <span className="block text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">Includes</span>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-none ${pkg.highlight ? "bg-blue-100 text-blue-600" : "bg-neutral-100 text-neutral-600"}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-[14px] text-neutral-700 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`w-full py-4 rounded-full font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-auto ${
                  pkg.highlight 
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg" 
                    : "bg-neutral-100 text-[#171717] hover:bg-neutral-200"
                }`}
              >
                {pkg.price === "Consultation Based" ? "Book Consultation" : "Get Started"} 
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
