import React from "react";
import {
  FaSearch,
  FaBell,
  FaCalendar,
  FaCheck,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";

export default function DoctorHome() {
  return (
    <div className="main-content-doc-dash">
      {/* Header */}
      <div className="header">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search for patients..." />
        </div>
        <div className="header-right">
          <button className="appointment-docdash-btn">Appointments</button>
          <a href="#" className="notification">
            <FaBell />
          </a>
          <a href="#" className="calendar">
            <FaCalendar />
          </a>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1>Hello Dr. John Doe</h1>
      </div>

      {/* Dashboard Content */}
      <div className="dashboard-content">
        {/* Appointment Requests */}
        <div className="appointments-section">
          <div className="appointment-requests">
            <h3>Appointment Request</h3>
            <ul className="patient-list">
              {["Mary John", "John Doe", "Mike Bris", "Sally Doe"].map(
                (name, i) => (
                  <li key={i}>
                    <div className="patient-avatar"></div>
                    <div className="patient-info">
                      <h4>{name}</h4>
                      <p>
                        Scheduled:{" "}
                        <span>
                          {["09:00 AM", "10:30 AM", "11:45 AM", "02:15 PM"][i]}
                        </span>
                      </p>
                    </div>
                    <div className="action-buttons">
                      <button className="accept">
                        <FaCheck />
                      </button>
                      <button className="reject">
                        <FaTimes />
                      </button>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Appointments */}
          <div className="appointments">
            <h3>Appointment</h3>
            <ul className="patient-list">
              {[1, 2, 3, 4].map((_, i) => (
                <li key={i}>
                  <div className="patient-avatar"></div>
                  <div className="patient-info">
                    <h4>John Doe</h4>
                    <p>
                      Scheduled:{" "}
                      <span>
                        {["09:00 AM", "10:30 AM", "11:45 AM", "02:15 PM"][i]}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Doctor Info */}
          <div className="doctor-info">
            <h3>Dr. John Doe</h3>
            <p>Dermatologist, Acne Specialist</p>

            <div className="stats">
              <div className="stat-box">
                <h2>2021</h2>
                <p>Appointments</p>
              </div>
              <div className="stat-box">
                <h2>3500</h2>
                <p>Total Patients</p>
              </div>
            </div>

            <div className="stats">
              <div className="stat-box">
                <h2>12021</h2>
                <p>Consultations</p>
              </div>
              <div className="stat-box">
                <h2>2721</h2>
                <p>Return Patients</p>
              </div>
            </div>

            <div className="quick-actions">
              <div className="action-box red">
                <h2>18</h2>
                <p>New Appointments</p>
                <FaCalendar />
              </div>
              <div className="action-box white">
                <h2>7</h2>
                <p>New Messages</p>
                <FaEnvelope />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Patients Table */}
        <div className="recent-patients">
          <h3>Recent Patients</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Weight</th>
                <th>Disease</th>
                <th>Date</th>
                <th>Heart Rate</th>
                <th>Blood Type</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4].map((_, i) => (
                <tr key={i}>
                  <td>
                    <div className="patient-row">
                      <div className="patient-avatar small"></div>
                      <span>John Doe</span>
                    </div>
                  </td>
                  <td>Male</td>
                  <td>86 kg</td>
                  <td>Eczema</td>
                  <td>29 Jun</td>
                  <td>87 bpm</td>
                  <td>AB</td>
                  <td>
                    <span className="status outpatient">Outpatient</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
