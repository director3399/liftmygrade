"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function BlogSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-white" id="blog">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#171717] tracking-tight leading-tight">
              Explore Our Latest Insights &<br />
              Academic Journeys
            </h2>
            <p className="mt-6 text-[15px] text-neutral-600 max-w-2xl leading-relaxed mx-auto">
              Dive into expert tips, personal success stories, and educational resources to support your global study goals. We share content designed to nurture your academic profile and application strategy one post at a time.
            </p>
          </motion.div>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row bg-[#EBEFEA] rounded-4xl overflow-hidden mb-8 shadow-sm cursor-pointer group"
        >
          {/* Left Image */}
          <div className="relative w-full md:w-[45%] h-[300px] md:h-auto min-h-[350px]">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000"
              alt="Student researching"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Right Content */}
          <div className="p-8 md:p-12 flex flex-col justify-center w-full md:w-[55%] relative">
            <h3 className="text-3xl md:text-4xl font-serif text-[#1C362B] mb-4 leading-[1.2] tracking-tight group-hover:text-black transition-colors">
              5 Strategic Ways To Secure A Fully Funded PhD
            </h3>
            <p className="text-sm text-neutral-700 mb-10 max-w-md leading-relaxed">
              Unlock the secrets of academic research proposals and professor outreach with these powerful practices used by successful scholars around the world.
            </p>
            
            <div className="flex justify-between items-end mt-auto pt-4 border-t border-black/5">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
                    alt="Dr. Ananya Sharma"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-[15px] text-[#1C362B] leading-tight">Dr. Ananya Sharma</span>
                  <span className="text-[12px] text-neutral-600">Admissions Mentor & Researcher</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="bg-[#1C362B] text-white px-4 py-1.5 rounded-full text-[11px] font-medium tracking-wide">
                PhD Admissions
              </div>
            </div>
          </div>
        </motion.div>

        {/* Small Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Post 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden mb-5 bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600" 
                alt="Writing SOP" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 bg-[#EBEFEA] text-[#1C362B] px-4 py-1 rounded-full text-[11px] font-medium">
                Application Tips
              </div>
            </div>
            <h3 className="text-[17px] font-serif text-[#1C362B] text-center leading-snug px-4 group-hover:text-black transition-colors">
              A Beginner's Guide To Writing A Winning Statement Of Purpose
            </h3>
          </motion.div>

          {/* Post 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden mb-5 bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1723987135977-ae935608939e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Undergrad Prep" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 bg-[#EBEFEA] text-[#1C362B] px-4 py-1 rounded-full text-[11px] font-medium">
                Undergrad Prep
              </div>
            </div>
            <h3 className="text-[17px] font-serif text-[#1C362B] text-center leading-snug px-4 group-hover:text-black transition-colors">
              How Early Profile Building Can Shape Your Ivy League Journey
            </h3>
          </motion.div>

          {/* Post 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col group cursor-pointer"
          >
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden mb-5 bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600" 
                alt="Networking" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 bg-[#EBEFEA] text-[#1C362B] px-4 py-1 rounded-full text-[11px] font-medium">
                Mentorship
              </div>
            </div>
            <h3 className="text-[17px] font-serif text-[#1C362B] text-center leading-snug px-4 group-hover:text-black transition-colors">
              The Power Of Academic Networking: Securing Strong Recommendations
            </h3>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
