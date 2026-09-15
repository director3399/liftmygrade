"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What does LiftMyGrade actually help with?",
    answer:
      "We support thesis and dissertation development, publication help for peer-reviewed journals, book and chapter editing, and literature review and methodology support — all led by subject-matched PhD-level experts. We also help Bachelor’s, Master’s, and PhD applicants with SOPs, LORs, and CVs, and offer career and professional branding support.",
  },
  {
    id: "faq-2",
    question: "What stage do I need to be at to start?",
    answer:
      "Any stage. Some scholars come to us with an early proposal, others with a full draft that keeps coming back for revision. Your consultation call is where we scope what stage you’re at and what the work actually needs.",
  },
  {
    id: "faq-3",
    question: "What subjects and disciplines do you cover?",
    answer:
      "We match every project to a specialist whose own doctoral field is the same as yours, not a general editing pool. Tell us your subject on the consultation call and we’ll confirm whether we have the right expert available.",
  },
  {
    id: "faq-4",
    question: "What is the \"proof packet\" you deliver with every project?",
    answer:
      "An AI-content report, a plagiarism report, and a reference/DOI verification report — checked against Crossref and publisher records, not just an aggregator listing. It’s delivered with every project, not as an add-on.",
  },
  {
    id: "faq-5",
    question: "How do you verify references?",
    answer:
      "Every citation is checked against the actual publisher or Crossref record — author, title, journal, year, and DOI, where one exists. We also check retraction status, since a retracted paper can still show up in a reference manager years after it’s withdrawn.",
  },
  {
    id: "faq-6",
    question: "How much does this cost?",
    answer:
      "We don’t run a fixed price list, because two projects in the same discipline can take very different amounts of work. Every engagement starts with a free consultation where we scope your stage, subject, and deadline, and confirm a fee in writing before anything begins. A few lightweight services — like the Readiness Form, AI-content report, plagiarism report, and roadmap plan — are available instantly at a small, fixed fee of ₹99.",
  },
  {
    id: "faq-7",
    question: "Is the Readiness Form free?",
    answer:
      "It carries a small, confirmed fee of ₹99 — it isn’t free, and we’d rather say that plainly than surprise you at payment. The initial consultation call itself is free.",
  },
  {
    id: "faq-8",
    question: "How does payment work?",
    answer:
      "Work is billed against agreed milestones once scope is confirmed in writing — not as a single upfront payment.",
  },
  {
    id: "faq-9",
    question: "What’s your refund policy?",
    answer:
      "We offer a 7-day refund window from the point of payment, provided substantive work hasn’t started. Full terms are in our Refund & Cancellation Policy.",
  },
  {
    id: "faq-10",
    question: "What does the review process look like?",
    answer:
      "Chapter-wise or section-wise tracked-changes review, structured around your supervisor’s or the target journal’s expectations, followed by our three-layer quality check — subject review, language pass, final QA — before delivery.",
  },
  {
    id: "faq-11",
    question: "How many revisions do I get?",
    answer:
      "As many as it takes until you’re confident to submit and defend. Revisions are included, not billed separately.",
  },
  {
    id: "faq-12",
    question: "How long does a project take?",
    answer:
      "It depends on scope, subject, and current stage — which is exactly what your consultation call establishes. We’ll give you a realistic timeline once we’ve scoped the work, not before.",
  },
  {
    id: "faq-13",
    question: "Do you screen against UGC-CARE?",
    answer:
      "The UGC discontinued the CARE list in 2025. We screen against current, live indexing records — Scopus, Web of Science, ABDC, CNKI, MyCite, and other recognised databases — rather than a list that’s no longer maintained.",
  },
  {
    id: "faq-14",
    question: "Do you also help with university applications?",
    answer:
      "Yes — SOPs, LORs, academic CVs, country shortlisting, and a detailed roadmap for Bachelor’s and Master’s applicants, alongside our core thesis and publication work.",
  },
  {
    id: "faq-15",
    question: "Can you guarantee admission or a scholarship?",
    answer:
      "No. Admission, visa, and funding decisions rest entirely with the relevant universities, embassies, and funding bodies. We help you put forward the strongest possible application — the decision isn’t ours to make or promise.",
  },
  {
    id: "faq-16",
    question: "What happens on the Free consultation call?",
    answer:
      "We talk through your stage, subject, and deadline, and give you an honest read on what the work needs — including whether we’re the right fit. There’s no obligation to proceed afterward.",
  },
  {
    id: "faq-17",
    question: "I’m not sure which service I need. What should I do?",
    answer:
      "Start with a free consultation and we’ll point you to the right one, or begin with the Readiness Form if you’d rather start with a structured self-assessment first.",
  },
];

const PAGE_SIZE = 6;

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, faqData.length));
  };

  const visibleFaqs = faqData.slice(0, visibleCount);
  const hasMore = visibleCount < faqData.length;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#171717] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Minimal Accordion List (Line Separators) */}
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
                          height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
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

        {/* Small 'More' Button */}
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
    </section>
  );
}