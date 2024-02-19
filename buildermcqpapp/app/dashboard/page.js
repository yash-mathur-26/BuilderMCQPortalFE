import NavBarLinks from "@/components/user-nav-bar/user-nav-bar";
import UserExamDashboard from "@/components/user-exam-dashboard/user-exam-dashboard";
export default async function ExpertDashboard() {
  return (
    <div className="min-h-screen">
      <NavBarLinks />
      <UserExamDashboard />
    </div>
  );
}
