import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="social-media">
          <img src={logo} alt="Telecure Logo" className="footer-logo" />
          <p>Bringing Doctors Closer to You</p>
          <h4>SOCIAL LINKS</h4>
          <div className="social-icons">
            <a href="#" className="social-link">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <FaFacebook className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <FaWhatsapp className="social-icon" />
            </a>
          </div>
          <a href="patientsignup.html">
            <button class="join">JOIN US TODAY</button>
          </a>
        </div>

        <div className="others-3">
          <div className="contlinks">
            <div className="quick-links">
              <h4>QUICK LINKS</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="patientlogin.html">Login</a>
                </li>
              </ul>
            </div>
            <div className="contact-details">
              <h4>CONTACT DETAILS</h4>
              <div className="detail">
                <FaPhone className="icon-details" />
                <p>0712345678</p>
              </div>
              <div className="detail">
                <FaEnvelope className="icon-details" />
                <p>info@telecure.org</p>
              </div>
            </div>
          </div>

          <div className="subscribe">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p>
              Stay updated with the latest health tips and news from Telecure.
            </p>
            <form id="subscribe-form">
              <input
                type="email"
                id="subscribe-email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}
