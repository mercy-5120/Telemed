import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function HeroComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="hero-section" id="home">
        <div className="msg-container">
          <h6>Welcome to Telecure</h6>
          <p className="main-hero">
            Quality <span>healthcare</span>, <span>anytime</span> anywhere
          </p>
          <p className="description">
            Connect with certified doctors online for fast, secure, and
            personalized medical care.
          </p>

          <a href="patientlogin.html" className="cta-button">
            <button class="book-btn">Book Consultation</button>
          </a>
        </div>
      </div>
    </>
  );
}
