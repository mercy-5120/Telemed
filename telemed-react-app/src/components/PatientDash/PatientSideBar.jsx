import { Link } from "react-router-dom";

import {
  FaHome,
  FaRegCalendarCheck,
  FaFileAlt,
  FaBookMedical,
} from "react-icons/fa";
import { MdMessage, MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
export default function PatientSidebar() {
  return (
    <div className="menu-container">
      <div className="sidebar">
        <img src="/images/logo.png" className="logo-dash" alt="Logo" />

        <Link to="/patient">
          <FaHome className="side-pat-icon" />
          Home
        </Link>

        <Link to="/patient/appointments">
          <FaFileAlt className="side-pat-icon" />
          Appointments
        </Link>

        <Link to="/patient/records">
          <FaBookMedical className="side-pat-icon" />
          Medical Records
        </Link>

        <Link to="/patient/messages">
          <MdMessage className="side-pat-icon" />
          Messages
        </Link>

        <Link to="/patient/settings">
          <IoMdSettings className="side-pat-icon" />
          Settings
        </Link>

        <Link to="/login">
          <MdLogout className="side-pat-icon" />
          Log out
        </Link>
      </div>
    </div>
  );
}
