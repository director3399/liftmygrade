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
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Mentorship />
      <WhyStudentsGetStuck />
      <Pathways />
      <AcademicJourney />
      <Milestones />
      <MeetOurTeam />
      <Pricing />
      <Testimonials />
      <BlogSection />
      <ContactUs />
      <Footer />
    </main>
  );
}
