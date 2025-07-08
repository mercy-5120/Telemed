import { useNavigate } from "react-router-dom";
export default function RegisterPage() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
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
            <label htmlFor="full-name">Full Name:</label>
            <input type="text" id="full-name" name="full-name" />

            <div className="email-contact-row">
              <div>
                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div>
                <label htmlFor="contact">Contact:</label>
                <input type="text" id="contact" name="contact" />
              </div>
            </div>

            <div className="password-row">
              <div className="password-field">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
              </div>
              <div className="password-field">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                />
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
