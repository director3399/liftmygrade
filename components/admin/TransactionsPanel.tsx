"use client";

// Grid of dots for bar chart visual
const dotGrid = [
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 2, 2, 1, 1, 1, 0],
  [1, 1, 1, 2, 2, 2, 2, 1, 1, 1],
  [1, 1, 2, 2, 2, 2, 2, 2, 1, 1],
];

// 0 = empty/light, 1 = medium green, 2 = dark green
const dotColors: Record<number, string> = {
  0: "#d1fae5",
  1: "#34d399",
  2: "#059669",
};

export default function TransactionsPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 flex flex-col justify-between min-h-[160px]">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-[16px] font-semibold text-[#111111] m-0">Transactions</h2>
        <button className="bg-none border-none cursor-pointer flex flex-col gap-[3px] p-1">
          <span className="block w-1 h-1 rounded-full bg-slate-300" />
          <span className="block w-1 h-1 rounded-full bg-slate-300" />
          <span className="block w-1 h-1 rounded-full bg-slate-300" />
        </button>
      </div>

      {/* Horizontal Alignment Layout: Left (106k) | Center (dots + Peak badge) | Right (vs last period) */}
      <div className="flex items-center justify-between mt-4">
        {/* Left */}
        <div className="text-[44px] font-bold text-[#111111] tracking-tighter leading-none">
          106k
        </div>

        {/* Center */}
        <div className="flex flex-col items-center relative -top-3">
          {/* Floating Peak Badge positioned exactly above the heat-map dots */}
          <div className="mb-2">
            <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 shadow-sm rounded-full px-2.5 py-0.5 whitespace-nowrap">
              Peak: Wed
            </span>
          </div>
          {/* Heat-map Dots */}
          <div className="flex flex-col gap-[3px]">
            {dotGrid.map((row, ri) => (
              <div key={ri} className="flex gap-[3px]">
                {row.map((val, ci) => (
                  <div
                    key={ci}
                    className="w-2.5 h-2.5 rounded-[1.5px] transition-all duration-300 hover:scale-110"
                    style={{ background: val === 0 ? "transparent" : dotColors[val] }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="text-right">
          <div className="text-[11px] text-slate-400 mb-0.5">vs last period</div>
          <div className="text-[18px] font-bold text-emerald-600 tracking-tight leading-none">+34,002</div>
        </div>
      </div>
    </div>
  );
}
