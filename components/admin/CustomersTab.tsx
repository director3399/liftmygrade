"use client";

const mockCustomers = [
  { id: "CUS-8921", name: "Alex Mercer", email: "alex.m@example.com", status: "Active", ltv: "$4,250", risk: "Low", lastActive: "2 hours ago" },
  { id: "CUS-8922", name: "Sarah Chen", email: "sarah.c@designco.com", status: "Active", ltv: "$1,840", risk: "Low", lastActive: "5 hours ago" },
  { id: "CUS-8923", name: "Michael Vane", email: "mvane@startup.io", status: "At Risk", ltv: "$850", risk: "High", lastActive: "14 days ago" },
  { id: "CUS-8924", name: "Emma Watson", email: "emma.w@agency.net", status: "Active", ltv: "$5,100", risk: "Low", lastActive: "1 day ago" },
  { id: "CUS-8925", name: "David Kim", email: "dkim@techcorp.com", status: "Inactive", ltv: "$320", risk: "High", lastActive: "2 months ago" },
];

export default function CustomersTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Customer Management</h2>
          <p className="text-[13px] text-slate-500 mt-1">Manage users, view behavior, and predict churn.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-[13px] font-medium hover:bg-slate-800 transition-colors shadow-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          Add Customer
        </button>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: "Total Customers", value: "12,450", trend: "+124 this week" },
          { label: "Active Users", value: "8,210", trend: "66% engagement" },
          { label: "Avg Lifetime Value", value: "$1,240", trend: "+$45 vs last month" },
          { label: "Churn Risk (High)", value: "342", trend: "Needs attention", alert: true }
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-5">
            <div className="text-[12px] font-medium text-slate-500 mb-2">{kpi.label}</div>
            <div className="text-[24px] font-bold text-slate-900 tracking-tighter leading-none mb-2">{kpi.value}</div>
            <div className={`text-[12px] font-medium ${kpi.alert ? 'text-rose-500' : 'text-slate-400'}`}>{kpi.trend}</div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col overflow-hidden">
        {/* Table Toolbar */}
        <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50/50">
          <div className="relative w-full sm:w-[320px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search customers by name, email, or ID..." className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-[13px] outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-400" />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
              Filter
            </button>
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Export
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-white">
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">LTV</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Churn Risk</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockCustomers.map((c, i) => (
                <tr key={c.id} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i === mockCustomers.length - 1 ? 'border-none' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[12px] font-bold text-slate-600">
                        {c.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-slate-900">{c.name}</div>
                        <div className="text-[12px] text-slate-500">{c.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium ${
                      c.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 
                      c.status === 'At Risk' ? 'bg-amber-50 text-amber-700' : 
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[13px] font-medium text-slate-700">{c.ltv}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <div className={`h-full ${c.risk === 'Low' ? 'bg-emerald-500 w-1/4' : 'bg-rose-500 w-3/4'}`}></div>
                      </div>
                      <span className="text-[12px] text-slate-500 font-medium">{c.risk}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[12px] text-slate-500 font-medium">{c.lastActive}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
