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
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C362B] tracking-tight">Meet Our Team</h2>
            <p className="mt-4 text-neutral-600 max-w-2xl">The experts working behind the scenes to make your global academic dreams a reality.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Col 1 */}
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-[32px] overflow-hidden h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600" alt="Alex Chen" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-[32px] bg-white p-6 sm:p-8 flex flex-col h-[220px]"
            >
               <span className="text-[11px] tracking-wider font-semibold text-neutral-400 mb-4">[ FOUNDER & DESIGN DIRECTOR ]</span>
               <h3 className="text-[15px] font-bold text-[#171717] mb-2 tracking-tight">MOHAMED LATRACH</h3>
               <p className="text-[14px] text-neutral-500 leading-relaxed">Obsessed with high-converting SaaS dashboards and intuitive onboarding flows.</p>
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
               <span className="text-[11px] tracking-wider font-semibold text-neutral-400 mb-4">[ TECHNICAL LEAD ]</span>
               <h3 className="text-[15px] font-bold text-[#171717] mb-2 tracking-tight">ALEX CHEN</h3>
               <p className="text-[14px] text-neutral-500 leading-relaxed">The wizard who turns wild design concepts into clean, bug-free code.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative rounded-[32px] overflow-hidden h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?q=80&w=600" alt="Mohamed Latrach" fill className="object-cover" />
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
              <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600" alt="Sarah Miller" fill className="object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[32px] bg-white p-6 sm:p-8 flex flex-col h-[220px]"
            >
               <span className="text-[11px] tracking-wider font-semibold text-neutral-400 mb-4">[ HEAD OF OPERATIONS ]</span>
               <h3 className="text-[15px] font-bold text-[#171717] mb-2 tracking-tight">SARAH MILLER</h3>
               <p className="text-[14px] text-neutral-500 leading-relaxed">The reason your project will actually launch on time. She never misses a deadline.</p>
            </motion.div>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[32px] bg-white p-6 sm:p-8 flex flex-col h-[220px]"
            >
               <span className="text-[11px] tracking-wider font-semibold text-neutral-400 mb-4">[ BRAND & COPY ]</span>
               <h3 className="text-[15px] font-bold text-[#171717] mb-2 tracking-tight">MARCUS THORNE</h3>
               <p className="text-[14px] text-neutral-500 leading-relaxed">Writes the words that turn your visitors into paying customers.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative rounded-[32px] overflow-hidden h-[340px] w-full"
            >
              <Image src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=600" alt="Marcus Thorne" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
