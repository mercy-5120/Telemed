// src/components/BookAppointment.jsx

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../../data";

export default function BookAppointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  const [loggedInPatient, setLoggedInPatient] = useState(null);

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    method: "Virtual",
  });

  useEffect(() => {
    const patient = JSON.parse(localStorage.getItem("loggedInPatient"));
    if (!patient) {
      alert("You must be logged in as a patient to book an appointment.");
      navigate("/login");
    } else {
      setLoggedInPatient(patient);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      id: Date.now(), // unique ID
      doctorId: doctor.id,
      patientId: loggedInPatient?.id,
      patient: `${loggedInPatient.first_name} ${loggedInPatient.last_name}`,
      doctor: `Dr. ${doctor.first_name} ${doctor.last_name}`,
      date: formData.date,
      time: formData.time,
      specialty: doctor.specialization,
      location: formData.method === "Virtual" ? "Virtual" : doctor.hospital,
      status: "pending",
    };

    const existingAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    existingAppointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(existingAppointments));

    alert(
      `Appointment booked with Dr. ${doctor.first_name} on ${formData.date} at ${formData.time}`
    );

    navigate("/patient");
  };

  return (
    <div className="book-appointment-page">
      <h2>
        Book Appointment with Dr. {doctor.first_name} {doctor.last_name}
      </h2>
      <div className="doctor-summary">
        <img
          src={`https://ui-avatars.com/api/?name=${doctor.first_name}+${doctor.last_name}`}
          alt={`${doctor.first_name}`}
          className="doctor-avatar"
        />
        <p>
          <strong>Specialty:</strong> {doctor.specialization}
        </p>
        <p>
          <strong>Experience:</strong> {doctor.experience} years
        </p>
        <p>
          <strong>Hospital:</strong> {doctor.hospital}
        </p>
        <p>
          <strong>Consultation Fee:</strong> {doctor.fee}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Consultation Method:
          <select name="method" value={formData.method} onChange={handleChange}>
            <option value="Virtual">Virtual</option>
            <option value="In-Person">In-Person</option>
          </select>
        </label>

        <button type="submit" className="book-btn">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}
