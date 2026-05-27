"use client";

export default function ReportsTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Reports & Exports</h2>
          <p className="text-[13px] text-slate-500 mt-1">Generate professional reports, schedule exports, and download summaries.</p>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-[13px] font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20">
          Create New Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Monthly Financials", type: "PDF", schedule: "1st of every month", lastRun: "Oct 1, 2024" },
          { title: "Customer Churn Analysis", type: "CSV", schedule: "Every Monday", lastRun: "Oct 21, 2024" },
          { title: "Product Performance", type: "PDF", schedule: "Manual", lastRun: "Sep 15, 2024" },
        ].map((report, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 flex flex-col group hover:border-blue-200 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded">{report.type}</span>
            </div>
            <h3 className="text-[15px] font-semibold text-slate-900 mb-1">{report.title}</h3>
            <div className="text-[12px] text-slate-500 mb-4">Schedule: {report.schedule}</div>
            
            <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Last run: {report.lastRun}</span>
              <button className="text-[12px] font-medium text-blue-600 hover:text-blue-700">Download</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
