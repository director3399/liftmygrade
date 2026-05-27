import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mentorship from "@/components/Mentorship";
import AcademicJourney from "@/components/AcademicJourney";
import Workshops from "@/components/Workshops";
import ResearchHub from "@/components/ResearchHub";
import Milestones from "@/components/Milestones";
import Philosophy from "@/components/Philosophy";
import SuccessStories from "@/components/SuccessStories";
import Assessment from "@/components/Assessment";
import Footer from "@/components/Footer";
import Pathways from "@/components/Pathways";

export default function Home() {
  return (
    <main className="bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Mentorship />
      <Pathways />
      <AcademicJourney />
      {/* <Workshops /> */}
      {/* <ResearchHub /> */}
      <Milestones />
      {/* <Philosophy /> */}
      <SuccessStories />
      {/* <Assessment /> */}
      <Footer />
    </main>
  );
}
