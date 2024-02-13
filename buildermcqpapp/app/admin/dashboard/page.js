import NavBarLinks from "@/components/admin-nav-bar/admin-nav-bar";
import ExamScheduler from "@/components/exam-scheduler/exam-scheduler";
export default function AdminDashboard() {
  return (
    <div className="min-h-screen">
      <NavBarLinks />
      <ExamScheduler />
    </div>
  );
}
