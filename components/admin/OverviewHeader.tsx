"use client";

export default function OverviewHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 gap-4">
      <div>
        <div className="flex items-center gap-2.5">
          <h1 className="text-[48px] font-bold text-[#111111] tracking-tighter m-0 leading-none">Overview</h1>
          <button className="w-8 h-8 rounded-full border border-slate-200 bg-white flex items-center justify-center cursor-pointer text-slate-400 hover:border-slate-400 hover:text-slate-700 transition-all duration-150" aria-label="Copy link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[13px] font-medium text-slate-700 cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 whitespace-nowrap">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Jan 01 – July 31 ▾
        </button>
        <span className="text-[13px] text-slate-400">compared to</span>
        <button className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-slate-200 bg-white text-[13px] font-medium text-slate-700 cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all duration-150 whitespace-nowrap">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Aug 01 – Dec 31
        </button>
      </div>
    </div>
  );
}
