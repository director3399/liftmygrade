import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { ArrowRight, Check } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Our Services & Products | LiftmyGrade",
  description: "Everything we offer, in one place. From free readiness assessments to fully drafted applications, research support, and career documents.",
};

const ServiceSection = ({ id, label, title, subtitle, items, theme = "default" }: any) => {
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
            <div key={i} className="bg-white border border-neutral-100 rounded-[1.5rem] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.1)] transition-all flex flex-col">
              {item.image && (
                <div className="w-full h-48 relative bg-neutral-100">
                  <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              )}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#171717] tracking-tight">{item.title}</h3>
                  {item.isFree && (
                    <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-widest text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
                      Free
                    </span>
                  )}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-50">
                    {item.tags.map((tag: string, t: number) => (
                      <span key={t} className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  const freeServices = [
    { title: "Readiness Report", desc: "An honest assessment of where you stand, generated from your profile.", isFree: true, image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=1000&q=90" },
    { title: "2 Consultation Calls", desc: "Two one-to-one sessions to understand your goals and direction.", isFree: true, image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=90" },
    { title: "Country Shortlisting", desc: "We narrow your best-fit top 1–3 destinations together.", isFree: true, image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=90" },
    { title: "Detailed Roadmap", desc: "A country-specific plan — timelines, tests, intakes, funding, checklist.", isFree: true, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1000&q=90" },
    { title: "Document Analysis", desc: "A complimentary review of any résumé, SOP, or document you already have.", isFree: true, image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=90" }
  ];

  const admissions = [
    { title: "Statement of Purpose (SOP)", desc: "A compelling, tailored SOP drafted around your story and each target program." },
    { title: "Letters of Recommendation", desc: "Well-structured LORs that highlight the right strengths for your application." },
    { title: "Academic CV / Résumé", desc: "An admissions-ready CV that presents your profile clearly and credibly." },
    { title: "Test & Exam Guidance", desc: "Direction for IELTS, TOEFL, PTE, Duolingo, and SAT / ACT / GRE / GMAT / LSAT as needed." },
    { title: "Visa & Formalities Support", desc: "Financial documentation, visa statements, and interview preparation." },
    { title: "Submission & Tracking", desc: "Application assembly, deadline tracking across intakes, and offer-stage guidance." }
  ];

  const phd = [
    { title: "Research Proposal", desc: "A focused, fundable research proposal — the centrepiece of your PhD application." },
    { title: "Academic CV & SOR", desc: "Research-focused academic CV and Statement of Research Interest." },
    { title: "Research-Focused LORs", desc: "Recommendation letters positioned for research potential and fit." },
    { title: "Supervisor & Program Mapping", desc: "Identify aligned supervisors and programs; build a ranked target list." },
    { title: "Professor Outreach Strategy", desc: "Personalised first-contact emails referencing each supervisor's work." },
    { title: "Communication Strategy", desc: "Managing supervisor dialogue, follow-ups, and interview correspondence." },
    { title: "Funding & Interview Support", desc: "Assistantship, fellowship and scholarship applications, plus interview prep." }
  ];

  const publication = [
    { title: "Journal Publication Assistance", desc: "Support getting your work published in peer-reviewed journals — including Scopus-indexed, Google Scholar, and UGC-listed outlets.", tags: ["Scopus", "Google Scholar", "UGC-listed", "Peer-reviewed"] },
    { title: "Manuscript Editing & Positioning", desc: "Editorial support to refine and position your manuscript for submission — an additional edge for humanities, postgraduate, and research applicants." }
  ];

  const career = [
    { title: "Résumé & CV", desc: "Built from scratch or a full edit and optimisation of your existing résumé." },
    { title: "LinkedIn Profile", desc: "Complete build-out — headline, About, experience, and keyword positioning." },
    { title: "Company SOP", desc: "Corporate statement of purpose and operating documentation." },
    { title: "Grant Writing", desc: "Structured, persuasive proposals tailored to funding bodies and programs." },
    { title: "PR Writing", desc: "Professional communications written for the right audience and channel.", tags: ["Press releases", "Media advisories", "Fact sheets", "White papers", "Case studies", "Social media"] }
  ];

  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar theme="light" hideLinks />

      {/* Hero Section */}
      <section className="pt-[160px] pb-16 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto">

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#171717] tracking-tight mb-8 leading-[1.1] max-w-4xl">
            Everything We Offer, <br className="hidden md:block" />In One Place.
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl leading-relaxed mb-12">
            From a <Link href="/readiness-assessment" className="text-blue-600 hover:underline">free readiness assessment</Link> to fully drafted applications, research support, publication assistance, and <Link href="/career-services" className="text-blue-600 hover:underline">career documents</Link> — here's the complete range of what we do, organised so you can find exactly what you need.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#free" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">Free Services</a>
            <a href="#admissions" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">Bachelor's & Master's</a>
            <a href="#phd" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">PhD & Research</a>
            <a href="#publication" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">Publication Support</a>
            <a href="#career" className="text-sm font-bold text-neutral-800 bg-neutral-100 px-5 py-2.5 rounded-full hover:bg-neutral-200 transition-colors">Career & Professional</a>
          </div>
        </div>
      </section>

      <ServiceSection 
        id="free" 
        label="Free" 
        title="Free Discovery Services" 
        subtitle="Where every journey begins — at no cost, no commitment." 
        items={freeServices} 
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
            Begin with a free assessment or consultation — we'll point you to exactly the right service for your goal.
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
