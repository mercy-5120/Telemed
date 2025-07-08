import contactImg from "../assets/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ContactComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="contact-section" id="contact">
        <div className="form-container">
          <form id="contactform">
            <p>DON'T BE SHY!</p>
            <label for="name">Your Name</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Share your thoughts</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
        <div className="cont-img">
          <img src={contactImg} alt="Contact Us" />
        </div>
      </div>
    </>
  );
}
