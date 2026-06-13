import React from "react";

export default function Highlighter({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 230 35" preserveAspectRatio="none"><path d="M4 14.008C23.238 6.471 78.508 -1.258 126.96 1.488C154.542 3.051 184.453 6.942 211.717 12.181C218.431 13.472 225.568 15.65 229.412 21.05C230.141 22.073 231.189 25.132 227.674 27.245C223.754 29.599 217.432 29.083 213.257 28.599C184.869 25.305 156.402 23.366 127.87 21.942C80.364 19.571 31.94 20.308 0 26.852V14.008H4Z" fill="%23FDE047" opacity="0.8"/></svg>`;
  const bgImage = `url('data:image/svg+xml;utf8,${svgString}')`;

  return (
    <span
      className={`inline ${className}`}
      style={{
        backgroundImage: bgImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 85%",
        backgroundPosition: "center 70%",
        WebkitBoxDecorationBreak: "clone",
        boxDecorationBreak: "clone",
        padding: "0 0.15rem",
      }}
    >
      {children}
    </span>
  );
}
