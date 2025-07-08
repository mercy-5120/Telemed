import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="Telecure Logo" />
      </div>

      <nav className="nav-links" id="nav-links">
        <ul>
          <li>
            <a href="#home" className="navlinks">
              HOME
            </a>
          </li>
          <li>
            <a href="#about" className="navlinks">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#services" className="navlinks">
              SERVICES
            </a>
          </li>
          <li>
            <a href="#contact" className="navlinks">
              CONTACT
            </a>
          </li>
          <li>
            <button className="login-button" onClick={handleLoginClick}>
              LOGIN
            </button>
          </li>
        </ul>
      </nav>

      <FaBars id="hamburger" />
      <FaTimes id="close" />
    </div>
  );
}
