import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DoctorRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    license: "",
    specialization: "",
    experience: "",
    licenseFile: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactPattern = /^[0-9]{10,15}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact is required.";
    } else if (!contactPattern.test(formData.contact)) {
      newErrors.contact = "Contact must be 10–15 digits.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (!formData.license.trim()) newErrors.license = "License is required.";
    if (!formData.specialization.trim())
      newErrors.specialization = "Specialization is required.";
    if (!formData.experience.trim()) {
      newErrors.experience = "Experience is required.";
    } else if (isNaN(formData.experience)) {
      newErrors.experience = "Experience must be a number.";
    }
    if (!formData.licenseFile) {
      newErrors.licenseFile = "Medical license file is required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Doctor registration submitted:", formData);
    navigate("/doctor-login");
  };

  return (
      <div className="background">
        <img
            src="/images/logo.png"
            alt="Telecure Logo"
            className="logo-top-left"
        />

        <div className="register-card">
          <img
              src="/images/register.png"
              alt="Doctor Registration"
              className="register-image"
          />
          <h2>REGISTER YOUR CREDENTIALS</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <div className="error-message">{errors.name}</div>
              </label>

              <label>
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <div className="error-message">{errors.email}</div>
              </label>
            </div>

            <div className="form-row">
              <label>
                Contact
                <input
                    type="text"
                    name="contact"
                    placeholder="Contact"
                    value={formData.contact}
                    onChange={handleChange}
                />
                <div className="error-message">{errors.contact}</div>
              </label>

              <label>
                Password
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <div className="error-message">{errors.password}</div>
              </label>
            </div>

            <div className="form-row">
              <label>
                License
                <input
                    type="text"
                    name="license"
                    placeholder="Medical License Number"
                    value={formData.license}
                    onChange={handleChange}
                />
                <div className="error-message">{errors.license}</div>
              </label>

              <label>
                Specialization
                <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                />
                <div className="error-message">{errors.specialization}</div>
              </label>
            </div>

            <div className="form-row">
              <label>
                Experience
                <input
                    type="text"
                    name="experience"
                    placeholder="Years of Experience"
                    value={formData.experience}
                    onChange={handleChange}
                />
                <div className="error-message">{errors.experience}</div>
              </label>

              <label>
                Upload Medical License
                <input
                    type="file"
                    name="licenseFile"
                    onChange={handleChange}
                />
                <div className="error-message">{errors.licenseFile}</div>
              </label>
            </div>

            <button type="submit" className="btn register-btn">
              REGISTER
            </button>

            <p className="note">
              By proceeding, I confirm that the information provided is true and
              agree to Telecure’s Terms and Conditions.
            </p>

            <p className="switch-login">
              Already a member?{" "}
              <button
                  className="link-button"
                  onClick={() => navigate("/doctor-login")}
                  type="button"
              >
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
  );
}
