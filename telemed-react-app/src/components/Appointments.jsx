import React from "react";
import { doctors } from "../data";
import { Link } from "react-router-dom";

export default function AppointmentsPage() {
  return (
    <div className="appointments-page">
      <h2 className="title">FIND YOUR DOCTOR</h2>
      <div className="doctor-cards-grid">
        {doctors.map((doc) => (
          <div className="doctor-card" key={doc.id}>
            <img
              src={`https://ui-avatars.com/api/?name=${doc.first_name}+${doc.last_name}`}
              alt={`${doc.first_name} ${doc.last_name}`}
              className="doctor-avatar"
            />
            <h3>
              Dr. {doc.first_name} {doc.last_name}
            </h3>
            <p>
              <strong>Specialization:</strong> {doc.specialization}
            </p>
            <p>
              <strong>Experience:</strong> {doc.experience} years
            </p>
            <p>
              <strong>Hospital:</strong> {doc.hospital}
            </p>
            <p>
              <strong>Fee:</strong> {doc.fee}
            </p>
            <Link
              to={`/patient/book-appointment/${doc.id}`}
              className="book-btn"
            >
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
