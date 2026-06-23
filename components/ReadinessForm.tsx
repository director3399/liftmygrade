"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Form Validation Schema
const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  dialCode: z.string().min(1, "Dial code is required"),
  phone: z.string().min(7, "Phone number is too short").max(12, "Phone number is too long"),
  studyLevel: z.enum(["Bachelor's", "Master's", "PhD"], {
    message: "Please select your study level",
  }),
  country: z.string().min(1, "Please select a preferred country"),
  subject: z.string().min(1, "Please select your preferred field"),
  goal: z.string().min(1, "Please select your primary goal"),
  stream: z.string().optional(),
  scoreType: z.string().optional(),
  scoreValue: z.string().optional(),
  publications: z.string().optional(),
  budget: z.string().min(1, "Please select an annual budget preference"),
});

type FormData = z.infer<typeof schema>;

export default function ReadinessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitData, setSubmitData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dialCode: "+91",
      country: "Open to recommendations",
      budget: "Not sure — need guidance",
    },
  });

  const watchStudyLevel = watch("studyLevel");

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/readiness", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitData(data);
      setIsSubmitted(true);
      window.scrollTo({ top: document.getElementById('readiness-form-container')?.offsetTop || 0, behavior: "smooth" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleRestart = () => {
    reset();
    setIsSubmitted(false);
    setSubmitData(null);
    window.scrollTo({ top: document.getElementById('readiness-form-container')?.offsetTop || 0, behavior: "smooth" });
  };

  return (
    <div id="readiness-form-container" className="flex flex-col justify-center min-h-[600px] w-full max-w-4xl mx-auto">
      {isSubmitted && submitData ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center text-center h-full justify-center py-12">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h3 className="text-3xl font-bold text-[#171717] tracking-tight mb-4">
            Thank you, {submitData.fullName.split(" ")[0]}!
          </h3>
          <p className="text-neutral-500 max-w-md mx-auto mb-10 leading-relaxed">
            Your readiness profile has been recorded. Our admissions mentors will review it and reach out within 48 hours with your personalised pathway.
          </p>
          <button
            onClick={handleRestart}
            className="bg-white border-2 border-neutral-200 text-[#171717] font-semibold py-3 px-8 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
          >
            Submit another assessment
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" noValidate>
            
          <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-300">
            {/* Section: Your Details */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-[#171717] tracking-tight border-b border-neutral-100 pb-2">Your Details</h3>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Full Name *</label>
                <input 
                  {...register("fullName")}
                  type="text" 
                  className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all placeholder:text-neutral-300 placeholder:font-normal"
                  placeholder="e.g. Ananya Sharma"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-2 font-medium">{errors.fullName.message}</p>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Email Address *</label>
                  <input 
                    {...register("email")}
                    type="email" 
                    className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all placeholder:text-neutral-300 placeholder:font-normal"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-2 font-medium">{errors.email.message}</p>}
                </div>
                
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Phone Number *</label>
                  <div className="flex gap-4">
                    <select
                      {...register("dialCode")}
                      className="w-24 bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+64">🇳🇿 +64</option>
                    </select>
                    <input 
                      {...register("phone")}
                      type="tel" 
                      className="flex-1 bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all placeholder:text-neutral-300 placeholder:font-normal"
                      placeholder="98XXXXXXXX"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-2 font-medium">{errors.phone.message}</p>}
                </div>
              </div>
            </div>

            {/* Section: Study Plan */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-[#171717] tracking-tight border-b border-neutral-100 pb-2">Study Plan</h3>
              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Study Level *</label>
                <div className="flex flex-wrap gap-3">
                  {["Bachelor's", "Master's", "PhD"].map((level) => (
                    <label key={level} className={`cursor-pointer px-5 py-3 rounded-full border-2 text-sm font-semibold transition-all ${watchStudyLevel === level ? "border-blue-600 bg-blue-50 text-blue-700" : "border-neutral-200 text-neutral-600 hover:border-blue-300"}`}>
                      <input 
                        type="radio" 
                        {...register("studyLevel")} 
                        value={level} 
                        className="hidden" 
                      />
                      {level}
                    </label>
                  ))}
                </div>
                {errors.studyLevel && <p className="text-red-500 text-xs mt-2 font-medium">{errors.studyLevel.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Preferred Country *</label>
                  <select 
                    {...register("country")}
                    className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                  >
                    <option value="Open to recommendations">Open to recommendations</option>
                    <optgroup label="North America">
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                    </optgroup>
                    <optgroup label="United Kingdom & Europe">
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Italy">Italy</option>
                      <option value="Switzerland">Switzerland</option>
                    </optgroup>
                    <optgroup label="Australia & Oceania">
                      <option value="Australia">Australia</option>
                      <option value="New Zealand">New Zealand</option>
                    </optgroup>
                    <optgroup label="Asia & Middle East">
                      <option value="Singapore">Singapore</option>
                      <option value="UAE (Dubai)">UAE (Dubai)</option>
                      <option value="Japan">Japan</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Hong Kong">Hong Kong</option>
                    </optgroup>
                    <option value="Other / Not listed">Other / Not listed</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Preferred Subject / Field *</label>
                  <select 
                    {...register("subject")}
                    defaultValue=""
                    className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Select a field</option>
                    <option value="Engineering & Technology">Engineering & Technology</option>
                    <option value="Computer Science / IT / Data Science">Computer Science / IT / Data Science</option>
                    <option value="Business, Management & Finance">Business, Management & Finance</option>
                    <option value="Medicine & Health Sciences">Medicine & Health Sciences</option>
                    <option value="Life Sciences & Biotechnology">Life Sciences & Biotechnology</option>
                    <option value="Physical Sciences & Mathematics">Physical Sciences & Mathematics</option>
                    <option value="Social Sciences & Economics">Social Sciences & Economics</option>
                    <option value="Law">Law</option>
                    <option value="Arts, Humanities & Design">Arts, Humanities & Design</option>
                    <option value="Architecture & Planning">Architecture & Planning</option>
                    <option value="Media & Communication">Media & Communication</option>
                    <option value="Education">Education</option>
                    <option value="Environment & Sustainability">Environment & Sustainability</option>
                    <option value="Other">Other / Undecided</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-2 font-medium">{errors.subject.message}</p>}
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Primary Goal *</label>
                <select 
                  {...register("goal")}
                  defaultValue=""
                  className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select your main goal</option>
                  <option value="PR / Settlement abroad">PR / Settlement abroad</option>
                  <option value="Research / PhD track">Research / PhD track</option>
                  <option value="Scholarship / Funding">Scholarship / Funding</option>
                  <option value="Career growth & global exposure">Career growth & global exposure</option>
                  <option value="Quality of education / brand university">Quality of education / brand university</option>
                  <option value="Work experience & post-study work visa">Work experience & post-study work visa</option>
                  <option value="Not sure yet">Not sure yet — need guidance</option>
                </select>
                {errors.goal && <p className="text-red-500 text-xs mt-2 font-medium">{errors.goal.message}</p>}
              </div>
            </div>

            {/* Section: Background & Budget */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-[#171717] tracking-tight border-b border-neutral-100 pb-2">Background & Budget</h3>
              
              {!watchStudyLevel && (
                <p className="text-base text-neutral-500 italic">
                  Select a study level above to see relevant academic questions.
                </p>
              )}

              <AnimatePresence>
                {watchStudyLevel === "Bachelor's" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Class 11 / 12 Stream</label>
                      <select 
                        {...register("stream")}
                        defaultValue=""
                        className="w-full md:w-1/2 bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your stream</option>
                        <option value="Science (PCM)">Science (PCM)</option>
                        <option value="Science (PCB)">Science (PCB)</option>
                        <option value="Science (PCMB)">Science (PCMB)</option>
                        <option value="Commerce (with Maths)">Commerce (with Maths)</option>
                        <option value="Commerce (without Maths)">Commerce (without Maths)</option>
                        <option value="Humanities / Arts">Humanities / Arts</option>
                        <option value="Vocational">Vocational</option>
                      </select>
                    </div>
                  </motion.div>
                )}

                {watchStudyLevel === "Master's" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Score Type</label>
                        <select 
                          {...register("scoreType")}
                          defaultValue=""
                          className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Select</option>
                          <option value="CGPA (out of 10)">CGPA (out of 10)</option>
                          <option value="CGPA (out of 4)">CGPA (out of 4)</option>
                          <option value="Percentage (%)">Percentage (%)</option>
                        </select>
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Bachelor's Degree Score</label>
                        <input 
                          {...register("scoreValue")}
                          type="text" 
                          className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all placeholder:text-neutral-300 placeholder:font-normal"
                          placeholder="e.g. 8.2 or 78%"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {watchStudyLevel === "PhD" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="group">
                      <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Research Publications</label>
                      <select 
                        {...register("publications")}
                        defaultValue=""
                        className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your publication status</option>
                        <option value="Yes — published in a peer-reviewed journal">Yes — published in a peer-reviewed journal</option>
                        <option value="Yes — conference paper(s) only">Yes — conference paper(s) only</option>
                        <option value="In progress / under review">In progress / under review</option>
                        <option value="No publications yet">No publications yet</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="group">
                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Annual Budget Preference *</label>
                <select 
                  {...register("budget")}
                  className="w-full md:w-1/2 bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                >
                  <option value="Not sure — need guidance">Not sure — need guidance</option>
                  <option value="Under ₹10 lakh / year">Under ₹10 lakh / year</option>
                  <option value="₹10 – 20 lakh / year">₹10 – 20 lakh / year</option>
                  <option value="₹20 – 35 lakh / year">₹20 – 35 lakh / year</option>
                  <option value="₹35 – 50 lakh / year">₹35 – 50 lakh / year</option>
                  <option value="Above ₹50 lakh / year">Above ₹50 lakh / year</option>
                  <option value="Seeking full funding / scholarship only">Seeking full funding / scholarship only</option>
                </select>
                <p className="mt-2 text-xs text-neutral-400 font-medium">Approximate total annual budget (tuition + living). This stays confidential.</p>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="pt-10 flex items-center justify-end mt-12 border-t border-neutral-100">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-4 px-10 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Get My Readiness Form"}
              {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
