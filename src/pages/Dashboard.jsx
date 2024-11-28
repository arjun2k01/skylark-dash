import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import DashboardStats from "../components/DashboardStats";
import PerformanceChart from "../components/Performance";
import InterviewDetails from "../components/InterviewDetail";
import FollowUpDetails from "../components/FollowUpDetails";

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-4">
        <Header />
        <DashboardStats />
        <PerformanceChart />
        <InterviewDetails />
        <FollowUpDetails />
      </main>
    </div>
  );
}
