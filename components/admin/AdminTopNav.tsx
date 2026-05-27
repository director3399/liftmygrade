"use client";

import { useState } from "react";

const navItems = [
  { label: "Overview" },
  { label: "Analytics" },
  { label: "Customers" },
  { label: "Transactions" },
  { label: "Products" },
  { label: "AI Insights" },
  { label: "Reports" },
  { label: "Activity" },
  { label: "Team" },
  { label: "Settings" },
];

interface AdminTopNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function AdminTopNav({ activeTab, setActiveTab }: AdminTopNavProps) {
  return (
    <nav className="bg-[#fdfdfd] pt-4">
      {/* Relative container allowing absolute horizontal center alignment */}
      <div className="relative flex items-center px-6 md:px-10 h-16 bg-[#fdfdfd]">
        {/* Brand - Match landing page logo exactly */}
        <div className="flex items-center gap-3 shrink-0 z-10">
          <div className="text-[20px] font-extrabold text-slate-900 tracking-tighter uppercase">
            LIFT<span className="font-light opacity-75">MYGRADE</span>
          </div>
        </div>

        {/* Centered Nav links */}
        <div className="absolute inset-x-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pointer-events-auto max-w-full px-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`px-3 py-1.5 rounded-lg border-0 cursor-pointer text-[13px] font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === item.label
                    ? "bg-slate-800 text-white shadow-sm"
                    : "text-slate-500 bg-transparent hover:text-slate-900 hover:bg-slate-50"
                }`}
                onClick={() => setActiveTab(item.label)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right side spacer */}
        <div className="ml-auto flex items-center shrink-0 z-10" />
      </div>
    </nav>
  );
}
