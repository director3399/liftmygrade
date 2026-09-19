import React from "react";
import Image from "next/image";

export default function Team() {
  return (
    <section
      className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-[#F6F8F7]"
      id="team"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 sm:mb-16 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C362B] tracking-tight">
              The Team Behind Your Work
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Col 1 — Research & PhD-Level Experts */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-4xl sm:rounded-[32px] overflow-hidden h-[250px] sm:h-[300px] md:h-[340px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1574966390692-5140d4310743?q=80&w=735&auto=format&fit=crop"
                alt="Research and PhD-Level Experts"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-4xl sm:rounded-[32px] bg-white p-6 sm:p-8 flex flex-col flex-1 min-h-[200px] md:min-h-[220px]">
              <span className="text-[11px] sm:text-[12px] tracking-wider font-semibold text-neutral-500 mb-3 sm:mb-4 uppercase">
                [ PhD-LEVEL · SUBJECT-MATCHED ]
              </span>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#171717] mb-2 tracking-tight">
                Research &amp; PhD-Level Experts
              </h3>
              <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">
                Review structure, argument, methodology and analysis in your own
                discipline — thesis, dissertation, manuscript and book — so your
                work reads at the standard reviewers and viva panels expect.
              </p>
            </div>
          </div>

          {/* Col 2 — Admissions Writing Mentors */}
          <div className="flex flex-col gap-4">
            <div className="order-2 md:order-1 rounded-4xl sm:rounded-[32px] bg-white p-6 sm:p-8 flex flex-col flex-1 min-h-[200px] md:min-h-[220px]">
              <span className="text-[11px] sm:text-[12px] tracking-wider font-semibold text-neutral-500 mb-3 sm:mb-4 uppercase">
                [ POSTGRADUATE · FOREIGN UNIVERSITY ]
              </span>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#171717] mb-2 tracking-tight">
                Admissions Writing Mentors
              </h3>
              <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">
                Help you articulate your motivation and research interests,
                structure a compelling SOP, and guide strong recommendation
                letters.
              </p>
            </div>
            <div className="order-1 md:order-2 relative rounded-4xl sm:rounded-[32px] overflow-hidden h-[250px] sm:h-[300px] md:h-[340px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1671774635688-e02ae66974df?q=80&w=687&auto=format&fit=crop"
                alt="Admissions Writing Mentor"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Col 3 — Language & Clarity Specialists */}
          <div className="flex flex-col gap-4">
            <div className="relative rounded-4xl sm:rounded-[32px] overflow-hidden h-[250px] sm:h-[300px] md:h-[340px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1610890912968-63526299424e?q=80&w=765&auto=format&fit=crop"
                alt="Language and Clarity Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-4xl sm:rounded-[32px] bg-white p-6 sm:p-8 flex flex-col flex-1 min-h-[200px] md:min-h-[220px]">
              <span className="text-[11px] sm:text-[12px] tracking-wider font-semibold text-neutral-500 mb-3 sm:mb-4 uppercase">
                [ ENGLISH-LANGUAGE SPECIALISTS ]
              </span>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-[#171717] mb-2 tracking-tight">
                Language &amp; Clarity Specialists
              </h3>
              <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed">
                Refine grammar, flow and word choice across every document so
                your work reads naturally and confidently in English.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}