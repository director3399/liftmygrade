"use client";

const categories = [
  { 
    label: "Online Payments", 
    gradient: "repeating-linear-gradient(45deg, #22c55e, #22c55e 6px, rgba(255,255,255,0.5) 6px, rgba(255,255,255,0.5) 12px)", 
    pct: 85 
  },
  { 
    label: "Subscriptions", 
    gradient: "repeating-linear-gradient(45deg, #3b82f6, #3b82f6 6px, rgba(255,255,255,0.5) 6px, rgba(255,255,255,0.5) 12px)", 
    pct: 68 
  },
  { 
    label: "In-Store Sales", 
    gradient: "repeating-linear-gradient(45deg, #f472b6, #f472b6 6px, rgba(255,255,255,0.5) 6px, rgba(255,255,255,0.5) 12px)", 
    pct: 52 
  },
];

export default function GrossVolumeSidebar() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-[18px] font-semibold text-slate-900 m-0 mb-4">Gross Volume</h2>
        {/* Large bold volume number matching the reference image */}
        <div className="text-[56px] md:text-[64px] font-bold text-slate-950 tracking-tighter leading-none mb-8">
          $41.5B
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {categories.map((cat) => (
          <div key={cat.label}>
            <div className="text-[13px] font-medium text-slate-500 mb-2">{cat.label}</div>
            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease"
                style={{ width: `${cat.pct}%`, backgroundImage: cat.gradient }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InsightsCard() {
  return (
    <div className="rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden relative bg-linear-to-br from-[#eaddce] via-[#aebdd6] to-[#518dc9] before:content-[''] before:absolute before:inset-0 before:bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20200%20200%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27noiseFilter%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%270.65%27%20numOctaves=%273%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23noiseFilter)%27%20opacity=%270.1%27/%3E%3C/svg%3E')] before:mix-blend-overlay before:pointer-events-none min-h-[280px] flex flex-col justify-between">
      <div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#7b4f35] bg-white/40 border border-white/50 rounded-full px-2.5 py-0.5 mb-4 backdrop-blur-xs">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Insights
        </div>
        <div className="text-[52px] font-extrabold text-white tracking-tighter leading-none mb-2 relative z-1">75%</div>
      </div>
      <div className="text-[13px] font-medium text-slate-100 relative z-1">Profile Completion Rate</div>
    </div>
  );
}
