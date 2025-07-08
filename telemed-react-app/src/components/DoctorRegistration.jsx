import { useNavigate } from "react-router-dom";

export default function DoctorRegistration() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Doctor registration submitted");
    navigate("/doctor-login"); // redirect after registration
  }

  return (
    <div className="background">
      {/* Logo top-left */}
      <img
        src="/images/logo.png"
        alt="Telecure Logo"
        className="logo-top-left"
      />

      {/* Registration Card */}
      <div className="register-card">
        <img
          src="/images/register.png"
          alt="Doctor Registration"
          className="register-image"
        />
        <h2>REGISTER YOUR CREDENTIALS</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="Name">
              Name
              <input type="text" placeholder="Name" required />
            </label>
            <label htmlFor="Emaill">
              Email
              <input type="email" placeholder="Email" required />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="Contact">
              Contact
              <input type="text" placeholder="Contact" required />
            </label>
            <label htmlFor="Password">
              Password
              <input type="password" placeholder="Password" required />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="License">
              License
              <input
                type="text"
                placeholder="Medical License Number"
                required
              />
            </label>
            <label htmlFor="Specialization">
              Specialization
              <input type="text" placeholder="Specialization" required />
            </label>
          </div>
          <div className="form-row">
            <label htmlFor="Experience">
              Experience
              <input type="text" placeholder="Years of Experience" required />
            </label>
            <label htmlFor="Medical">
              Upload Medical License
              <input type="file" required />
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
            >
              Sign in
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
