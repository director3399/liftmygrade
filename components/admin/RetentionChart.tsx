"use client";

// Stepped line chart data points (retention curve)
const points = [
  { x: 0, y: 30 },
  { x: 12, y: 25 },
  { x: 20, y: 40 },
  { x: 28, y: 55 },
  { x: 38, y: 52 },
  { x: 44, y: 68 }, // Peak dot sits here! (X=44%, Y=32 in SVG 100x100 space)
  { x: 50, y: 62 },
  { x: 56, y: 64 },
  { x: 64, y: 54 },
  { x: 74, y: 42 },
  { x: 84, y: 50 },
  { x: 92, y: 44 },
  { x: 100, y: 38 },
];

export default function RetentionChart() {
  // Build stepped path
  let steppedPath = `M 0,${100 - points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const curr = points[i];
    // Stepped line: horizontal step to current X, then vertical step to current Y
    steppedPath += ` H ${curr.x} V ${100 - curr.y}`;
  }

  const areaPath = `${steppedPath} L 100,100 L 0,100 Z`;

  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 h-full flex flex-col justify-between relative min-h-[340px]">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[16px] font-semibold text-[#111111] m-0">Retention</h2>
          <button className="bg-none border-none cursor-pointer flex flex-col gap-[3px] p-1">
            <span className="block w-1 h-1 rounded-full bg-slate-300" />
            <span className="block w-1 h-1 rounded-full bg-slate-300" />
            <span className="block w-1 h-1 rounded-full bg-slate-300" />
          </button>
        </div>
      </div>

      {/* Main Stepped Chart Area */}
      <div className="flex-1 relative min-h-[180px] mt-8">
        {/* Floating Peak badge matching the screenshot exactly */}
        <div 
          className="absolute -translate-x-1/2 flex flex-col items-center z-10 pointer-events-none"
          style={{ left: "44%", top: "18%" }}
        >
          <span className="text-[11px] font-bold text-slate-800 bg-white border border-slate-150 shadow-md rounded-full px-2.5 py-0.5">
            42%
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 border border-white mt-1 shadow-sm animate-pulse" />
        </div>

        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[180px] block">
          <defs>
            {/* Custom Vertical striped line pattern matching the screenshot */}
            <pattern id="retHatch" width="4" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="100" stroke="#f43f5e" strokeWidth="1" strokeOpacity="0.22" />
            </pattern>
          </defs>

          {/* Vertical Pink Stripes Shading Area */}
          <path d={areaPath} fill="url(#retHatch)" />

          {/* Stepped Pink Curve Line */}
          <path
            d={steppedPath}
            fill="none"
            stroke="#f43f5e"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />

          {/* Highlight Peak Dot */}
          <circle cx="44" cy="32" r="2.2" fill="#e11d48" stroke="#ffffff" strokeWidth="0.8" className="shadow" />
        </svg>
      </div>
    </div>
  );
}
