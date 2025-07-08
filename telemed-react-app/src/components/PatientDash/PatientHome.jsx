import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { FaCalendar, FaHeartbeat, FaTemperatureHigh } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";

export default function PatientHome() {
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
            <button className="appointment-btn">Book an appointment</button>
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
              <div className="profile-card"></div>
              <p>
                User Name
                <br />
                Age: 40
              </p>
              <button className="update">Update</button>
            </div>

            <div className="card">
              <h3>Basic Info</h3>
              <p>
                <span className="info-label">Gender:</span> Male
              </p>
              <p>
                <span className="info-label">Bloodtype:</span> O+ (Positive)
              </p>
              <p>
                <span className="info-label">Allergies:</span> Milk, Eggs
              </p>
              <p>
                <span className="info-label">Diseases:</span> Diabetes, Blood
                Pressure
              </p>
              <p>
                <span className="info-label">Height:</span> 1.98m
              </p>
              <p>
                <span className="info-label">Weight:</span> 89 kg
              </p>
              <p>
                <span className="info-label">Patient ID:</span> 190293893
              </p>
              <p>
                <span className="info-label">Last Visit:</span> 25th October
                2024
              </p>
            </div>
          </div>

          <div className="section2-patient">
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

            <div className="appointments">
              <h3>Upcoming Appointments</h3>
              <div className="appointments-grid">
                <div className="appointment-card">
                  <div className="details">
                    <p>
                      <span className="label">Doctor Name:</span> John Doe
                    </p>
                    <p>
                      <span className="label">Date:</span> 12/06/2025
                    </p>
                    <p>
                      <span className="label">Specialty:</span> Dermatology
                    </p>
                    <p>
                      <span className="label">Time:</span> 9:00 a.m
                    </p>
                    <p>
                      <span className="label">Location:</span> Virtual
                    </p>
                    <p>
                      <span className="label">Status:</span> Booked
                    </p>
                  </div>
                  <div className="appointment-actions">
                    <button>Join</button>
                    <button>Reschedule</button>
                    <button>Cancel</button>
                  </div>
                </div>
              </div>
            </div>

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
