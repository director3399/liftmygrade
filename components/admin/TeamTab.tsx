"use client";

const mockTeam = [
  { name: "Admin User", role: "Owner", email: "admin@liftmygrade.com", lastActive: "Just now", initials: "AU", color: "bg-blue-100 text-blue-700" },
  { name: "John Smith", role: "Support Lead", email: "john@liftmygrade.com", lastActive: "2 hrs ago", initials: "JS", color: "bg-emerald-100 text-emerald-700" },
  { name: "Sarah Connor", role: "Analyst", email: "sarah@liftmygrade.com", lastActive: "1 day ago", initials: "SC", color: "bg-amber-100 text-amber-700" },
];

export default function TeamTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">Team Management</h2>
          <p className="text-[13px] text-slate-500 mt-1">Manage team members, roles, and permissions.</p>
        </div>
        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[13px] font-medium hover:bg-slate-800 transition-colors shadow-sm">
          Invite Member
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50">
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Member</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Last Active</th>
                <th className="px-6 py-4 text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockTeam.map((member, i) => (
                <tr key={i} className={`border-b border-slate-50 hover:bg-slate-50/50 transition-colors ${i === mockTeam.length - 1 ? 'border-none' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-bold ${member.color}`}>
                        {member.initials}
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-slate-900">{member.name}</div>
                        <div className="text-[12px] text-slate-500">{member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-[11px] font-medium">{member.role}</span>
                  </td>
                  <td className="px-6 py-4 text-[13px] text-slate-500">{member.lastActive}</td>
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
