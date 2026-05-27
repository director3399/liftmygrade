"use client";

export default function AnalyticsTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Top Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Business Intelligence</h2>
          <p className="text-[13px] text-slate-500 mt-1">Deep dive into revenue, retention, and growth metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
            Add Filter
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            Last 30 Days
          </button>
        </div>
      </div>

      {/* Primary Chart Area */}
      <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-[15px] font-semibold text-slate-900">Revenue vs Active Customers</h3>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-[12px] text-slate-500">Revenue</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[12px] text-slate-500">Active Customers</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[24px] font-bold text-slate-900 tracking-tighter">$124,500</div>
            <div className="text-[12px] text-emerald-600 font-medium">+14.2% vs last month</div>
          </div>
        </div>
        
        {/* Placeholder for Advanced Line Chart */}
        <div className="h-[280px] w-full border-b border-l border-slate-100 relative flex items-end justify-between px-4 pb-4">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-50"></div>
          
          {/* Mock lines */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,80 C20,70 40,90 60,40 C80,-10 100,20 100,20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
            <path d="M0,90 C20,85 40,75 60,60 C80,50 100,30 100,30" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
          </svg>
          
          {/* X Axis Labels */}
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <span key={day} className="text-[11px] text-slate-400 relative z-10 translate-y-8">{day}</span>
          ))}
        </div>
      </div>

      {/* Secondary Row: Device Breakdown & Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Funnel */}
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 flex flex-col">
          <h3 className="text-[15px] font-semibold text-slate-900 mb-6">Conversion Funnel</h3>
          <div className="flex-1 flex flex-col justify-center gap-3">
            {[
              { step: "Site Visitors", count: "124,500", pct: "100%", color: "bg-slate-100" },
              { step: "Product Views", count: "86,200", pct: "69%", color: "bg-blue-50" },
              { step: "Add to Cart", count: "32,400", pct: "26%", color: "bg-blue-100" },
              { step: "Checkout Started", count: "18,900", pct: "15%", color: "bg-blue-200" },
              { step: "Purchased", count: "12,100", pct: "9.7%", color: "bg-blue-500", text: "text-white" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-24 text-[12px] text-slate-500 font-medium text-right">{s.step}</div>
                <div className="flex-1 h-10 bg-slate-50 rounded-lg relative overflow-hidden flex items-center">
                  <div className={`absolute left-0 top-0 bottom-0 ${s.color} transition-all duration-1000`} style={{ width: s.pct }}></div>
                  <div className={`relative z-10 px-4 text-[13px] font-bold ${s.text || 'text-slate-700'}`}>{s.count}</div>
                </div>
                <div className="w-12 text-[12px] font-bold text-slate-400">{s.pct}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Device/Source Breakdown */}
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 flex flex-col">
          <h3 className="text-[15px] font-semibold text-slate-900 mb-6">Traffic Sources & Devices</h3>
          <div className="flex-1 flex items-center justify-center gap-8">
            {/* Mock Doughnut */}
            <div className="relative w-40 h-40">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#f1f5f9" strokeWidth="16" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="62.8" className="transition-all duration-1000" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="#10b981" strokeWidth="16" strokeDasharray="251.2" strokeDashoffset="200.96" className="transition-all duration-1000" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-[20px] font-bold text-slate-900">75%</span>
                <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Mobile</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-sm bg-blue-500"></span>
                  <span className="text-[13px] font-medium text-slate-700">Mobile Devices</span>
                </div>
                <div className="text-[12px] text-slate-500 ml-5">75% of total traffic</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-sm bg-emerald-500"></span>
                  <span className="text-[13px] font-medium text-slate-700">Desktop / Web</span>
                </div>
                <div className="text-[12px] text-slate-500 ml-5">20% of total traffic</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-sm bg-slate-200"></span>
                  <span className="text-[13px] font-medium text-slate-700">Tablets & Other</span>
                </div>
                <div className="text-[12px] text-slate-500 ml-5">5% of total traffic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
