gsap.registerPlugin(ScrollTrigger);

/* Cursor Logic */
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const hoverables = document.querySelectorAll(
  "a, .skill-tag, .logo, .menu-btn, .menu-link, .project-card"
);
hoverables.forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
});

/* Menu */
const menuBtn = document.querySelector(".menu-btn");
const menuOverlay = document.querySelector(".menu-overlay");
const menuLinks = document.querySelectorAll(".menu-link");
let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    gsap.to(menuOverlay, {
      y: "0%",
      duration: 0.8,
      ease: "power4.inOut",
    });
    gsap.from(menuLinks, { y: 50, opacity: 0, delay: 0.5, stagger: 0.1 });
    menuBtn.textContent = "CLOSE";
  } else {
    gsap.to(menuOverlay, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
    });
    menuBtn.textContent = "MENU";
    menuBtn.style.color = "#ffffff";
  }
  isMenuOpen = !isMenuOpen;
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    gsap.to(menuOverlay, {
      y: "-100%",
      duration: 0.8,
      ease: "power4.inOut",
    });
    menuBtn.textContent = "MENU";
    menuBtn.style.color = "#ffffff";
    isMenuOpen = false;
  });
});

/* Animations */
gsap.from(".reveal-text", {
  y: 100,
  opacity: 0,
  duration: 1.5,
  stagger: 0.2,
  ease: "power4.out",
});

gsap.from(".fade-in", {
  opacity: 0,
  duration: 2,
  delay: 1,
  ease: "power2.out",
});

document.querySelectorAll(".reveal-up").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });
});

/* Skills Animation */
gsap.fromTo(
  ".skill-tag",
  { opacity: 0, scale: 0.5, filter: "blur(15px)" },
  {
    scrollTrigger: {
      trigger: "#skills",
      start: "top 70%",
    },
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 1,
    stagger: 0.05,
    ease: "power3.out",
  }
);

/* Parallax */
gsap.to(".about-img", {
  scrollTrigger: {
    trigger: ".about-img-container",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
  scale: 1.2,
  ease: "none",
});