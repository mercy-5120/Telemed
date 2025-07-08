import { Outlet } from "react-router-dom";
import PatientSidebar from "./PatientDash/PatientSideBar";

export default function PatientDashboardLayout() {
  return (
    <div className="dashboard-layout">
      <PatientSidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}
