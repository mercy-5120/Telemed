import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { mockPatient } from "../data"; //

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleLoginClick(e) {
    e.preventDefault();

    const matched = mockPatient.find(
      (p) => p.email === formData.email && p.password === formData.password
    );

    if (matched) {
      localStorage.setItem("loggedInPatient", JSON.stringify(matched));
      alert("Login successful!");
      navigate("/patient");
    } else {
      alert("Invalid email or password.");
    }
  }

  return (
    <div className="patient-login">
      <div className="container1">
        <div className="login-box">
          <div className="form-section1">
            <h1>Log In</h1>

            <label htmlFor="email">Email Address:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <br />

            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />

            <div className="options-row">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <button
                className="link-button"
                onClick={() => navigate("/forgot-password")}
              >
                Forgot Password?
              </button>
            </div>

            <button className="login-btn" onClick={handleLoginClick}>
              LOGIN
            </button>

            <div className="extra-links">
              <p>
                New User?{" "}
                <button
                  className="link-button"
                  onClick={() => navigate("/register")}
                >
                  Sign Up
                </button>
              </p>
              <p>
                Are you a doctor?{" "}
                <button
                  className="link-button"
                  onClick={() => navigate("/doctor-login")}
                >
                  Sign in here
                </button>
              </p>
            </div>
          </div>

          <div className="image-section" style={{ position: "relative" }}>
            <img
              src="/images/patient_form.png"
              alt="Patient Form Illustration"
              className="illustration"
            />
            <img src="/images/logo.png" alt="Telecure Logo" className="logo1" />
          </div>
        </div>
      </div>
    </div>
  );
}
