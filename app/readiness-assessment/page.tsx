import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReadinessForm from "@/components/ReadinessForm";
import SectionLabel from "@/components/SectionLabel";
import Image from "next/image";

export const metadata = {
  title: "Study Abroad Readiness Assessment | LiftmyGrade",
  description: "Tell us about your goals and academic background. Our admissions mentors will review your profile and map out the right pathway for you.",
};

export default function ReadinessAssessmentPage() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      <Navbar theme="light" hideLinks />
      
      {/* Main Content Area */}
      <div className="flex-1 w-full px-6 md:px-12 pt-[160px] pb-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side: Form Content (approx 58%) */}
          <div className="w-full lg:w-7/12 flex flex-col">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#171717] tracking-tight mb-6 leading-[1.1]">
              Study Abroad Readiness Assessment
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed mb-16">
              Tell us about your goals and academic background. Our admissions mentors will review your profile and map out the right pathway for you — typically within 48 hours.
            </p>
            
            <ReadinessForm />
          </div>

          {/* Right Side: Sticky Image (approx 42%) */}
          <div className="hidden lg:block lg:w-5/12 relative">
            <div className="sticky top-[120px] w-full h-[calc(100vh-160px)] min-h-[600px] rounded-4xl overflow-hidden">
              <Image
                src="/program1.png"
                alt="Premium Academic Environment"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Footer spans full width at the bottom */}
      <Footer />
    </main>
  );
}
