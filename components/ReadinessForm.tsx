"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const handleRestart = () => {
    reset();
    setIsSubmitted(false);
    setSubmitData(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSubmitted && submitData) {
    return (
      <div className="w-full max-w-2xl py-12">
        <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mb-4 tracking-tight">
          Thank you, {submitData.fullName.split(" ")[0]}!
        </h2>
        <p className="text-neutral-600 mb-10 text-lg leading-relaxed">
          Your readiness profile has been recorded. Our admissions mentors will review it and reach out within 48 hours with your personalised pathway.
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-3 bg-white border border-neutral-200 text-[#171717] px-8 py-4 rounded-full text-sm font-semibold hover:border-neutral-300 transition-colors shadow-sm"
        >
          Submit another assessment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl flex flex-col gap-12 pb-24"
      noValidate
    >
      {/* 1. Your Details */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-600 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h2 className="text-2xl font-bold text-[#171717] tracking-tight">Your Details</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pl-0 md:pl-12">
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-[#171717] mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("fullName")}
              type="text"
              placeholder="e.g. Ananya Sharma"
              className={`w-full px-5 py-4 rounded-2xl border ${
                errors.fullName ? "border-red-300 bg-red-50" : "border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              } focus:outline-none transition-all text-[#171717]`}
            />
            {errors.fullName && <p className="mt-2 text-sm text-red-500 font-medium">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#171717] mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className={`w-full px-5 py-4 rounded-2xl border ${
                errors.email ? "border-red-300 bg-red-50" : "border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              } focus:outline-none transition-all text-[#171717]`}
            />
            {errors.email && <p className="mt-2 text-sm text-red-500 font-medium">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#171717] mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select
                {...register("dialCode")}
                className="w-32 px-4 py-4 rounded-2xl border border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-[#171717]"
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
                placeholder="98XXXXXXXX"
                className={`flex-1 px-5 py-4 rounded-2xl border ${
                  errors.phone ? "border-red-300 bg-red-50" : "border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                } focus:outline-none transition-all text-[#171717]`}
              />
            </div>
            {errors.phone && <p className="mt-2 text-sm text-red-500 font-medium">{errors.phone.message}</p>}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-100" />

      {/* 2. Study Plan */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-600 flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h2 className="text-2xl font-bold text-[#171717] tracking-tight">Study Plan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pl-0 md:pl-12">
          <div>
            <label className="block text-sm font-semibold text-[#171717] mb-2">
              Study Level <span className="text-red-500">*</span>
            </label>
            <select
              {...register("studyLevel")}
              defaultValue=""
              className={`w-full px-5 py-4 rounded-2xl border ${
                errors.studyLevel ? "border-red-300 bg-red-50" : "border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              } focus:outline-none transition-all appearance-none text-[#171717]`}
            >
              <option value="" disabled>Select level</option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
              <option value="PhD">PhD</option>
            </select>
            {errors.studyLevel && <p className="mt-2 text-sm text-red-500 font-medium">{errors.studyLevel.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#171717] mb-2">
              Preferred Country <span className="text-red-500">*</span>
            </label>
            <select
              {...register("country")}
              className="w-full px-5 py-4 rounded-2xl border border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-[#171717]"
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
            <p className="mt-2 text-sm text-neutral-500 font-medium">Not sure yet? Keep "Open to recommendations".</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#171717] mb-2">
              Preferred Subject / Field <span className="text-red-500">*</span>
            </label>
            <select
              {...register("subject")}
              defaultValue=""
              className={`w-full px-5 py-4 rounded-2xl border ${
                errors.subject ? "border-red-300 bg-red-50" : "border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              } focus:outline-none transition-all appearance-none text-[#171717]`}
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
            {errors.subject && <p className="mt-2 text-sm text-red-500 font-medium">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#171717] mb-2">
              Primary Goal <span className="text-red-500">*</span>
            </label>
            <select
              {...register("goal")}
              defaultValue=""
              className={`w-full px-5 py-4 rounded-2xl border ${
                errors.goal ? "border-red-300 bg-red-50" : "border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              } focus:outline-none transition-all appearance-none text-[#171717]`}
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
            {errors.goal && <p className="mt-2 text-sm text-red-500 font-medium">{errors.goal.message}</p>}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-100" />

      {/* 3. Background & Budget */}
      <div className="flex flex-col">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-600 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <h2 className="text-2xl font-bold text-[#171717] tracking-tight">Background & Budget</h2>
        </div>

        <div className="pl-0 md:pl-12">
          {/* Conditional Fields based on Study Level */}
          <div className="mb-10">
            {!watchStudyLevel && (
              <p className="text-base text-neutral-500 italic">
                Select a study level above to show relevant academic questions.
              </p>
            )}

            {watchStudyLevel === "Bachelor's" && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="mb-6 p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex gap-3 text-sm text-blue-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <p>For a Bachelor's pathway, your Class 11 stream helps us shortlist eligible programs.</p>
                </div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  Class 11 / 12 Stream
                </label>
                <select
                  {...register("stream")}
                  defaultValue=""
                  className="w-full md:w-1/2 px-5 py-4 rounded-2xl border border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-[#171717]"
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
            )}

            {watchStudyLevel === "Master's" && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="mb-6 p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex gap-3 text-sm text-blue-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <p>For a Master's pathway, your Bachelor's score helps assess admission and scholarship eligibility.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#171717] mb-2">
                      Score Type
                    </label>
                    <select
                      {...register("scoreType")}
                      defaultValue=""
                      className="w-full px-5 py-4 rounded-2xl border border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-[#171717]"
                    >
                      <option value="" disabled>Select</option>
                      <option value="CGPA (out of 10)">CGPA (out of 10)</option>
                      <option value="CGPA (out of 4)">CGPA (out of 4)</option>
                      <option value="Percentage (%)">Percentage (%)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#171717] mb-2">
                      Bachelor's Degree Score
                    </label>
                    <input
                      {...register("scoreValue")}
                      type="text"
                      placeholder="e.g. 8.2 or 78%"
                      className="w-full px-5 py-4 rounded-2xl border border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all text-[#171717]"
                    />
                  </div>
                </div>
              </div>
            )}

            {watchStudyLevel === "PhD" && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                <div className="mb-6 p-5 bg-blue-50/50 border border-blue-100 rounded-2xl flex gap-3 text-sm text-blue-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <p>For a PhD pathway, your research publication status shapes how we position your profile to supervisors.</p>
                </div>
                <label className="block text-sm font-semibold text-[#171717] mb-2">
                  Research Publications
                </label>
                <select
                  {...register("publications")}
                  defaultValue=""
                  className="w-full md:w-1/2 px-5 py-4 rounded-2xl border border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-[#171717]"
                >
                  <option value="" disabled>Select your publication status</option>
                  <option value="Yes — published in a peer-reviewed journal">Yes — published in a peer-reviewed journal</option>
                  <option value="Yes — conference paper(s) only">Yes — conference paper(s) only</option>
                  <option value="In progress / under review">In progress / under review</option>
                  <option value="No publications yet">No publications yet</option>
                </select>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#171717] mb-2">
              Annual Budget Preference
            </label>
            <select
              {...register("budget")}
              className="w-full md:w-1/2 px-5 py-4 rounded-2xl border border-neutral-200 bg-[#F9F9F9] hover:bg-white focus:bg-white focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-[#171717]"
            >
              <option value="Not sure — need guidance">Not sure — need guidance</option>
              <option value="Under ₹10 lakh / year">Under ₹10 lakh / year</option>
              <option value="₹10 – 20 lakh / year">₹10 – 20 lakh / year</option>
              <option value="₹20 – 35 lakh / year">₹20 – 35 lakh / year</option>
              <option value="₹35 – 50 lakh / year">₹35 – 50 lakh / year</option>
              <option value="Above ₹50 lakh / year">Above ₹50 lakh / year</option>
              <option value="Seeking full funding / scholarship only">Seeking full funding / scholarship only</option>
            </select>
            <p className="mt-2 text-sm text-neutral-500 font-medium">
              Approximate total annual budget (tuition + living). This stays confidential.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-100 mt-4" />

      {/* Footer / Submit */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pl-0 md:pl-12">
        <p className="text-sm text-neutral-500 max-w-sm">
          By submitting, you agree to be contacted by LiftmyGrade. Your information is kept highly confidential.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-base font-semibold transition-all shadow-lg shadow-blue-600/20 disabled:opacity-70 disabled:cursor-not-allowed justify-center"
        >
          {isSubmitting ? "Submitting..." : "Get My Readiness Report"}
          {!isSubmitting && <ArrowRight className="w-5 h-5" />}
        </button>
      </div>
    </form>
  );
}
