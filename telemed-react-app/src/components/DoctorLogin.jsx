// src/components/DoctorLogin.jsx

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { doctors } from "../data";

export default function DoctorLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundDoctor = doctors.find(
      (doc) =>
        doc.email === formData.email && doc.password === formData.password
    );

    if (foundDoctor) {
      localStorage.setItem("loggedInDoctor", JSON.stringify(foundDoctor));
      alert("Login successful!");
      navigate("/doctor");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="background1">
      {/* Top Right Logo */}
      <img src="/images/logo.png" alt="Telecure Logo" className="logo-doctor" />

      {/* Login Card */}
      <div className="login-card">
        <img
          src="/images/login.png"
          alt="Doctor Login"
          className="login-icon"
        />
        <h2>ENTER YOUR CREDENTIALS</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit" className="btn login-btn">
            LOGIN
          </button>
        </form>

        <p className="account">
          Don't have an account?{" "}
          <button
            className="link-button"
            onClick={() => navigate("/doctor-registration")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
