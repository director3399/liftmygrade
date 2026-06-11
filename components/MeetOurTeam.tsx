"use client";

import React from "react";
import Image from "next/image";

export default function MeetOurTeam() {
  return (
    <section className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-[#F6F8F7]" id="team">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C362B] tracking-tight">The Team Behind Your Application</h2>
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <div 
              className="relative rounded-[2rem] sm:rounded-[32px] overflow-hidden h-[250px] sm:h-[300px] md:h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1574966390692-5140d4310743?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Admissions Writing Mentor" fill className="object-cover" />
            </div>
            <div 
              className="rounded-[2rem] sm:rounded-[32px] bg-white p-6 sm:p-8 flex flex-col min-h-[200px] md:h-[220px]"
            >
               <span className="text-[11px] sm:text-[12px] tracking-wider font-semibold text-neutral-500 mb-3 sm:mb-4 uppercase">[ POSTGRADUATE, FOREIGN UNIVERSITY ]</span>
               <h3 className="text-[17px] sm:text-[18px] font-bold text-[#171717] mb-2 tracking-tight">Admissions Writing Mentors</h3>
               <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">Help you articulate your motivation and research interests, structure a compelling SOP, and draft strong recommendation letters.</p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <div 
              className="order-2 md:order-1 rounded-[2rem] sm:rounded-[32px] bg-white p-6 sm:p-8 flex flex-col min-h-[200px] md:h-[220px]"
            >
               <span className="text-[11px] sm:text-[12px] tracking-wider font-semibold text-neutral-500 mb-3 sm:mb-4 uppercase">[ PHD-LEVEL EDITORS ]</span>
               <h3 className="text-[17px] sm:text-[18px] font-bold text-[#171717] mb-2 tracking-tight">Research Editors</h3>
               <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">Edit your research proposals and papers for clarity, academic rigour, and tone so your work reads at the standard reviewers expect.</p>
            </div>
            <div 
              className="order-1 md:order-2 relative rounded-[2rem] sm:rounded-[32px] overflow-hidden h-[250px] sm:h-[300px] md:h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1671774635688-e02ae66974df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Research Editor" fill className="object-cover" />
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <div 
              className="relative rounded-[2rem] sm:rounded-[32px] overflow-hidden h-[250px] sm:h-[300px] md:h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1610890912968-63526299424e?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Language Specialist" fill className="object-cover" />
            </div>
            <div 
              className="rounded-[2rem] sm:rounded-[32px] bg-white p-6 sm:p-8 flex flex-col min-h-[200px] md:h-[220px]"
            >
               <span className="text-[11px] sm:text-[12px] tracking-wider font-semibold text-neutral-500 mb-3 sm:mb-4 uppercase">[ ENGLISH-LANGUAGE SPECIALISTS ]</span>
               <h3 className="text-[17px] sm:text-[18px] font-bold text-[#171717] mb-2 tracking-tight">Language & Clarity Specialists</h3>
               <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">Refine grammar, flow, and word choice across every document so your application reads naturally and confidently in English.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
