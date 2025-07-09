import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear errors as user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactPattern = /^[0-9]{10,15}$/;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required.";
    } else if (!contactPattern.test(formData.contact)) {
      newErrors.contact = "Contact must be 10–12 digits.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    return newErrors;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form submitted:", formData);
    navigate("/login");
  }

  return (
      <div className="patient-signup">
        <div className="container-patient">
          {/* Image section */}
          <div className="image-section-patient">
            <img
                src="/images/patient_form.png"
                alt="Patient Form Illustration"
                className="illustration"
            />
          </div>

          {/* Form section */}
          <div className="form-section">
            <img src="/images/logo.png" alt="Telecure Logo" className="logo2" />
            <h2>Sign Up</h2>

            <form onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full Name:</label>
              <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
              />
              <div className="error-message">{errors.fullName}</div>

              <div className="email-contact-row">
                <div>
                  <label htmlFor="email">Email Address:</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />
                  <div className="error-message">{errors.email}</div>
                </div>
                <div>
                  <label htmlFor="contact">Contact:</label>
                  <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                  />
                  <div className="error-message">{errors.contact}</div>
                </div>
              </div>

              <div className="password-row">
                <div className="password-field">
                  <label htmlFor="password">Password:</label>
                  <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                  />
                  <div className="error-message">{errors.password}</div>
                </div>
                <div className="password-field">
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                  />
                  <div className="error-message">{errors.confirmPassword}</div>
                </div>
              </div>

              <button type="submit">SIGN UP</button>
            </form>

            <p className="disclaimer">
              By continuing, I confirm that I am over 18 years old and agree to
              Telecure's <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
            </p>

            <div className="links">
              Have an account?{" "}
              <button className="link-button2" onClick={() => navigate("/login")}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}
