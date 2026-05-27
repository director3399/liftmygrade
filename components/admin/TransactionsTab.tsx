"use client";

const mockTransactions = [
  { id: "TXN-092831", date: "Oct 24, 2:45 PM", customer: "Alex Mercer", amount: "$450.00", status: "Succeeded", method: "Visa •••• 4242" },
  { id: "TXN-092832", date: "Oct 24, 2:12 PM", customer: "Sarah Chen", amount: "$120.00", status: "Succeeded", method: "Mastercard •••• 8812" },
  { id: "TXN-092833", date: "Oct 24, 1:05 PM", customer: "Michael Vane", amount: "$850.00", status: "Failed", method: "Amex •••• 1002" },
  { id: "TXN-092834", date: "Oct 24, 11:30 AM", customer: "Emma Watson", amount: "$2,100.00", status: "Refunded", method: "Visa •••• 5591" },
  { id: "TXN-092835", date: "Oct 24, 9:15 AM", customer: "David Kim", amount: "$320.00", status: "Succeeded", method: "Apple Pay" },
];

export default function TransactionsTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Financial Operations</h2>
          <p className="text-[13px] text-slate-500 mt-1">Monitor payments, refunds, and operational cash flow.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 flex items-center justify-between">
          <div>
            <div className="text-[13px] font-medium text-slate-500 mb-1">Net Volume (30d)</div>
            <div className="text-[28px] font-bold text-slate-900 tracking-tighter leading-none">$284,500.00</div>
          </div>
          <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 flex items-center justify-between">
          <div>
            <div className="text-[13px] font-medium text-slate-500 mb-1">Success Rate</div>
            <div className="text-[28px] font-bold text-slate-900 tracking-tighter leading-none">98.4%</div>
          </div>
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 flex items-center justify-between">
          <div>
            <div className="text-[13px] font-medium text-slate-500 mb-1">Failed & Refunded</div>
            <div className="text-[28px] font-bold text-slate-900 tracking-tighter leading-none">$4,250.00</div>
          </div>
          <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col overflow-hidden flex-1">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex gap-1">
            <button className="px-4 py-1.5 text-[13px] font-semibold text-slate-900 bg-white shadow-sm border border-slate-200 rounded-md">All</button>
            <button className="px-4 py-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-900 rounded-md transition-colors">Succeeded</button>
            <button className="px-4 py-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-900 rounded-md transition-colors">Failed</button>
            <button className="px-4 py-1.5 text-[13px] font-medium text-slate-500 hover:text-slate-900 rounded-md transition-colors">Refunded</button>
          </div>
          <div className="relative w-64">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search transactions..." className="w-full pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-md text-[13px] outline-none focus:border-blue-500 transition-colors" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Method</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((tx) => (
                <tr key={tx.id} className="border-b border-slate-50 hover:bg-slate-50/50 cursor-pointer transition-colors last:border-none">
                  <td className="px-6 py-3.5 text-[13px] font-semibold text-slate-900">{tx.amount}</td>
                  <td className="px-6 py-3.5">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium ${
                      tx.status === 'Succeeded' ? 'bg-emerald-50 text-emerald-700' :
                      tx.status === 'Failed' ? 'bg-rose-50 text-rose-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      <span className={`w-1 h-1 rounded-full ${
                        tx.status === 'Succeeded' ? 'bg-emerald-500' :
                        tx.status === 'Failed' ? 'bg-rose-500' :
                        'bg-slate-500'
                      }`}></span>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-[13px] text-slate-600 font-medium">{tx.customer}</td>
                  <td className="px-6 py-3.5 text-[13px] text-slate-500">{tx.date}</td>
                  <td className="px-6 py-3.5 text-[13px] text-slate-500 flex items-center gap-2">
                    <div className="w-8 h-5 border border-slate-200 rounded flex items-center justify-center bg-white shadow-sm text-[8px] font-bold">
                      {tx.method.split(' ')[0]}
                    </div>
                    {tx.method.split(' ').slice(1).join(' ')}
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
