"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   TESTIMONIAL DATA
   ──────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote:
      "I was struggling with my Statement of Purpose, but the structured feedback from LiftmyGrade mentors helped me articulate my research interests with precision. The admission felt like a natural outcome.",
    name: "Sanya Malhotra",
    role: "MS, Stanford University",
    image: "/testmonial/sanya-malhotra.webp",
  },
  {
    quote:
      "The research mentorship completely changed my approach to profile positioning. I secured a PhD position because we focused on long-term academic growth rather than just applications.",
    name: "Arpit Verma",
    role: "PhD Candidate, TU Delft",
    image: "/testmonial/arpit-verma.webp",
  },
  {
    quote:
      "From shortlisting universities to nailing my interviews, LiftmyGrade gave me a clear roadmap at every step. I went in confident and came out with three offers.",
    name: "Aditya Rao",
    role: "MS, Carnegie Mellon University",
    image: "/testmonial/aditya-rao.webp",
  },
];

/* ────────────────────────────────────────────────────────────
   FAQ DATA
   ──────────────────────────────────────────────────────────── */
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What does LiftMyGrade actually help with?",
    answer:
      "We support thesis and dissertation development, publication help for peer-reviewed journals, book and chapter editing, and literature review and methodology support — all led by subject-matched PhD-level experts. We also help Bachelor's, Master's, and PhD applicants with SOPs, LORs, and CVs, and offer career and professional branding support.",
  },
  {
    id: "faq-2",
    question: "What stage do I need to be at to start?",
    answer:
      "Any stage. Some scholars come to us with an early proposal, others with a full draft that keeps coming back for revision. Your consultation call is where we scope what stage you're at and what the work actually needs.",
  },
  {
    id: "faq-3",
    question: "What subjects and disciplines do you cover?",
    answer:
      "We match every project to a specialist whose own doctoral field is the same as yours, not a general editing pool. Tell us your subject on the consultation call and we'll confirm whether we have the right expert available.",
  },
  {
    id: "faq-4",
    question: "What is the \"proof packet\" you deliver with every project?",
    answer:
      "A reference/DOI verification report — checked against Crossref and publisher records, not just an aggregator listing. It's delivered with every project, not as an add-on.",
  },
  {
    id: "faq-5",
    question: "How do you verify references?",
    answer:
      "Every citation is checked against the actual publisher or Crossref record — author, title, journal, year, and DOI, where one exists. We also check retraction status, since a retracted paper can still show up in a reference manager years after it's been withdrawn.",
  },
  {
    id: "faq-6",
    question: "How much does this cost?",
    answer:
      "We don't run a fixed price list, because two projects in the same discipline can take very different amounts of work. Every engagement starts with a free consultation where we scope your stage, subject, and deadline, and confirm a fee in writing before anything begins. A few services — like the Readiness Form, journal fit report — are available instantly at a small, fixed fee.",
  },
  {
    id: "faq-7",
    question: "Is the Readiness Form free?",
    answer:
      "It carries a small, confirmed fee of ₹99 — it isn't free, and we'd rather say that plainly than surprise you at payment. The initial consultation call itself is free.",
  },
  {
    id: "faq-8",
    question: "How does payment work?",
    answer:
      "Work is billed against agreed milestones once scope is confirmed in writing — not as a single upfront payment.",
  },
  {
    id: "faq-9",
    question: "What's your refund policy?",
    answer:
      "We offer a 7-day refund window from the point of payment, provided substantive work hasn't started. Full terms are in our Refund & Cancellation Policy.",
  },
  {
    id: "faq-10",
    question: "What does the review process look like?",
    answer:
      "Chapter-wise or section-wise tracked-changes review, structured around your supervisor's or the target journal's expectations, followed by our three-layer quality check — subject review, language pass, final QA — before delivery.",
  },
  {
    id: "faq-11",
    question: "How many revisions do I get?",
    answer:
      "As many as it takes until you're confident to submit and defend. Revisions are included, not billed separately.",
  },
  {
    id: "faq-12",
    question: "How long does a project take?",
    answer:
      "It depends on scope, subject, and current stage — which is exactly what your consultation call establishes. We'll give you a realistic timeline once we've scoped the work, not before.",
  },
  {
    id: "faq-13",
    question: "Do you screen against UGC-CARE?",
    answer:
      "The UGC discontinued the CARE list in 2025. We screen against current, live indexing records — Scopus, Web of Science, ABDC, CNKI, MyCite, and other recognised databases — rather than a list that's no longer maintained.",
  },
  {
    id: "faq-14",
    question: "Do you also help with university applications?",
    answer:
      "Yes — SOPs, LORs, academic CVs, country shortlisting, and a detailed roadmap for Bachelor's and Master's applicants, alongside our core thesis and publication work.",
  },
  {
    id: "faq-15",
    question: "Can you guarantee admission or a scholarship?",
    answer:
      "No. Admission, visa, and funding decisions rest entirely with the relevant universities, embassies, and funding bodies. We help you put forward the strongest possible application — the decision isn't ours to make or promise.",
  },
  {
    id: "faq-16",
    question: "What happens on the Free consultation call?",
    answer:
      "We talk through your stage, subject, and deadline, and give you an honest read on what the work needs — including whether we're the right fit. There's no obligation to proceed afterward.",
  },
  {
    id: "faq-17",
    question: "I'm not sure which service I need. What should I do?",
    answer:
      "Start with a free consultation and we'll point you to the right one, or begin with the Readiness Form if you'd rather start with a structured self-assessment first.",
  },
];

