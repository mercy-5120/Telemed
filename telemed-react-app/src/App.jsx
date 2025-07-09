import "./App.css";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import DoctorLogin from "./components/DoctorLogin";
import DoctorRegistration from "./components/DoctorRegistration";
import SideBar from "./components/DoctorDash/SideBar";
import DoctorDashboardLayout from "./components/DoctorDash";
import DoctorHome from "./components/DoctorDash/DoctorHome";
import DoctorMessages from "./components/DoctorDash/DoctorMessages";
import DoctorSettings from "./components/DoctorDash/DoctorSettings";
import PatientDashboardLayout from "./components/PatientDashLayout";
import PatientSettings from "./components/PatientDash/PatientSettings";
import PatientHome from "./components/PatientDash/PatientHome";
import PatientMessages from "./components/PatientDash/PatientMessages";
import AppointmentsPage from "./components/Appointments";
import BookAppointment from "./components/PatientDash/BookAppointment";
import JitsiMeeting from "./components/PatientDash/JitsiMeeting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctor-registration" element={<DoctorRegistration />} />
        <Route path="/doctor" element={<DoctorDashboardLayout />}>
          <Route index element={<DoctorHome />} />
          <Route path="messages" element={<DoctorMessages />} />
          <Route path="settings" element={<DoctorSettings />}></Route>
        </Route>
        <Route path="/patient" element={<PatientDashboardLayout />}>
          <Route index element={<PatientHome />}></Route>

          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="messages" element={<PatientMessages />} />
          <Route path="settings" element={<PatientSettings />} />
          <Route path="book-appointment/:id" element={<BookAppointment />} />
          <Route path="join/:roomName" element={<JitsiMeeting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
