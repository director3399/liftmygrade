import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight, Check } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";
import Highlighter from "@/components/Highlighter";

export const metadata = {
  title: "Academic Mentorship & Admissions Services | LiftmyGrade",
  description:
    "Explore our complete academic mentorship solutions: thesis and dissertation support, journal publication guidance, and study abroad admissions (SOP, LOR, CV).",
  alternates: {
    canonical: "https://www.liftmygrade.com/services",
  },
  openGraph: {
    title: "Academic Mentorship & Admissions Services | LiftmyGrade",
    description:
      "Explore our complete academic mentorship solutions: thesis and dissertation support, journal publication guidance, and study abroad admissions (SOP, LOR, CV).",
    url: "https://www.liftmygrade.com/services",
  },
};

/* ────────────────────────────────────────────────────────────
   Helper — build a WhatsApp URL with a prefilled message
   ──────────────────────────────────────────────────────────── */
const waLink = (message: string) =>
  `https://wa.me/919147720702?text=${encodeURIComponent(message)}`;

/* ────────────────────────────────────────────────────────────
   ServiceSection — reusable section for each category
   ──────────────────────────────────────────────────────────── */
const ServiceSection = ({
  id,
  label,
  title,
  subtitle,
  items,
  theme = "default",
}: any) => {
  return (
    <section id={id} className="py-16 md:py-24 px-6 md:px-12 w-full border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 max-w-3xl">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-[#171717] mt-4 mb-4 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-neutral-600 leading-relaxed">{subtitle}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item: any, i: number) => (
            <div
              key={i}
              className="group bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all flex flex-col"
            >
              {item.image && (
                <div className="w-full h-48 relative bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}

              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#171717] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6 pb-6 border-b border-neutral-50">
                    {item.tags.map((tag: string, t: number) => (
                      <span
                        key={t}
                        className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Get Now — WhatsApp redirect */}
                <a
                  href={waLink(`Hi LiftmyGrade, I'd like to get ${item.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 mt-auto pt-2 transition-colors group/cta"
                >
                  GET NOW
                  <svg
                    className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  const gettingStarted = [
    { title: "Readiness Form", desc: "An honest assessment of where you stand, generated from your profile.", image: "/service/getting-started-1.webp" },
    { title: "Journal Fit Report", desc: "A live journal-fit and indexing report for any manuscript you're about to submit — with a database-level breakdown and risky-journal screening. Available at a small, fixed fee of ₹199.", image: "/banner/banner1.webp" },
    { title: "Personalised Roadmap Plan", desc: "A ready-to-follow roadmap with timelines, tests, intake windows, and a document checklist for your target country. Available at a small, fixed fee of ₹199.", image: "/banner/banner2.webp" },
    { title: "2 Consultation Calls", desc: "Two one-to-one sessions to understand your goals and direction.", image: "/service/getting-started-2.webp" },
    { title: "Country Shortlisting", desc: "We narrow your best-fit top 1–3 destinations together.", image: "/service/getting-started-3.webp" },
    { title: "Document Analysis", desc: "A complimentary review of any résumé, SOP, or document you already have.", image: "/service/getting-started-4.webp" }
  ];

  const admissions = [
    { title: "SOP, LOR & CV Help", desc: "Admissions documents structured and edited around your story — country- and university-specific." },
    { title: "Statement of Purpose (SOP)", desc: "A compelling, tailored SOP drafted around your story and each target program." },
    { title: "Letters of Recommendation", desc: "Well-structured LORs that highlight the right strengths for your application." },
    { title: "Academic CV / Résumé", desc: "An admissions-ready CV that presents your profile clearly and credibly." }
  ];

  const phd = [
    { title: "Dissertation Support", desc: "Chapter-wise guidance calibrated to your supervisor's expectations — proposal, methodology, findings, defense." },
    { title: "Literature Review & Methodology Support", desc: "Standalone and systematic (PRISMA-aligned) reviews, and methodology chapter structuring and review." },
    { title: "Research Proposal", desc: "A focused, fundable research proposal — the centrepiece of your PhD application." },
    { title: "Academic CV & SOR", desc: "Research-focused academic CV and Statement of Research Interest." },
    { title: "Research-Focused LORs", desc: "Recommendation letters positioned for research potential and fit." },
    { title: "Supervisor & Program Mapping", desc: "Identify aligned supervisors and programs; build a ranked target list." },
    { title: "Professor Outreach Strategy", desc: "Personalised first-contact emails referencing each supervisor's work." },
    { title: "Communication Strategy", desc: "Managing supervisor dialogue, follow-ups, and interview correspondence." },
    { title: "Funding & Interview Support", desc: "Assistantship, fellowship and scholarship applications, plus interview prep." }
  ];

  const publication = [
    { title: "Thesis Help", desc: "Structural review, academic editing, university-specific citation checks and a verified report — from your draft to a submission-ready thesis.", tags: ["Thesis", "Editing", "Submission"] },
    { title: "Publication Help", desc: "Manuscript editing, a journal shortlist verified against official indexing, predatory screening and reviewer-response support.", tags: ["Scopus", "Google Scholar", "UGC-listed"] },
    { title: "Book Help", desc: "Developmental review, line editing and publisher submission formatting for academic books, edited volumes and chapters.", tags: ["Books", "Chapters", "Editing"] },
    { title: "Journal Publication Assistance", desc: "Support getting your work published in peer-reviewed journals — including Scopus-indexed, Google Scholar, and UGC-listed outlets.", tags: ["Scopus", "Google Scholar", "UGC-listed", "Peer-reviewed"] },
    { title: "Manuscript Editing & Positioning", desc: "Editorial support to refine and position your manuscript for submission — an additional edge for humanities, postgraduate, and research applicants." },
    { title: "Book & Book Chapter Editing", desc: "Comprehensive structural and line editing for academic books, edited volumes, and contributed book chapters." },
    { title: "Journal Fit Report", desc: "A live journal-fit and indexing report for any manuscript you're about to submit — with a database-level breakdown and risky-journal screening.", tags: ["Scopus", "UGC-CARE", "Predatory screening"] }
  ];

  const career = [
    { title: "Career & Professional Branding", desc: "Résumé, LinkedIn, company SOP, grant writing and PR writing — project-based support." },
    { title: "Résumé & CV", desc: "Built from scratch or a full edit and optimisation of your existing résumé." },
    { title: "LinkedIn Profile", desc: "Complete build-out — headline, About, experience, and keyword positioning." },
    { title: "Company SOP", desc: "Corporate statement of purpose and operating documentation." },
    { title: "Grant Writing", desc: "Structured, persuasive proposals tailored to funding bodies and programs." },
    { title: "PR Writing", desc: "Professional communications written for the right audience and channel.", tags: ["Press releases", "Media advisories", "Fact sheets", "White papers", "Case studies", "Social media"] },
    { title: "Book Editing", desc: "Comprehensive editorial support to refine and polish your manuscript." }
  ];

  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar theme="light" hideLinks />

      {/* Hero Section */}
      <section className="pt-[160px] pb-16 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#171717] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Our Academic &amp; Research <br className="hidden md:block" />Support Services.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed mb-12">
            As your <Highlighter>Academic, Research, Career & Strategic Communication Ecosystem</Highlighter>, we cover everything from a <Link href="/readiness-assessment" className="text-blue-600 hover:underline">readiness assessment</Link> to fully drafted applications, research support, publication assistance, and <Link href="/career-services" className="text-blue-600 hover:underline">career branding</Link> — here's the complete range of what we do, organised so you can find exactly what you need.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#getting-started" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">Getting Started</a>
            <a href="#admissions" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">Bachelor's & Master's</a>
            <a href="#phd" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">PhD & Research</a>
            <a href="#publication" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">Publication Support</a>
            <a href="#career" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">Career & Professional</a>
          </div>
        </div>
      </section>

      <ServiceSection
        id="getting-started"
        label="Getting Started"
        title="Getting Started"
        subtitle="Where every journey begins — from a quick assessment to a structured roadmap."
        items={gettingStarted}
      />

      <ServiceSection
        id="admissions"
        label="Study Abroad"
        title="Bachelor's & Master's Admissions"
        subtitle="Undergraduate & postgraduate application support."
        items={admissions}
      />

      <ServiceSection
        id="phd"
        label="Study Abroad"
        title="PhD & Research Support"
        subtitle="For doctoral and research-track applicants."
        items={phd}
      />

      <ServiceSection
        id="publication"
        label="Research Edge"
        title="Publication Support"
        subtitle="Strengthen your profile with peer-reviewed research output."
        items={publication}
      />

      <ServiceSection
        id="career"
        label="Career & Professional"
        title="Career & Professional Support"
        subtitle="Project-based document and communications services."
        items={career}
      />

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 w-full bg-blue-600">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Not sure where to start?</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-12 max-w-2xl">
            Begin with a readiness assessment or consultation — we'll point you to exactly the right service for your goal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/readiness-assessment" className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-neutral-50 transition-colors">
              Study Abroad Assessment
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/readiness-assessment" className="inline-flex items-center justify-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 border border-blue-500 transition-colors">
              Career Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}