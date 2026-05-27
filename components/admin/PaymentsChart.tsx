"use client";
import { useState } from "react";

const columnsData = [
  {
    label: "Initiated Payments",
    value: "65.2k",
    topY: 20,
    nextTopY: 60,
    pillY: 10,
    baseFill: "url(#hatch-blue)",
    baseFace: "url(#blue-face)",
    basePill: "#60a5fa",
    ttValue: "65.2k", ttConv: "100%", ttDrop: "0%"
  },
  {
    label: "Authorized Payments",
    value: "54.8k",
    topY: 60,
    nextTopY: 90,
    pillY: 50,
    baseFill: "url(#hatch-blue)",
    baseFace: "url(#blue-face)",
    basePill: "#60a5fa",
    ttValue: "54.8k", ttConv: "84%", ttDrop: "-16%"
  },
  {
    label: "Successful Payments",
    value: "48.6k",
    topY: 90,
    nextTopY: 135,
    pillY: 80,
    baseFill: "url(#hatch-blue)",
    baseFace: "url(#blue-face)",
    basePill: "#60a5fa",
    ttValue: "48.6k", ttConv: "89%", ttDrop: "-11%"
  },
  {
    label: "Payouts to Merchants",
    value: "38.3k",
    topY: 135,
    nextTopY: 170,
    pillY: 125,
    baseFill: "url(#hatch-light)",
    baseFace: "#e2e8f0",
    basePill: "#94a3b8",
    ttValue: "38.3k", ttConv: "78%", ttDrop: "-22%"
  },
  {
    label: "Completed Transactions",
    value: "32.9k",
    topY: 170,
    nextTopY: 170,
    pillY: 160,
    baseFill: "url(#hatch-light)",
    baseFace: "transparent",
    basePill: "#94a3b8",
    ttValue: "32.9k", ttConv: "86%", ttDrop: "-14%"
  },
];

export default function PaymentsChart() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="p-6 pb-0">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[18px] font-semibold text-[#111111] m-0">Payments</h2>
          <button className="bg-none border border-slate-200 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer gap-[3px]">
            <span className="block w-1 h-1 rounded-full bg-slate-500" />
            <span className="block w-1 h-1 rounded-full bg-slate-500" />
            <span className="block w-1 h-1 rounded-full bg-slate-500" />
          </button>
        </div>

        {/* Chart Layout Container */}
        <div className="flex">
          {/* Global SVG Definitions. Removed visibility: hidden to fix Safari/WebKit pattern rendering bugs */}
          <svg width="0" height="0" style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
            <defs>
              <pattern id="hatch-blue" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="8" height="8" fill="#60a5fa" />
                <line x1="0" y1="0" x2="0" y2="8" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.6" />
              </pattern>

              {/* Solid blue gradient for the active bar on hover */}
              <linearGradient id="grad-active" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="30%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>

              <pattern id="hatch-light" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="8" height="8" fill="#e2e8f0" />
                <line x1="0" y1="0" x2="0" y2="8" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.8" />
              </pattern>

              <linearGradient id="blue-face" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.8"/>
                 <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Left Y-Axis */}
          <div className="w-10 pr-4">
            <div className="flex flex-col justify-between text-[11px] text-slate-400 text-right h-[260px] mt-[66px] py-2.5">
              {["70k", "60k", "50k", "40k", "30k"].map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>

          {/* The Columns */}
          <div className="flex-1 flex">
            {columnsData.map((col, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <div
                  className="flex-1 flex flex-col border-l border-slate-100 first:border-l-0 cursor-pointer"
                  key={col.label}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Metric Stats perfectly encapsulated above the bar */}
                  <div className="h-[54px] pl-3 mb-3 flex flex-col justify-end text-left">
                    <div className={`text-[12px] mb-1 whitespace-nowrap transition-colors duration-200 ${isHovered ? "text-slate-700 font-medium" : "text-slate-400"}`}>
                      {col.label}
                    </div>
                    <div className={`text-[24px] leading-none transition-all duration-200 ${isHovered ? "text-[#111111] font-semibold" : "text-slate-300 font-normal"}`}>
                      {col.value}
                    </div>
                  </div>

                  {/* SVG block for this specific column */}
                  <div className="h-[260px] relative">
                    <svg viewBox="0 0 200 240" preserveAspectRatio="none" className="w-full h-full block">
                      {/* 1. Base Front Face (Hatched) */}
                      <rect x="0" y={col.topY} width="150" height={240 - col.topY} fill={col.baseFill} />

                      {/* 2. Active Front Face (Solid Blue Gradient overlay - smooth transition) */}
                      <rect 
                        x="0" 
                        y={col.topY} 
                        width="150" 
                        height={240 - col.topY} 
                        fill="url(#grad-active)" 
                        style={{ 
                          opacity: isHovered ? 1 : 0,
                          transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                          pointerEvents: "none"
                        }}
                      />

                      {/* 3. Base Connector Face */}
                      {col.baseFace !== "transparent" && (
                        <polygon points={`150,${col.topY} 150,240 200,240 200,${col.nextTopY}`} fill={col.baseFace} />
                      )}

                      {/* 4. Active Connector Face (Solid Blue overlay - smooth transition) */}
                      {col.baseFace !== "transparent" && (
                        <polygon 
                          points={`150,${col.topY} 150,240 200,240 200,${col.nextTopY}`} 
                          fill="#3b82f6" 
                          style={{ 
                            opacity: isHovered ? 1 : 0,
                            transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                            pointerEvents: "none"
                          }}
                        />
                      )}

                      {/* 5. Base Pill indicator */}
                      <rect x="55" y={col.pillY} width="40" height="6" rx="3" fill={col.basePill} />

                      {/* 6. Active Pill indicator (Solid Dark Blue overlay - smooth transition) */}
                      <rect 
                        x="55" 
                        y={col.pillY} 
                        width="40" height="6" rx="3" 
                        fill="#1e3a8a" 
                        style={{ 
                          opacity: isHovered ? 1 : 0,
                          transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                          pointerEvents: "none"
                        }}
                      />
                    </svg>

                    {/* Absolute Tooltip for Active Column - Smooth Rise & Fade */}
                    <div className={`absolute top-[60px] left-[37.5%] -translate-x-1/2 bg-white px-3.5 py-2 rounded-[20px] text-[12px] text-slate-600 shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-slate-100 whitespace-nowrap z-10 pointer-events-none transition-all duration-200 ease-out after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:border-t-[6px] after:border-x-[6px] after:border-b-0 after:border-t-white after:border-x-transparent ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
                      <strong className="text-slate-900 font-semibold">{col.ttValue}</strong> transactions <span className="text-slate-300 mx-1">|</span> Conversion: <strong className="text-slate-900 font-semibold">{col.ttConv}</strong> <span className="text-slate-300 mx-1">|</span> Drop-off: <strong className="text-slate-900 font-semibold">{col.ttDrop}</strong>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
