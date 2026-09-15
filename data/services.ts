export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  category: string;
  link: string;
  isFree?: boolean;
  tags?: string[];
}

export const allServices: ServiceItem[] = [
  // Free Services
  {
    id: "free-1",
    title: "Readiness Form",
    desc: "An honest assessment of where you stand, generated from your profile.",
    category: "Free",
    link: "/readiness-assessment",
    isFree: true,
  },
  {
    id: "free-2",
    title: "2 Consultation Calls",
    desc: "Two one-to-one sessions to understand your goals and direction.",
    category: "Free",
    link: "/services#free",
    isFree: true,
  },
  {
    id: "free-3",
    title: "Country Shortlisting",
    desc: "We narrow your best-fit top 1–3 destinations together.",
    category: "Free",
    link: "/services#free",
    isFree: true,
  },
  {
    id: "free-4",
    title: "Detailed Roadmap",
    desc: "A country-specific plan — timelines, tests, intakes, funding, checklist.",
    category: "Free",
    link: "/services#free",
    isFree: true,
  },
  {
    id: "free-5",
    title: "Document Analysis",
    desc: "A complimentary review of any résumé, SOP, or document you already have.",
    category: "Free",
    link: "/services#free",
    isFree: true,
  },

  // Admissions Support
  {
    id: "adm-1",
    title: "International Admissions Support",
    desc: "Bachelor's and Master's applications — readiness assessment, country shortlisting, detailed roadmap, and submission.",
    category: "Study Abroad",
    link: "/services#admissions",
  },
  {
    id: "adm-2",
    title: "SOP, LOR & CV Help",
    desc: "Admissions documents structured and edited around your story — country- and university-specific.",
    category: "Study Abroad",
    link: "/services#admissions",
  },
  {
    id: "adm-3",
    title: "Statement of Purpose (SOP)",
    desc: "A compelling, tailored SOP drafted around your story and each target program.",
    category: "Study Abroad",
    link: "/services#admissions",
  },
  {
    id: "adm-4",
    title: "Letters of Recommendation",
    desc: "Well-structured LORs that highlight the right strengths for your application.",
    category: "Study Abroad",
    link: "/services#admissions",
  },
  {
    id: "adm-5",
    title: "Academic CV / Résumé",
    desc: "An admissions-ready CV that presents your profile clearly and credibly.",
    category: "Study Abroad",
    link: "/services#admissions",
  },
  {
    id: "adm-6",
    title: "Test & Exam Guidance",
    desc: "Direction for IELTS, TOEFL, PTE, Duolingo, and SAT / ACT / GRE / GMAT / LSAT as needed.",
    category: "Study Abroad",
    link: "/services#admissions",
  },
  {
    id: "adm-7",
    title: "Visa & Formalities Support",
    desc: "Financial documentation, visa statements, and interview preparation.",
    category: "Study Abroad",
    link: "/services#admissions",
  },
  {
    id: "adm-8",
    title: "Submission & Tracking",
    desc: "Application assembly, deadline tracking across intakes, and offer-stage guidance.",
    category: "Study Abroad",
    link: "/services#admissions",
  },

  // PhD & Research Support
  {
    id: "phd-1",
    title: "Dissertation Support",
    desc: "Chapter-wise guidance calibrated to your supervisor's expectations — proposal, methodology, findings, defense.",
    category: "PhD & Research",
    link: "/services#phd",
  },
  {
    id: "phd-2",
    title: "Literature Review & Methodology",
    desc: "Standalone and systematic (PRISMA-aligned) reviews, and methodology chapter structuring and review.",
    category: "PhD & Research",
    link: "/services#phd",
  },
  {
    id: "phd-3",
    title: "Research Proposal",
    desc: "A focused, fundable research proposal — the centrepiece of your PhD application.",
    category: "PhD & Research",
    link: "/services#phd",
  },
  {
    id: "phd-4",
    title: "Academic CV & SOR",
    desc: "Research-focused academic CV and Statement of Research Interest.",
    category: "PhD & Research",
    link: "/services#phd",
  },
  {
    id: "phd-5",
    title: "Research-Focused LORs",
    desc: "Recommendation letters positioned for research potential and fit.",
    category: "PhD & Research",
    link: "/services#phd",
  },
  {
    id: "phd-6",
    title: "Supervisor & Program Mapping",
    desc: "Identify aligned supervisors and programs; build a ranked target list.",
    category: "PhD & Research",
    link: "/services#phd",
  },
  {
    id: "phd-7",
    title: "Professor Outreach Strategy",
    desc: "Personalised first-contact emails referencing each supervisor's work.",
    category: "PhD & Research",
    link: "/services#phd",
  },
  {
    id: "phd-8",
    title: "Funding & Interview Support",
    desc: "Assistantship, fellowship and scholarship applications, plus interview prep.",
    category: "PhD & Research",
    link: "/services#phd",
  },

  // Publication Support
  {
    id: "pub-1",
    title: "Thesis Help",
    desc: "Structural review, academic editing, university-specific citation checks and a verified report.",
    category: "Publication Support",
    tags: ["Thesis", "Editing", "Submission"],
    link: "/services#publication",
  },
  {
    id: "pub-2",
    title: "Publication Help",
    desc: "Manuscript editing, a journal shortlist verified against official indexing, and reviewer-response support.",
    category: "Publication Support",
    tags: ["Scopus", "Google Scholar", "UGC-listed"],
    link: "/services#publication",
  },
  {
    id: "pub-3",
    title: "Book Help",
    desc: "Developmental review, line editing and publisher submission formatting for academic books.",
    category: "Publication Support",
    tags: ["Books", "Chapters", "Editing"],
    link: "/services#publication",
  },
  {
    id: "pub-4",
    title: "Journal Publication Assistance",
    desc: "Support getting your work published in peer-reviewed journals including Scopus-indexed and UGC-listed.",
    category: "Publication Support",
    tags: ["Scopus", "Peer-reviewed"],
    link: "/services#publication",
  },
  {
    id: "pub-5",
    title: "Plagiarism & AI Content Removal",
    desc: "Thorough similarity reduction, paraphrase refinement, and AI detection score optimization.",
    category: "Publication Support",
    link: "/services#publication",
  },

  // Career & Professional
  {
    id: "car-1",
    title: "Career & Professional Branding",
    desc: "Résumé, LinkedIn, company SOP, grant writing and PR writing — project-based support.",
    category: "Career & Branding",
    link: "/services#career",
  },
  {
    id: "car-2",
    title: "Résumé & CV",
    desc: "Built from scratch or a full edit and optimisation of your existing résumé.",
    category: "Career & Branding",
    link: "/services#career",
  },
  {
    id: "car-3",
    title: "LinkedIn Profile",
    desc: "Complete build-out — headline, About, experience, and keyword positioning.",
    category: "Career & Branding",
    link: "/services#career",
  },
  {
    id: "car-4",
    title: "Company SOP",
    desc: "Corporate statement of purpose and operating documentation.",
    category: "Career & Branding",
    link: "/services#career",
  },
  {
    id: "car-5",
    title: "Grant Writing",
    desc: "Structured, persuasive proposals tailored to funding bodies and programs.",
    category: "Career & Branding",
    link: "/services#career",
  },
  {
    id: "car-6",
    title: "PR Writing",
    desc: "Professional communications written for the right audience and channel.",
    category: "Career & Branding",
    tags: ["Press releases", "White papers", "Case studies"],
    link: "/services#career",
  },
];
