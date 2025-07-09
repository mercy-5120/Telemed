import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaFileAlt, FaMoneyBill } from "react-icons/fa";

export default function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState(null);
  const [doctorName, setDoctorName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);

    const storedDoctor = JSON.parse(localStorage.getItem("loggedInDoctor"));
    if (storedDoctor) {
      setDoctor(storedDoctor);
      setDoctorName(storedDoctor.name || storedDoctor.first_name);
    }
  }, []);

  const calculateTotalIncome = () => {
    if (!doctor || !doctor.fee) return 0;
    const fee = parseInt(doctor.fee.replace("KES", "").trim(), 10);
    return appointments.length * fee;
  };

  const handleCancel = (index) => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );
    if (!confirmed) return;

    const updatedAppointments = appointments.filter((_, i) => i !== index);
    setAppointments(updatedAppointments);
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
  };

  return (
    <div className="main-cont-doc">
      <section className="doc-appoint">
        <h2>Welcome, Dr. {doctorName}</h2>
        <p>Have a nice day</p>

        <div className="summary-cards">
          <div>
            <FaCircleUser className="summary-icon" />
            <h3>{appointments.length}</h3>

            <p>Total patients</p>
          </div>
          <div>
            <FaFileAlt className="summary-icon" />
            <h3>{appointments.length}</h3>

            <p>Total appointments</p>
          </div>
          <div>
            <FaMoneyBill className="summary-icon" />
            <h3>${calculateTotalIncome().toLocaleString()}</h3>

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
                    <button
                      onClick={() =>
                        navigate(
                          `/doctor/join/${
                            appointment.roomName || "consult-room"
                          }`
                        )
                      }
                    >
                      Join
                    </button>
                    <button onClick={() => handleCancel(index)}>Cancel</button>
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
