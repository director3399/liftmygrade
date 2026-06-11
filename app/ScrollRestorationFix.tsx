"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestorationFix() {
  const pathname = usePathname();

  useEffect(() => {
    // When navigating back via bfcache, Framer Motion's IntersectionObservers 
    // sometimes fail to trigger because the scroll position is restored instantly.
    // Dispatching a resize and scroll event forces them to recalculate.
    const t1 = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    }, 50);
    
    const t2 = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
      window.dispatchEvent(new Event("scroll"));
    }, 300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  return null;
}
