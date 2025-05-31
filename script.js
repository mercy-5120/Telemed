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
    if (window.innerWidth > 1024) {
      navMenu.classList.remove("active");
    }
  });
});
