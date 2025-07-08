import NavBar from "./LandingPage/NavBar";
import HeroComponent from "./LandingPage/HeroComponent";
import AboutComponent from "./LandingPage/AboutComponent";
import ServiceComponent from "./LandingPage/ServiceComponent";
import ContactComponent from "./LandingPage/ContactComponent";
import Footer from "./LandingPage/Footer";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <NavBar />
      <HeroComponent />
      <AboutComponent />
      <ServiceComponent />
      <ContactComponent />
      <Footer />
    </div>
  );
}
