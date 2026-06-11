"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { useSearchParams } from "next/navigation";

const schema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  dialCode: z.string().min(1, "Dial code is required"),
  phone: z.string().min(7, "Phone number is too short").max(12, "Phone number is too long"),
  
  status: z.string().min(1, "Please select an option"),
  industry: z.string().optional(),
  
  services: z.array(z.string()).min(1, "Please select at least one service"),
  
  resumeType: z.string().optional(),
  resumeTarget: z.string().optional(),
  
  liUrl: z.string().optional(),
  liGoal: z.string().optional(),
  
  sopOrg: z.string().optional(),
  sopPurpose: z.string().optional(),
  
  grantBody: z.string().optional(),
  grantOrg: z.string().optional(),
  
  prDeliverables: z.array(z.string()).optional(),
  
  brief: z.string().min(5, "Please tell us a little about your goal"),
  timeline: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const TOTAL_STEPS = 4;

export default function ContactUs() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitData, setSubmitData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      dialCode: "+91",
      services: [],
      prDeliverables: [],
    },
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setValue("services", [serviceParam], { shouldValidate: true });
    }
  }, [searchParams, setValue]);

  const watchServices = watch("services") || [];
  const watchPrDeliverables = watch("prDeliverables") || [];

  const handleNext = async () => {
    let fieldsToValidate: any[] = [];
    if (currentStep === 1) fieldsToValidate = ["fullName", "email", "phone"];
    if (currentStep === 2) fieldsToValidate = ["status"];
    if (currentStep === 3) fieldsToValidate = ["services"];

    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, TOTAL_STEPS));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      setSubmitData(data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleRestart = () => {
    reset();
    setCurrentStep(1);
    setIsSubmitted(false);
    setSubmitData(null);
  };

  const toggleService = (service: string) => {
    const current = watch("services") || [];
    if (current.includes(service)) {
      setValue("services", current.filter((s) => s !== service), { shouldValidate: true });
    } else {
      setValue("services", [...current, service], { shouldValidate: true });
    }
  };

  const togglePrDeliverable = (deliverable: string) => {
    const current = watch("prDeliverables") || [];
    if (current.includes(deliverable)) {
      setValue("prDeliverables", current.filter((d) => d !== deliverable));
    } else {
      setValue("prDeliverables", [...current, deliverable]);
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-[#F6F8F7] relative" id="contact">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#171717] tracking-tight mt-6 mb-6 leading-[1.1]">
            Let's Build Your <br className="hidden sm:block" />Global Future.
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Reach out to us for a quick chat, profile evaluation, or detailed academic guidance. We're here to help.
          </p>
        </div>

        <div className="bg-white rounded-4xl sm:rounded-[3rem] p-2 sm:p-3 shadow-[0_8px_40px_rgb(0,0,0,0.04)] border border-neutral-100 flex flex-col lg:flex-row max-w-6xl mx-auto">
          
          {/* Left Column: Contact Details */}
          <div className="bg-[#050B1D] text-white p-10 md:p-14 lg:p-16 rounded-[1.8rem] sm:rounded-[2.5rem] lg:w-5/12 flex flex-col relative overflow-hidden shrink-0">
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-60" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold tracking-tight mb-3">Contact Info</h3>
              <p className="text-white/60 mb-12 font-light leading-relaxed">
                Connect with our academic mentors to discuss your aspirations and find the right pathway.
              </p>
              
              <div className="space-y-10 flex-1">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-white transition-colors">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Email Us</p>
                    <a href="mailto:info@liftmygrade.com" className="text-lg font-medium text-white/90 hover:text-white transition-colors">info@liftmygrade.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-white transition-colors">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">WhatsApp / Phone</p>
                    <a href="https://wa.me/919051384241" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-white/90 hover:text-white transition-colors">+91 90513 84241</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500 transition-colors duration-300">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80 group-hover:text-white transition-colors">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">HQ Address</p>
                    <p className="text-base font-light text-white/80 leading-relaxed">
                      LiftmyGrade HQ<br />
                      Salt Lake Sector 5<br />
                      Kolkata, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Multi-Step Form */}
          <div className="p-10 md:p-14 lg:p-16 lg:w-7/12 flex flex-col justify-center min-h-[600px]">
            {isSubmitted && submitData ? (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center text-center h-full justify-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-[#171717] tracking-tight mb-4">
                  Thank you, {submitData.fullName.split(" ")[0]}!
                </h3>
                <p className="text-neutral-500 max-w-md mx-auto mb-10 leading-relaxed">
                  Your consultation request is in. Our specialists will review it and reach out shortly to plan your project — at no cost.
                </p>
                <button
                  onClick={handleRestart}
                  className="bg-white border-2 border-neutral-200 text-[#171717] font-semibold py-3 px-8 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#171717] tracking-tight mb-2">Book Free Consultation</h3>
                    <p className="text-neutral-500 text-sm">Step {currentStep} of {TOTAL_STEPS}</p>
                  </div>
                  {/* Progress Bar */}
                  <div className="flex gap-1.5">
                    {[...Array(TOTAL_STEPS)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i + 1 <= currentStep ? "w-6 bg-blue-600" : "w-3 bg-neutral-200"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-1 flex flex-col" noValidate>
                  
                  <div className="flex-1">
                    {/* STEP 1: Your Details */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="group">
                          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Full Name *</label>
                          <input 
                            {...register("fullName")}
                            type="text" 
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all placeholder:text-neutral-300 placeholder:font-normal"
                            placeholder="John Doe"
                          />
                          {errors.fullName && <p className="text-red-500 text-xs mt-2 font-medium">{errors.fullName.message}</p>}
                        </div>
                        
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
                    )}

                    {/* STEP 2: About You */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="group">
                          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">You are a... *</label>
                          <select 
                            {...register("status")}
                            defaultValue=""
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select</option>
                            <option value="Student / Recent graduate">Student / Recent graduate</option>
                            <option value="Working professional">Working professional</option>
                            <option value="Founder / Business owner">Founder / Business owner</option>
                            <option value="Freelancer / Consultant">Freelancer / Consultant</option>
                            <option value="Nonprofit / Organisation">Nonprofit / Organisation</option>
                            <option value="Academic / Researcher">Academic / Researcher</option>
                            <option value="Other">Other</option>
                          </select>
                          {errors.status && <p className="text-red-500 text-xs mt-2 font-medium">{errors.status.message}</p>}
                        </div>

                        <div className="group">
                          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Industry / Field (Optional)</label>
                          <select 
                            {...register("industry")}
                            defaultValue=""
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select (optional)</option>
                            <option value="Technology / IT">Technology / IT</option>
                            <option value="Finance & Banking">Finance & Banking</option>
                            <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                            <option value="Engineering & Manufacturing">Engineering & Manufacturing</option>
                            <option value="Education & Academia">Education & Academia</option>
                            <option value="Marketing & Media">Marketing & Media</option>
                            <option value="Consulting">Consulting</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Services */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">What Do You Need? *</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                          {[
                            { id: "Résumé & CV", desc: "Build from scratch or edit." },
                            { id: "LinkedIn Profile", desc: "Full build-out and keywords." },
                            { id: "Company SOP", desc: "Corporate statement of purpose." },
                            { id: "Grant Writing", desc: "Persuasive proposals for funding." },
                            { id: "PR Writing", desc: "Press releases, white papers." }
                          ].map(svc => (
                            <div 
                              key={svc.id}
                              onClick={() => toggleService(svc.id)}
                              className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${watchServices.includes(svc.id) ? 'border-blue-600 bg-blue-50/50' : 'border-neutral-100 hover:border-blue-200'}`}
                            >
                              <p className="font-semibold text-sm text-[#171717]">{svc.id}</p>
                              <p className="text-xs text-neutral-500 mt-1 leading-relaxed">{svc.desc}</p>
                            </div>
                          ))}
                        </div>
                        {errors.services && <p className="text-red-500 text-xs mt-2 font-medium">{errors.services.message}</p>}

                        {/* Conditionals */}
                        <AnimatePresence>
                          {watchServices.includes("Résumé & CV") && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mb-4"
                            >
                              <div className="p-5 bg-neutral-50 rounded-2xl space-y-4">
                                <p className="text-xs font-bold uppercase text-neutral-500">Résumé Details</p>
                                <select {...register("resumeType")} defaultValue="" className="w-full bg-transparent border-b-2 border-neutral-200 py-2 text-sm focus:border-blue-600 outline-none">
                                  <option value="" disabled>Do you have an existing résumé?</option>
                                  <option value="Build a new one from scratch">Build a new one from scratch</option>
                                  <option value="Edit & optimise my existing one">Edit & optimise my existing one</option>
                                </select>
                                <input {...register("resumeTarget")} type="text" placeholder="Target role / industry" className="w-full bg-transparent border-b-2 border-neutral-200 py-2 text-sm focus:border-blue-600 outline-none placeholder:text-neutral-400" />
                              </div>
                            </motion.div>
                          )}

                          {watchServices.includes("LinkedIn Profile") && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mb-4"
                            >
                              <div className="p-5 bg-neutral-50 rounded-2xl space-y-4">
                                <p className="text-xs font-bold uppercase text-neutral-500">LinkedIn Details</p>
                                <input {...register("liUrl")} type="text" placeholder="Current LinkedIn URL (optional)" className="w-full bg-transparent border-b-2 border-neutral-200 py-2 text-sm focus:border-blue-600 outline-none placeholder:text-neutral-400" />
                                <select {...register("liGoal")} defaultValue="" className="w-full bg-transparent border-b-2 border-neutral-200 py-2 text-sm focus:border-blue-600 outline-none">
                                  <option value="" disabled>Primary objective</option>
                                  <option value="Job search / recruiter visibility">Job search / recruiter visibility</option>
                                  <option value="Personal branding">Personal branding</option>
                                  <option value="Networking & outreach">Networking & outreach</option>
                                </select>
                              </div>
                            </motion.div>
                          )}

                          {watchServices.includes("PR Writing") && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="p-5 bg-neutral-50 rounded-2xl space-y-4">
                                <p className="text-xs font-bold uppercase text-neutral-500 mb-2">PR Deliverables</p>
                                <div className="flex flex-wrap gap-2">
                                  {["Press release", "Media advisory", "Fact sheet", "White paper", "Case study", "Social media posts"].map(pr => (
                                    <span 
                                      key={pr}
                                      onClick={() => togglePrDeliverable(pr)}
                                      className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-colors border ${watchPrDeliverables.includes(pr) ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-neutral-200 text-neutral-600 hover:border-blue-300'}`}
                                    >
                                      {pr}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}

                    {/* STEP 4: Goal & Timeline */}
                    {currentStep === 4 && (
                      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="group">
                          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">What are you aiming to achieve? *</label>
                          <textarea 
                            {...register("brief")}
                            rows={3}
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all resize-none placeholder:text-neutral-300 placeholder:font-normal"
                            placeholder="A few lines about your goal, context, and anything we should know."
                          ></textarea>
                          {errors.brief && <p className="text-red-500 text-xs mt-2 font-medium">{errors.brief.message}</p>}
                        </div>

                        <div className="group">
                          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2 group-focus-within:text-blue-600 transition-colors">Timeline (Optional)</label>
                          <select 
                            {...register("timeline")}
                            defaultValue=""
                            className="w-full bg-transparent border-b-2 border-neutral-200 py-3 text-[#171717] font-medium focus:outline-none focus:border-blue-600 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" disabled>Select</option>
                            <option value="As soon as possible">As soon as possible</option>
                            <option value="Within 2 weeks">Within 2 weeks</option>
                            <option value="Within a month">Within a month</option>
                            <option value="Flexible / just exploring">Flexible / just exploring</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Navigation Buttons */}
                  <div className="pt-8 flex items-center justify-between mt-auto">
                    {currentStep > 1 ? (
                      <button 
                        type="button" 
                        onClick={handlePrev}
                        className="text-neutral-500 font-semibold py-3 px-6 rounded-full hover:bg-neutral-100 transition-colors flex items-center gap-2"
                      >
                        <ChevronLeft className="w-4 h-4" /> Back
                      </button>
                    ) : <div></div>}

                    {currentStep < TOTAL_STEPS ? (
                      <button 
                        type="button" 
                        onClick={handleNext}
                        className="bg-[#171717] text-white font-semibold py-3 px-8 rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg hover:shadow-neutral-900/10 flex items-center gap-2 group"
                      >
                        Next Step <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20 flex items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Submitting..." : "Book Consultation"}
                        {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
