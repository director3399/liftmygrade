import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata = {
  title: "Admin | LiftmyGrade Dashboard",
  description: "LiftmyGrade internal admin overview and analytics dashboard.",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
