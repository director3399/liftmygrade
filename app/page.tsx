import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickReports from "@/components/QuickReports";
import Challenges from "@/components/Challenges";
import About from "@/components/About";
import AcademicJourney from "@/components/Journey";
import Standards from "@/components/Standards";
import Programs from "@/components/Programs";
import StartPaths from "@/components/StartPaths";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import OfferBanner from "@/components/OfferBanner";
import PromoPopup from "@/components/PromoPopup";
import TestimonialsFAQ from "@/components/TestimonialsFAQ";
import Contact2 from "@/components/Contact2";

// ═══════════════════════════════════════════════════════════════════
// COMMENTED OUT — Components replaced or merged into new sections.
// Kept here for reference so nothing is lost. To restore, uncomment
// and remove the corresponding new component below.
// ═══════════════════════════════════════════════════════════════════
// import Milestones from "@/components/Milestones";
// → Content consolidated into: AcademicJourney (two-track flow)

export default function Home() {
  return (
    <main className="bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <OfferBanner />
      {/* <About /> */}
      {/* <Challenges /> */}
      <Services />
      <Standards />
      <AcademicJourney />
      {/* <Programs /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      <Blog />
      <TestimonialsFAQ /> 
      {/* <StartPaths /> */}
      {/* <FAQ /> */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* <Contact /> */}
        <Contact2 />
      </Suspense>
      <Footer />

      <PromoPopup />
    </main>
  );
}