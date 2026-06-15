import React from "react";

export default function Highlighter({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline font-semibold ${className}`}>
      {children}
    </span>
  );
}
