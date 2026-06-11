"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, Close, Instagram, Youtube } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({
  hideLinks = false,
  theme = "dark"
}: {
  hideLinks?: boolean;
  theme?: "dark" | "light";
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLight = theme === "light";

  // Only apply custom text colors if mobile menu is closed, otherwise force dark text on white bg
  const textColor = isMobileMenuOpen ? "text-[#171717]" : (isLight ? "text-[#171717]" : "text-white");
  const linkColor = isLight ? "text-[#171717]! hover:text-blue-600" : "text-white! hover:text-blue-300";

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "How It Works", href: "/#journey" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonial" },
    { name: "Contact", href: "/#contact" }
  ];

  return (
    <>
      <header className={`absolute top-0 left-0 right-0 z-60 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-white' : 'bg-transparent'}`}>

        {/* Topbar */}
        <div className={`hidden md:flex justify-between items-center py-2.5 px-6 md:px-12 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-neutral-100 text-neutral-800' : (isLight ? 'bg-neutral-100 text-neutral-800' : 'bg-white/5 backdrop-blur-sm text-white/90 border-b border-white/10')}`}>
          <div className="text-[13px] sm:text-sm font-semibold tracking-wide">
            Call Us : +91 90513 84241
          </div>
          <div className="text-[13px] sm:text-sm tracking-wide text-center flex-1">
            Welcome to LiftmyGrade! <span className="font-bold">Book your FREE consultation today.</span>
          </div>
          <div className="flex items-center gap-2.5">
            <a href="https://www.instagram.com/liftmygrade?igsh=Ynl2dXdrZHFqM2dp" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isMobileMenuOpen || isLight ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' : 'bg-white/10 hover:bg-white/20'}`}>
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="https://www.youtube.com/@LiftMyGrade" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isMobileMenuOpen || isLight ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' : 'bg-white/10 hover:bg-white/20'}`}>
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="py-4 md:py-5 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className={`flex items-center gap-2.5 text-xl font-extrabold ${textColor} tracking-tighter uppercase relative z-60`}>
              <img src="/logo-3.png" alt="LiftmyGrade" className="h-7 sm:h-8 w-auto object-contain" />
              <span>LIFT<span className="font-light opacity-80">MYGRADE</span></span>
            </a>

            {!hideLinks && (
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className={`text-sm font-medium ${linkColor} transition-colors drop-shadow-sm`}>
                    {link.name}
                  </a>
                ))}
              </nav>
            )}

            <div className="flex items-center gap-4">
              <a
                href="/#contact"
                className="hidden sm:inline-flex items-center gap-2.5 bg-blue-600 text-white! px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors group relative z-60"
              >
                Free Consultation
                <span className="inline-flex items-center justify-center w-7 h-7 bg-white rounded-full text-blue-600">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Mobile Menu Toggle Button */}
              {!hideLinks && (
                <button
                  className={`lg:hidden relative z-60 p-2 -mr-2 ${textColor}`}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? <Close className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-55 bg-white pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-5 sm:gap-6 items-center text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (idx * 0.05) }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg sm:text-xl font-semibold text-[#171717] hover:text-blue-600 tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (navLinks.length * 0.05) }}
                className="mt-6 sm:mt-8 w-full max-w-xs mx-auto"
              >
                <a
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex w-full justify-center items-center gap-2.5 bg-blue-600 text-white! px-6 py-3.5 rounded-full text-base font-semibold hover:bg-blue-700 transition-colors group"
                >
                  Free Consultation
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-white rounded-full text-blue-600">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
