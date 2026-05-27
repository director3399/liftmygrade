import React from "react";
import SectionLabel from "./SectionLabel";
import { ArrowRight, Check } from "./Icons";

export default function Pricing() {
  const packages = [
    {
      name: "Foundation",
      description: "Essential guidance for students beginning their academic journey.",
      price: "$499",
      features: [
        "Initial Profile Evaluation",
        "University Shortlisting (up to 5)",
        "Basic SOP & LOR Guidance",
        "Application Strategy Session"
      ],
      popular: false,
    },
    {
      name: "Growth",
      description: "Comprehensive support for master's and competitive bachelor's programs.",
      price: "$1,199",
      features: [
        "Everything in Foundation",
        "End-to-end Application Support",
        "Unlimited SOP & Essay Revisions",
        "Interview Preparation Mock Sessions",
        "Visa Application Assistance"
      ],
      popular: true,
    },
    {
      name: "Advanced",
      description: "Deep mentorship for PhDs, research pathways, and funded programs.",
      price: "$2,499",
      features: [
        "Everything in Growth",
        "Research Proposal Development",
        "Professor Outreach Strategy",
        "Publication & Paper Support",
        "Fellowship & Funding Guidance"
      ],
      popular: false,
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-neutral-50" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionLabel>Investment</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#171717] mt-6 mb-6">
            Structured Packages for <br className="hidden md:block" />
            Every Stage of Your Journey
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Transparent, structured mentorship designed to reduce cognitive overload and provide clear pathways to academic success abroad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                pkg.popular 
                  ? 'bg-white border-blue-200 shadow-xl shadow-blue-900/5 ring-1 ring-blue-500/10 scale-100 md:scale-105 z-10' 
                  : 'bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Recommended
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#171717] mb-2">{pkg.name}</h3>
                <p className="text-sm text-neutral-600 h-10">{pkg.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#171717]">{pkg.price}</span>
                <span className="text-sm text-neutral-500 font-medium"> / program</span>
              </div>
              
              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 shrink-0 text-blue-600">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-neutral-700 leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={`w-full py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${
                  pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-neutral-100 text-[#171717] hover:bg-neutral-200'
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
