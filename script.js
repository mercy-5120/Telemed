const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("show");
  hamburger.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("show");
  hamburger.style.display = "block";
  closeIcon.style.display = "none";
});

document.querySelectorAll(".navlinks").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    hamburger.style.display = "block";
    closeIcon.style.display = "none";
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1289) {
      navMenu.classList.remove("active");
    }
  });
});

function startMeeting() {
  const domain = "meet.jit.si";
  const options = {
    roomName: "DrJohnDoeConsultationRoom2025", // Must be unique
    width: "100%",
    height: 600,
    parentNode: document.querySelector('#jitsi-container'),
    userInfo: {
      displayName: "Dr. John Doe"
    }
  };

  const api = new JitsiMeetExternalAPI(domain, options);
}

