import React from "react";
import { ArrowRight } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function Assessment() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white" id="assessment">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="pt-8">
            <SectionLabel>Assessment</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-bold text-[#171717] leading-tight mb-8 tracking-tighter mt-6">
              Check Your Global
              <br />
              Academic Readiness
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed mb-12 max-w-lg font-light">
              Get an instant preview of your profile strength and a customized recommendation for your academic journey abroad.
            </p>
            
            <div className="flex flex-col gap-6">
              {[
                "Personalized University Matching",
                "PhD Funding Probability Score",
                "Research Profile Gap Analysis"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-sm font-bold text-[#171717] tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#050B1D] rounded-[3rem] p-10 md:p-16 text-white shadow-2xl relative overflow-hidden group">
            {/* Subtle Gradient Glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
            
            <form className="relative z-10 flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Study Level</label>
                  <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                    <option className="bg-[#050B1D]">Select Level</option>
                    <option className="bg-[#050B1D]">Bachelor&apos;s</option>
                    <option className="bg-[#050B1D]">Master&apos;s</option>
                    <option className="bg-[#050B1D]">PhD</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Preferred Country</label>
                  <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer">
                    <option className="bg-[#050B1D]">Select Country</option>
                    <option className="bg-[#050B1D]">Germany</option>
                    <option className="bg-[#050B1D]">USA</option>
                    <option className="bg-[#050B1D]">UK</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Academic Goal</label>
                  <input type="text" placeholder="e.g. Research" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Budget Range</label>
                  <input type="text" placeholder="e.g. Fully Funded" className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white! py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all mt-4 shadow-xl shadow-blue-600/20">
                Start Assessment
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
