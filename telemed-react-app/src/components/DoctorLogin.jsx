import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DoctorLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear error message as user types
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Show errors on form
    } else {
      console.log("Doctor login form submitted");
      navigate("/doctor"); // Redirect if valid
    }
  }

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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <div className="error-message">{errors.email}</div>

            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <div className="error-message">{errors.password}</div>

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
