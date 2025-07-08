import {
  FaShieldVirus,
  FaHeadset,
  FaHeartbeat,
  FaIdBadge,
} from "react-icons/fa";
import aboutImg from "../assets/about.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function AboutComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="about-section" id="about">
        <div className="about-img">
          <img src={aboutImg} alt="About Telecure" />
        </div>

        <div className="about-content">
          <h2>Why Choose Us?</h2>
          <p>
            TeleCure is a digital health platform that connects patients with
            certified doctors for fast, personalized, and secure medical
            consultations. Our mission is to make quality healthcare accessible
            — anytime, anywhere.
          </p>
          <div className="abouts">
            <FaHeadset className="icon" />
            <div className="about-head">
              <h3>24/7 ACCESS</h3>
              <p>
                Our team is available around the clock to assist you with any
                queries or concerns.
              </p>
            </div>
          </div>

          <div className="abouts">
            <FaHeartbeat className="icon" />
            <div className="about-head">
              <h3>AFFORDABLE CARE</h3>
              <p>Quality treatment at fair price.</p>
            </div>
          </div>

          <div className="abouts">
            <FaIdBadge className="icon" />
            <div className="about-head">
              <h3>LICENSED PROFESSIONALS</h3>
              <p>
                All our doctors are certified and experienced in their
                respective fields.
              </p>
            </div>
          </div>

          <div className="abouts">
            <FaShieldVirus className="icon" />
            <div className="about-head">
              <h3>DATA PRIVACY</h3>
              <p>
                Your health information is protected with the highest standards
                of security and privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
