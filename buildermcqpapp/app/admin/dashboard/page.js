import NavBarLinks from "@/components/admin-nav-bar/admin-nav-bar";
import ExamScheduler from "@/components/exam-scheduler/exam-scheduler";
import { getTechnologies } from "@/lib/technology"; 
export default async function AdminDashboard() {
  const technologiesData = await getTechnologies();
  return (
    <div className="min-h-screen">
      <NavBarLinks />
      <ExamScheduler technologiesData={technologiesData}/>
    </div>
  );
}
