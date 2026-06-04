"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MeetOurTeam() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-[#F6F8F7]" id="team">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C362B] tracking-tight">The Team Behind Your Application</h2>
            
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-[32px] overflow-hidden h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600" alt="Admissions Writing Mentor" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[32px] bg-white p-6 sm:p-8 flex flex-col h-[220px]"
            >
               <span className="text-[11px] tracking-wider font-semibold text-neutral-400 mb-4 uppercase">[ POSTGRADUATE, FOREIGN UNIVERSITY ]</span>
               <h3 className="text-[15px] font-bold text-[#171717] mb-2 tracking-tight">Admissions Writing Mentors</h3>
               <p className="text-[14px] text-neutral-500 leading-relaxed">Help you articulate your motivation and research interests, structure a compelling SOP, and draft strong recommendation letters.</p>
            </motion.div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[32px] bg-white p-6 sm:p-8 flex flex-col h-[220px]"
            >
               <span className="text-[11px] tracking-wider font-semibold text-neutral-400 mb-4 uppercase">[ PHD-LEVEL EDITORS ]</span>
               <h3 className="text-[15px] font-bold text-[#171717] mb-2 tracking-tight">Research Editors</h3>
               <p className="text-[14px] text-neutral-500 leading-relaxed">Edit your research proposals and papers for clarity, academic rigour, and tone so your work reads at the standard reviewers expect.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-[32px] overflow-hidden h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=600" alt="Research Editor" fill className="object-cover" />
            </motion.div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-[32px] overflow-hidden h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" alt="Language Specialist" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[32px] bg-white p-6 sm:p-8 flex flex-col h-[220px]"
            >
               <span className="text-[11px] tracking-wider font-semibold text-neutral-400 mb-4 uppercase">[ ENGLISH-LANGUAGE SPECIALISTS ]</span>
               <h3 className="text-[15px] font-bold text-[#171717] mb-2 tracking-tight">Language & Clarity Specialists</h3>
               <p className="text-[14px] text-neutral-500 leading-relaxed">Refine grammar, flow, and word choice across every document so your application reads naturally and confidently in English.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
