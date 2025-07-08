import prescriptionImg from "../assets/prescription.jpg";
import onlineConsultationImg from "../assets/online_consultation.jpg";
import homeCareImg from "../assets/home_care.jpg";
import labTestingImg from "../assets/lab_testing.jpg";
import therapyImg from "../assets/therapy.jpg";
import visitsImg from "../assets/visits.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ServiceComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="services-section" id="services">
        <h2>What we offer</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={onlineConsultationImg} alt="Consultation" />
            <h3>Online Consultation</h3>
            <p>
              Connect with doctors via video or chat for quick consultations.
            </p>
          </div>

          <div className="service-card">
            <img src={prescriptionImg} alt="Prescription" />
            <h3>e-Prescriptions</h3>
            <p>
              Receive prescriptions directly from your doctor after
              consultation.
            </p>
          </div>

          <div className="service-card">
            <img src={homeCareImg} alt="Health Tips" />
            <h3>Health Tips</h3>
            <p>Get personalized health tips and advice from our experts.</p>
          </div>

          <div className="service-card">
            <img src={labTestingImg} alt="Lab Testing" />
            <h3>Lab Testing</h3>
            <p>Quick and accurate lab tests for your health needs</p>
          </div>

          <div className="service-card">
            <img src={therapyImg} alt="Mental Health" />
            <h3>Mental Health Support</h3>
            <p>
              Access to mental health professionals for counseling and support.
            </p>
          </div>

          <div className="service-card">
            <img src={visitsImg} alt="Health Records" />
            <h3>Follow Up Visits</h3>
            <p>Book your follow-up visit to monitor your progress.</p>
          </div>
        </div>
      </div>
    </>
  );
}
