import { Outlet } from "react-router-dom";
import Sidebar from "../components/DoctorDash/SideBar"; 

export default function DoctorDashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
