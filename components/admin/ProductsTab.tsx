"use client";

const mockProducts = [
  { id: "PRD-01", name: "IELTS Premium Mentorship", category: "Mentorship", sales: 1240, revenue: "$186,000", conversion: "12.4%", trend: "+5.2%" },
  { id: "PRD-02", name: "University Selection Guide", category: "Digital", sales: 3450, revenue: "$51,750", conversion: "8.1%", trend: "+1.2%" },
  { id: "PRD-03", name: "SOP Review Service", category: "Service", sales: 890, revenue: "$44,500", conversion: "18.5%", trend: "+12.4%" },
  { id: "PRD-04", name: "Visa Interview Prep", category: "Mentorship", sales: 420, revenue: "$21,000", conversion: "15.2%", trend: "-2.1%" },
];

export default function ProductsTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Products & Services</h2>
          <p className="text-[13px] text-slate-500 mt-1">Track performance, sales, and conversion rates across your catalog.</p>
        </div>
        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[13px] font-medium hover:bg-slate-800 transition-colors shadow-sm">
          Add New Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-5">
          <div className="text-[12px] font-medium text-slate-500 mb-1">Total Products</div>
          <div className="text-[24px] font-bold text-slate-900 tracking-tighter">24</div>
        </div>
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-5">
          <div className="text-[12px] font-medium text-slate-500 mb-1">Top Performer</div>
          <div className="text-[16px] font-bold text-slate-900 truncate mt-1">IELTS Mentorship</div>
          <div className="text-[12px] text-emerald-600 font-medium mt-1">38% of total revenue</div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col overflow-hidden">
        <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
          <h3 className="text-[15px] font-semibold text-slate-900">Performance Leaderboard</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Product Name</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Sales</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Revenue</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Conv. Rate</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Trend (30d)</th>
              </tr>
            </thead>
            <tbody>
              {mockProducts.map((p, i) => (
                <tr key={p.id} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i === mockProducts.length - 1 ? 'border-none' : ''}`}>
                  <td className="px-6 py-4 text-[13px] font-semibold text-slate-900">{p.name}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-[11px] font-medium">{p.category}</span>
                  </td>
                  <td className="px-6 py-4 text-[13px] font-medium text-slate-700">{p.sales.toLocaleString()}</td>
                  <td className="px-6 py-4 text-[13px] font-bold text-slate-900">{p.revenue}</td>
                  <td className="px-6 py-4 text-[13px] text-slate-600">{p.conversion}</td>
                  <td className={`px-6 py-4 text-[13px] font-medium ${p.trend.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {p.trend}
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
