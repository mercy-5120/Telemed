import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Doctor login form submitted");
    navigate("/doctor"); // Redirect to doctor dashboard or home page
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
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />

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