const FAQ_PAGE_SIZE = 6;

export default function TestimonialsFAQ() {
  /* ── Testimonial carousel state ── */
  const [tIndex, setTIndex] = useState(0);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  /* ── FAQ state ── */
  const [openId, setOpenId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(FAQ_PAGE_SIZE);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + FAQ_PAGE_SIZE, faqData.length));
  };

  const visibleFaqs = faqData.slice(0, visibleCount);
  const hasMore = visibleCount < faqData.length;

  return (
    <section
      className="py-16 sm:py-24 px-6 md:px-12 lg:px-16 bg-white"
      id="testimonial"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Centered section header — matches Blog section style ── */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight leading-tight">
            What Scholars Ask Us
            <br className="hidden sm:block" />
            & What They Say
          </h2>
        </div>

        {/* ── Two-column layout: Testimonials (narrow) | FAQ (wide) ── */}
        <div className="grid lg:grid-cols-5 gap-10 sm:gap-12 lg:gap-14 items-start">
          {/* ════════════════════════════════════════════════════ */}
          {/* LEFT — TESTIMONIALS (2 of 5 cols on desktop)         */}
          {/* ════════════════════════════════════════════════════ */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 self-start">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={tIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="bg-[#F9F9F9] border border-neutral-100 rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col gap-5"
                  >
                    {/* Quote mark */}
                    <span
                      aria-hidden="true"
                      className="text-[56px] leading-none font-serif text-blue-500/25 select-none"
                    >
                      &ldquo;
                    </span>

                    {/* Quote text */}
                    <p className="text-[15px] sm:text-base lg:text-lg text-[#171717] leading-relaxed -mt-6">
                      {testimonials[tIndex].quote}
                    </p>

                    {/* Author */}
                    <div className="mt-auto pt-5 border-t border-neutral-200 flex items-center gap-3">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                        <Image
                          src={testimonials[tIndex].image}
                          alt={testimonials[tIndex].name}
                          fill
                          sizes="44px"
                          className="object-cover grayscale-[0.15]"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[15px] font-bold text-[#171717] leading-tight truncate">
                          {testimonials[tIndex].name}
                        </div>
                        <div className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-0.5 truncate">
                          {testimonials[tIndex].role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === tIndex ? "w-8 bg-[#171717]" : "w-2 bg-neutral-300"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════ */}
          {/* RIGHT — FAQ (3 of 5 cols on desktop)                */}
          {/* ════════════════════════════════════════════════════ */}
          <div className="lg:col-span-3">
            {/* Accordion */}
            <div className="divide-y divide-neutral-200 border-t border-b border-neutral-200">
              {visibleFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="py-5 sm:py-6">
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden group"
                    >
                      <span className="text-base sm:text-lg font-medium text-[#171717] group-hover:text-neutral-600 transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="shrink-0 text-neutral-500 group-hover:text-[#171717] transition-colors"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: {
                                duration: 0.25,
                                ease: [0.04, 0.62, 0.23, 0.98],
                              },
                              opacity: { duration: 0.2, delay: 0.05 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              height: { duration: 0.2, ease: "easeInOut" },
                              opacity: { duration: 0.15 },
                            },
                          }}
                        >
                          <div className="pt-3 pr-8 text-sm sm:text-base text-neutral-600 leading-relaxed font-light">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* More button */}
            {hasMore && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleShowMore}
                  className="text-xs font-medium text-neutral-500 hover:text-black hover:underline cursor-pointer transition-colors px-3 py-1.5"
                >
                  More +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}