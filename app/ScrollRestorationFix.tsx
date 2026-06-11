"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestorationFix() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScrollFix = (event?: PageTransitionEvent) => {
      if (event && !event.persisted) return;
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    };

    window.addEventListener("pageshow", handleScrollFix);

    return () => {
      window.removeEventListener("pageshow", handleScrollFix);
    };
  }, [pathname]);

  return null;
}
