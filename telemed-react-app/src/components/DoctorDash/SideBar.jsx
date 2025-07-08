import { NavLink } from "react-router-dom";
import { FaHome, FaRegCalendarCheck, FaFileAlt } from "react-icons/fa";
import { MdMessage, MdLogout } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

export default function SideBar() {
  return (
    <nav className="side-doctor">
      <div className="side-doc-logo">
        <img src="/images/logo.png" alt="Telecure Logo" />
      </div>

      <NavLink
        to="/doctor"
        className={({ isActive }) =>
          isActive ? "side-doc-icons active" : "side-doc-icons"
        }
      >
        <FaHome className="side-doc-icon" />
        <span className="nav-label">Home</span>
      </NavLink>

      <NavLink
        to="/doctor/appointments"
        className={({ isActive }) =>
          isActive ? "side-doc-icons active" : "side-doc-icons"
        }
      >
        <FaRegCalendarCheck className="side-doc-icon" />
        <span className="nav-label">Appointments</span>
      </NavLink>

      <NavLink
        to="/doctor/records"
        className={({ isActive }) =>
          isActive ? "side-doc-icons active" : "side-doc-icons"
        }
      >
        <FaFileAlt className="side-doc-icon" />
        <span className="nav-label">Records</span>
      </NavLink>

      <NavLink
        to="/doctor/messages"
        className={({ isActive }) =>
          isActive ? "side-doc-icons active" : "side-doc-icons"
        }
      >
        <MdMessage className="side-doc-icon" />
        <span className="nav-label">Messages</span>
      </NavLink>

      <NavLink
        to="/doctor/settings"
        className={({ isActive }) =>
          isActive ? "side-doc-icons active" : "side-doc-icons"
        }
      >
        <IoMdSettings className="side-doc-icon" />
        <span className="nav-label">Settings</span>
      </NavLink>

      <NavLink to="/" className="side-doc-icons log-icon">
        <MdLogout className="side-doc-icon" />
        <span className="nav-label"> Log Out</span>
      </NavLink>
    </nav>
  );
}
