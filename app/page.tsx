import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyStudentsGetStuck from "@/components/WhyStudentsGetStuck";
import Mentorship from "@/components/Mentorship";
import AcademicJourney from "@/components/AcademicJourney";
import Milestones from "@/components/Milestones";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Pathways from "@/components/Pathways";
import Pricing from "@/components/Pricing";
import BlogSection from "@/components/BlogSection";
import MeetOurTeam from "@/components/MeetOurTeam";

export default function Home() {
  return (
    <main className="bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <WhyStudentsGetStuck />
      <Mentorship />
      <Pathways />
      <AcademicJourney />
      <Milestones />
      <MeetOurTeam />
      <Pricing />
      <Testimonials />
      <BlogSection />
      <Footer />
    </main>
  );
}
