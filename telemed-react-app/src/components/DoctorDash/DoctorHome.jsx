import React, { useEffect, useState } from "react";
import {
  FaSearch,
  FaBell,
  FaCalendar,
  FaCheck,
  FaTimes,
  FaEnvelope,
} from "react-icons/fa";

export default function DoctorHome() {
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const loggedInDoctor = JSON.parse(localStorage.getItem("loggedInDoctor"));
    setDoctor(loggedInDoctor);

    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const myAppointments = storedAppointments.filter(
      (appt) => appt.doctorId === loggedInDoctor?.id
    );
    setAppointments(myAppointments);
  }, []);

  const updateAppointmentStatus = (id, status) => {
    const all = JSON.parse(localStorage.getItem("appointments")) || [];
    const updated = all.map((appt) =>
      appt.id === id ? { ...appt, status } : appt
    );
    localStorage.setItem("appointments", JSON.stringify(updated));
    const myAppointments = updated.filter(
      (appt) => appt.doctorId === doctor?.id
    );
    setAppointments(myAppointments);
  };

  const pending = appointments.filter((appt) => appt.status === "pending");
  const approved = appointments.filter((appt) => appt.status === "approved");
  const patientCount = new Set(approved.map((a) => a.patientId)).size;

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

      {/* Welcome */}
      <div className="welcome-banner">
        <h1>
          Hello Dr. {doctor?.first_name} {doctor?.last_name}
        </h1>
      </div>

      {/* Dashboard */}
      <div className="dashboard-content">
        <div className="appointments-section">
          {/* Requests */}
          <div className="appointment-requests">
            <h3>Appointment Requests</h3>
            {pending.length === 0 ? (
              <p>No pending requests.</p>
            ) : (
              <ul className="patient-list">
                {pending.map((appt) => (
                  <li key={appt.id}>
                    <div className="patient-avatar"></div>
                    <div className="patient-info">
                      <h4>{appt.patient}</h4>
                      <p>
                        Scheduled: <span>{appt.time}</span>
                      </p>
                    </div>
                    <div className="action-buttons">
                      <button
                        className="accept"
                        onClick={() =>
                          updateAppointmentStatus(appt.id, "approved")
                        }
                      >
                        <FaCheck />
                      </button>
                      <button
                        className="reject"
                        onClick={() =>
                          updateAppointmentStatus(appt.id, "declined")
                        }
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Approved Appointments */}
          <div className="appointments">
            <h3>Appointments</h3>
            {approved.length === 0 ? (
              <p>No upcoming appointments.</p>
            ) : (
              <ul className="patient-list">
                {approved.map((appt) => (
                  <li key={appt.id}>
                    <div className="patient-avatar"></div>
                    <div className="patient-info">
                      <h4>{appt.patient}</h4>
                      <p>
                        Scheduled: <span>{appt.time}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Doctor Stats */}
          <div className="doctor-info">
            <h3>
              Dr. {doctor?.first_name} {doctor?.last_name}
            </h3>
            <p>{doctor?.specialty || "General Practitioner"}</p>

            <div className="stats">
              <div className="stat-box">
                <h2>{appointments.length}</h2>
                <p>Appointments</p>
              </div>
              <div className="stat-box">
                <h2>{patientCount}</h2>
                <p>Patients</p>
              </div>
            </div>

            <div className="stats">
              <div className="stat-box">
                <h2>12</h2>
                <p>Consultations</p>
              </div>
              <div className="stat-box">
                <h2>4</h2>
                <p>Return Patients</p>
              </div>
            </div>

            <div className="quick-actions">
              <div className="action-box red">
                <h2>{pending.length}</h2>
                <p>New Appointments</p>
                <FaCalendar />
              </div>
              <div className="action-box white">
                <h2>0</h2>
                <p>New Messages</p>
                <FaEnvelope />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Patients Table - You can hook this up later dynamically */}
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
              {/* Can be updated later from real patient data */}
              {[1, 2, 3].map((_, i) => (
                <tr key={i}>
                  <td>
                    <div className="patient-row">
                      <div className="patient-avatar small"></div>
                      <span>John Doe</span>
                    </div>
                  </td>
                  <td>Male</td>
                  <td>75 kg</td>
                  <td>Flu</td>
                  <td>5 Jul</td>
                  <td>85 bpm</td>
                  <td>A+</td>
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
