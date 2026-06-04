import React from "react";
import { ArrowRight } from "./Icons";

export default function Navbar({ 
  hideLinks = false,
  theme = "dark"
}: { 
  hideLinks?: boolean;
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";
  const textColor = isLight ? "text-[#171717]" : "text-white";
  const linkColor = isLight ? "text-[#171717]! hover:text-blue-600" : "text-white! hover:text-blue-300";

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className={`text-xl font-extrabold ${textColor} tracking-tighter uppercase`}>
          LIFT<span className="font-light opacity-80">MYGRADE</span>
        </a>

        {!hideLinks && (
          <nav className="hidden lg:flex items-center gap-8">
            <a href="/#about" className={`text-sm font-medium ${linkColor} transition-colors drop-shadow-sm`}>Mentorship</a>
            <a href="/#services" className={`text-sm font-medium ${linkColor} transition-colors drop-shadow-sm`}>Pathways</a>
            <a href="/#journey" className={`text-sm font-medium ${linkColor} transition-colors drop-shadow-sm`}>Journey</a>
            <a href="/#outcome" className={`text-sm font-medium ${linkColor} transition-colors drop-shadow-sm`}>Outcomes</a>
            <a href="/#testimonial" className={`text-sm font-medium ${linkColor} transition-colors drop-shadow-sm`}>Stories</a>
            <a href="/#blog" className={`text-sm font-medium ${linkColor} transition-colors drop-shadow-sm`}>Blog</a>
            <a href="/#pricing" className={`text-sm font-medium ${linkColor} transition-colors drop-shadow-sm`}>Pricing</a>
          </nav>
        )}

        <a
          href="/#assessment"
          className="inline-flex items-center gap-2.5 bg-blue-600 text-white! px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors group"
        >
          Readiness Assessment
          <span className="inline-flex items-center justify-center w-7 h-7 bg-white rounded-full text-blue-600">
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </a>
      </div>
    </header>
  );
}
