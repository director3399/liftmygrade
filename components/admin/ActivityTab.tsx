"use client";

const mockActivity = [
  { id: 1, type: "alert", title: "Failed Payment Spike", desc: "Detected 14 failed payments in the last hour from Europe region.", time: "10 mins ago", icon: "alert-triangle", color: "text-rose-600 bg-rose-50" },
  { id: 2, type: "success", title: "New Enterprise Customer", desc: "GlobalTech Inc. just upgraded to the Premium Mentorship Tier ($12,000/yr).", time: "1 hour ago", icon: "check-circle", color: "text-emerald-600 bg-emerald-50" },
  { id: 3, type: "info", title: "System Update Complete", desc: "Successfully deployed v2.4.1. No downtime recorded.", time: "3 hours ago", icon: "server", color: "text-blue-600 bg-blue-50" },
  { id: 4, type: "warning", title: "High Support Volume", desc: "Support queue currently has 45 open tickets (avg wait: 4 hours).", time: "5 hours ago", icon: "users", color: "text-amber-600 bg-amber-50" },
];

export default function ActivityTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">System Activity</h2>
          <p className="text-[13px] text-slate-500 mt-1">Real-time operational awareness and alerts.</p>
        </div>
        <button className="text-[13px] font-medium text-slate-500 hover:text-slate-900">
          Mark all as read
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex gap-2 bg-slate-50/50">
          <button className="px-3 py-1.5 bg-white border border-slate-200 shadow-sm rounded-lg text-[12px] font-semibold text-slate-800">All Alerts</button>
          <button className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-slate-500 hover:bg-slate-100">Critical</button>
          <button className="px-3 py-1.5 rounded-lg text-[12px] font-medium text-slate-500 hover:bg-slate-100">System</button>
        </div>
        
        <div className="flex flex-col">
          {mockActivity.map((item, i) => (
            <div key={item.id} className={`p-5 flex gap-4 hover:bg-slate-50 transition-colors ${i !== mockActivity.length - 1 ? 'border-b border-slate-50' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                {item.icon === 'alert-triangle' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>}
                {item.icon === 'check-circle' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>}
                {item.icon === 'server' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>}
                {item.icon === 'users' && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-[14px] font-semibold text-slate-900">{item.title}</h3>
                  <span className="text-[11px] text-slate-400 font-medium">{item.time}</span>
                </div>
                <p className="text-[13px] text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
