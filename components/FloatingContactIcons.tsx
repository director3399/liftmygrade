"use client";

import { Mail, MessageCircle } from "lucide-react";

export default function FloatingContactIcons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:hidden">
      {/* Email Icon */}
      <a
        href="mailto:info@liftmygrade.com"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="Email us"
      >
        <Mail size={24} />
      </a>

      {/* WhatsApp Icon */}
      <a
        href="https://wa.me/919147720702"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
