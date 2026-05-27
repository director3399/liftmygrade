"use client";

export default function AIInsightsTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 h-[calc(100vh-140px)]">
      {/* Header */}
      <div className="flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            AI Analyst
          </h2>
          <p className="text-[13px] text-slate-500 mt-1">Growth opportunities, anomaly detection, and smart suggestions.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg text-[13px] font-medium hover:opacity-90 transition-opacity shadow-md shadow-blue-500/20">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          Run Full Analysis
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-0">
        {/* Left Col: Insight Cards */}
        <div className="flex-1 overflow-y-auto scrollbar-none pr-2 flex flex-col gap-4">
          
          {/* Insight Card 1 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-blue-100 p-5 relative overflow-hidden group hover:shadow-lg hover:border-blue-200 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1">High Checkout Drop-off on Mobile</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Checkout failures increased by <span className="font-bold text-rose-500">14%</span> on mobile devices over the last 48 hours. This correlates with the recent update to the payment gateway script.
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-[12px] font-semibold hover:bg-blue-100 transition-colors">View Funnel</button>
                  <button className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-[12px] font-medium hover:bg-slate-100 transition-colors">Dismiss</button>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Card 2 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-emerald-100 p-5 relative overflow-hidden group hover:shadow-lg hover:border-emerald-200 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1">Instagram Campaign Outperforming</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Users originating from Instagram convert <span className="font-bold text-emerald-600">2.3x higher</span> than organic search. Reallocating $500/day to this channel could yield an estimated $4,200 additional weekly revenue.
                </p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-[12px] font-semibold hover:bg-emerald-100 transition-colors">View Traffic Source</button>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Card 3 */}
          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-5 relative overflow-hidden group hover:shadow-lg transition-all">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1">Cohort Retention Drop</h3>
                <p className="text-[13px] text-slate-600 leading-relaxed">
                  Retention drops significantly after the second purchase. Implementing a post-purchase engagement sequence at day 14 could improve 30-day LTV.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: AI Chat Assistant */}
        <div className="w-full lg:w-[400px] bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col shrink-0 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex items-center gap-3">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div className="text-[13px] font-bold text-slate-900">Ask Data Assistant</div>
              <div className="text-[11px] text-slate-500">Online, trained on your metrics</div>
            </div>
          </div>
          
          <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            <div className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 mt-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div className="bg-slate-100 rounded-2xl rounded-tl-none p-3 text-[13px] text-slate-700">
                Hi! I noticed a spike in failed payments today. Would you like me to analyze the decline codes?
              </div>
            </div>
            
            <div className="flex gap-3 flex-row-reverse">
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center shrink-0 mt-1 text-white text-[10px] font-bold">
                ME
              </div>
              <div className="bg-blue-600 rounded-2xl rounded-tr-none p-3 text-[13px] text-white">
                Yes, show me the breakdown by card network.
              </div>
            </div>
          </div>

          <div className="p-3 border-t border-slate-100 bg-white">
            <div className="relative">
              <input type="text" placeholder="Ask about revenue, churn, etc..." className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-[13px] outline-none focus:border-blue-500 focus:bg-white transition-all" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
