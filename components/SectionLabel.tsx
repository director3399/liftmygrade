import React from "react";

interface SectionLabelProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function  SectionLabel({ children, light = false }: SectionLabelProps) {
  // Styles for light background sections
  const dotColor = light ? "bg-white/90" : "bg-black/80";
  const textColor = light ? "text-white/80" : "text-neutral-600";

  return (
    <div className={`flex items-center gap-2.5 text-[13px] font-semibold mb-8 tracking-wide ${textColor}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      {children}
    </div>
  );
}
