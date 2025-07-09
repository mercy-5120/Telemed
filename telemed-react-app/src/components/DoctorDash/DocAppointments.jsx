import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaFileAlt, FaMoneyBill } from "react-icons/fa";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState(null); // Store the whole doctor object
  const [doctorName, setDoctorName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Load appointments
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);

    // Load doctor from localStorage
    const storedDoctor = JSON.parse(localStorage.getItem("loggedInDoctor"));
    if (storedDoctor) {
      setDoctor(storedDoctor); // Save the full doctor object
      setDoctorName(storedDoctor.name || storedDoctor.first_name); // Optional
    }
  }, []);

  const calculateTotalIncome = () => {
    if (!doctor || !doctor.fee) return 0;

    const fee = parseInt(doctor.fee.replace("KES", "").trim(), 10); // Remove "KES"
    return appointments.length * fee;
  };

  return (
    <div className="main-cont-doc">
      <section className="doc-appoint">
        <h2>Welcome, Dr. {doctorName}</h2>
        <p>Have a nice day</p>

        <div className="summary-cards">
          <div>
            <h3>{appointments.length}</h3>
            <FaCircleUser />
            <p>Total patients</p>
          </div>
          <div>
            <h3>{appointments.length}</h3>
            <FaFileAlt />
            <p>Total appointments</p>
          </div>
          <div>
            <h3>${calculateTotalIncome().toLocaleString()}</h3>
            <FaMoneyBill />
            <p>Total income</p>
          </div>
        </div>
      </section>

      <section className="doc-appoint">
        <h3>Appointments</h3>
        {appointments.length === 0 ? (
          <p>No appointments yet.</p>
        ) : (
          <table border="1">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={index}>
                  <td>{appointment.patient}</td>
                  <td>{appointment.date}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.location}</td>
                  <td className="table-actions">
                    <button>Join</button>
                    <button>Reschedule</button>
                    <button>Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section className="doc-appoint">
        <h3>Appointment Requests</h3>
        <div>
          <p>No new requests.</p>
        </div>
      </section>
    </div>
  );
}
