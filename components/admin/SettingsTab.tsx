"use client";

export default function SettingsTab() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto w-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">System Settings</h2>
          <p className="text-[13px] text-slate-500 mt-1">Manage branding, integrations, and preferences.</p>
        </div>
        <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-[13px] font-medium hover:bg-slate-800 transition-colors shadow-sm">
          Save Changes
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0 flex flex-col gap-1">
          {["General", "Branding", "Integrations", "API Keys", "Notifications", "Billing"].map((tab, i) => (
            <button key={tab} className={`px-4 py-2.5 text-[13px] font-medium rounded-lg text-left transition-colors ${i === 0 ? 'bg-white shadow-sm text-slate-900 border border-slate-200' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6">
            <h3 className="text-[15px] font-semibold text-slate-900 mb-6">General Information</h3>
            
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-[12px] font-medium text-slate-700 mb-1.5">Platform Name</label>
                <input type="text" defaultValue="LiftmyGrade Dashboard" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-[13px] outline-none focus:border-blue-500 transition-colors" />
              </div>
              
              <div>
                <label className="block text-[12px] font-medium text-slate-700 mb-1.5">Support Email</label>
                <input type="email" defaultValue="support@liftmygrade.com" className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-[13px] outline-none focus:border-blue-500 transition-colors" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6">
            <h3 className="text-[15px] font-semibold text-slate-900 mb-6">Security & Preferences</h3>
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-medium text-slate-900">Require Two-Factor Authentication</div>
                  <div className="text-[12px] text-slate-500">Enforce 2FA for all admin accounts.</div>
                </div>
                <div className="w-10 h-6 bg-blue-600 rounded-full relative cursor-pointer shadow-inner">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
              
              <div className="h-px bg-slate-100"></div>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[13px] font-medium text-slate-900">Weekly Email Reports</div>
                  <div className="text-[12px] text-slate-500">Receive a summary of metrics every Monday.</div>
                </div>
                <div className="w-10 h-6 bg-slate-200 rounded-full relative cursor-pointer shadow-inner">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
