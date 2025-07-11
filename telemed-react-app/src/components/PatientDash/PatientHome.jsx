import React, { useEffect, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaCalendar, FaHeartbeat, FaTemperatureHigh } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { mockPatient } from "../../data";
import { useNavigate } from "react-router-dom";

export default function PatientHome() {
  const patient = mockPatient[0] || {}; 
  const age = new Date().getFullYear() - new Date(patient.dob).getFullYear();

  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  const handleCancel = (index) => {
    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  const handleReschedule = (index) => {
    const newDate = prompt("Enter new date (e.g., 2025-08-01):");
    const newTime = prompt("Enter new time (e.g., 10:00 AM):");

    if (!newDate || !newTime) return;

    const updatedAppointments = [...appointments];
    updatedAppointments[index].date = newDate;
    updatedAppointments[index].time = newTime;
    updatedAppointments[index].status = "Rescheduled";

    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  return (
    <div className="patient-dash-home">
      <div className="main">
        <div className="topbar">
          <input
            type="text"
            className="search-box"
            placeholder="Enter specialty or condition i.e. dermatologist"
          />
          <div className="dash-icons">
            <button
              className="appointment-btn"
              onClick={() => navigate("/patient/appointments")}
            >
              Book an appointment
            </button>
            <a href="#">
              <IoIosNotifications className="dash-pat-icon" />
            </a>
            <a href="#">
              <FaCalendar className="dash-pat-icon" />
            </a>
          </div>
        </div>

        <div className="profile-dash">
          <div className="profile-section">
            <div className="card-dash">
              <img
                src={`https://ui-avatars.com/api/?name=${patient.first_name}+${patient.last_name}`}
                alt="Patient Avatar"
                className="profile-card"
              />
              <p>
                {patient.first_name} {patient.last_name}
                <br />
                Age: {age}
              </p>
              <button className="update">Update</button>
            </div>

            <div className="card">
              <h3>Basic Info</h3>
              <p>
                <span className="info-label">Gender:</span> {patient.gender}
              </p>
              <p>
                <span className="info-label">Bloodtype:</span>{" "}
                {patient.blood_type}
              </p>
              <p>
                <span className="info-label">Allergies:</span>{" "}
                {patient.allergies}
              </p>
              <p>
                <span className="info-label">Diseases:</span> {patient.diseases}
              </p>
              <p>
                <span className="info-label">Height:</span> 1.78m
              </p>
              <p>
                <span className="info-label">Weight:</span> 76 kg
              </p>
              <p>
                <span className="info-label">Patient ID:</span> {patient.id}
              </p>
              <p>
                <span className="info-label">Last Visit:</span> 25th October
                2024
              </p>
            </div>
          </div>

          <div className="section2-patient">
            {/* Vitals */}
            <div className="vitals">
              <div className="vital-card">
                <FaHeartbeat className="vital-icon" />
                <h4>Heart Rate</h4>
                <p>80 bpm</p>
              </div>
              <div className="vital-card">
                <FaTemperatureHigh className="vital-icon" />
                <h4>Body Temperature</h4>
                <p>36.5°C</p>
              </div>
              <div className="vital-card">
                <MdBloodtype className="vital-icon" />
                <h4>Blood Glucose</h4>
                <p>100 mg/dl</p>
              </div>
            </div>

            {/* Appointments */}
            <div className="appointments">
              <h3>Upcoming Appointments</h3>
              {appointments.length > 0 ? (
                <div className="appointments-grid">
                  {appointments.map((appt, index) => (
                    <div className="appointment-card" key={index}>
                      <div className="details">
                        <p>
                          <span className="label">Doctor Name:</span>{" "}
                          {appt.doctor}
                        </p>
                        <p>
                          <span className="label">Date:</span> {appt.date}
                        </p>
                        <p>
                          <span className="label">Specialty:</span>{" "}
                          {appt.specialty}
                        </p>
                        <p>
                          <span className="label">Time:</span> {appt.time}
                        </p>
                        <p>
                          <span className="label">Location:</span>{" "}
                          {appt.location}
                        </p>
                        <p>
                          <span className="label">Status:</span> {appt.status}
                        </p>
                      </div>
                      <div className="appointment-actions">
                        <button
                          onClick={() =>
                            navigate(
                              `/patient/join/${appt.roomName || "consult-room"}`
                            )
                          }
                        >
                          Join
                        </button>
                        <button onClick={() => handleReschedule(index)}>
                          Reschedule
                        </button>
                        <button onClick={() => handleCancel(index)}>
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ opacity: 0.6, fontStyle: "italic" }}>
                  You have no upcoming appointments.
                </p>
              )}
            </div>

            {/* Tips */}
            <div className="tips">
              <h3>Health Tips</h3>
              <div className="tips-grid">
                <div className="tip-card">
                  <div className="healthy-eating">
                    <h3>HEALTHY EATING</h3>
                  </div>
                  <p>
                    Eat more fruits and vegetables to strengthen your immune
                    system and improve overall health.
                  </p>
                  <a href="#">Read more </a>
                </div>
                <div className="tip-card">
                  <div className="stay-hydrated">
                    <h3>STAY HYDRATED</h3>
                  </div>
                  <p>
                    Drink at least 8 glasses of water per day to stay hydrated
                    and support organ function.
                  </p>
                  <a href="#">Read more </a>
                </div>
                <div className="tip-card">
                  <div className="mental">
                    <h3>MENTAL WELL-BEING</h3>
                  </div>
                  <p>
                    Practice mindfulness, meditation, or breathing exercises to
                    reduce stress and improve mental clarity.
                  </p>
                  <a href="#">Read more </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
