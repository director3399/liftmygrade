"use client";

import { useState } from "react";
import AdminTopNav from "./AdminTopNav";
import OverviewHeader from "./OverviewHeader";
import PaymentsChart from "./PaymentsChart";
import RetentionChart from "./RetentionChart";
import TransactionsPanel from "./TransactionsPanel";
import GrossVolumeSidebar, { InsightsCard } from "./GrossVolumeSidebar";

import AnalyticsTab from "./AnalyticsTab";
import CustomersTab from "./CustomersTab";
import TransactionsTab from "./TransactionsTab";
import ProductsTab from "./ProductsTab";
import AIInsightsTab from "./AIInsightsTab";
import ReportsTab from "./ReportsTab";
import ActivityTab from "./ActivityTab";
import TeamTab from "./TeamTab";
import SettingsTab from "./SettingsTab";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111111] font-sans pb-12">
      <AdminTopNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main container spanning full bleed width */}
      <div className="px-6 md:px-10 py-8 flex flex-col gap-6">
        {activeTab === "Overview" && <OverviewHeader />}

        {activeTab === "Overview" && (
          <>
            {/* Top Row: Payments (70%) + Gross Volume (30%) */}
            <div className="flex flex-col lg:flex-row gap-6 items-stretch">
              <div className="lg:w-[70%] flex flex-col min-w-0">
                <PaymentsChart />
              </div>
              <div className="lg:w-[30%] flex flex-col min-w-0">
                <GrossVolumeSidebar />
              </div>
            </div>

            {/* Bottom Row: 3 Columns aligning Retention, Transactions (+ Activity), and Insights perfectly */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
              {/* Column 1: Stepped Retention Curve (Tall Card) */}
              <div className="flex flex-col h-full">
                <RetentionChart />
              </div>

              {/* Column 2: Transactions (Short Card) + Live Activity Card (Bottom outline match) */}
              <div className="flex flex-col gap-6 h-full justify-between">
                <TransactionsPanel />
                
                {/* Live Activity Card - Completing the center column space elegantly */}
                <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-slate-100 p-6 grow flex flex-col justify-between min-h-[154px]">
                  <div>
                    <h3 className="text-[13px] font-semibold text-slate-800 mb-3">Live Feed</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[12px]">
                        <span className="text-slate-500 font-medium">Research Support Plan</span>
                        <span className="text-emerald-600 font-bold">₹42,000</span>
                      </div>
                      <div className="flex items-center justify-between text-[12px]">
                        <span className="text-slate-500 font-medium">IELTS Mentorship Program</span>
                        <span className="text-emerald-600 font-bold">₹28,500</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-[12px] text-blue-600 font-semibold cursor-pointer hover:underline mt-4">
                    View all feed →
                  </div>
                </div>
              </div>

              {/* Column 3: Insights Card (Tall Card) */}
              <div className="flex flex-col h-full">
                <InsightsCard />
              </div>
            </div>
          </>
        )}

        {activeTab === "Analytics" && <AnalyticsTab />}
        {activeTab === "Customers" && <CustomersTab />}
        {activeTab === "Transactions" && <TransactionsTab />}
        {activeTab === "Products" && <ProductsTab />}
        {activeTab === "AI Insights" && <AIInsightsTab />}
        {activeTab === "Reports" && <ReportsTab />}
        {activeTab === "Activity" && <ActivityTab />}
        {activeTab === "Team" && <TeamTab />}
        {activeTab === "Settings" && <SettingsTab />}
      </div>
    </div>
  );
}
