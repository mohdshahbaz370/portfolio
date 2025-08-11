// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Create floating particles
function createParticle() {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDelay = Math.random() * 15 + "s";
  particle.style.animationDuration = Math.random() * 20 + 10 + "s";
  document.getElementById("particles").appendChild(particle);

  // Remove particle after animation
  setTimeout(() => {
    particle.remove();
  }, 30000);
}

// Create particles periodically
setInterval(createParticle, 3000);

// Initial particles
for (let i = 0; i < 8; i++) {
  setTimeout(createParticle, i * 300);
}

// Skill items hover effect
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.05)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Project cards hover effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add typing effect to hero text
const heroTitle = document.querySelector(".hero h1");
const heroSubtitle = document.querySelector(".hero h2");

function typeWriter(element, text, speed = 50) {
  element.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// Start typing effect after page load
window.addEventListener("load", () => {
  typeWriter(heroTitle, "Hi, I'm Mohammed Shahbaz", 100);
  setTimeout(() => {
    typeWriter(heroSubtitle, "Full Stack Developer", 80);
  }, 2500);
});

// Mobile menu functionality (basic)
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener("click", () => {
    navLinks.style.display =
      navLinks.style.display === "flex" ? "none" : "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "70px";
    navLinks.style.left = "0";
    navLinks.style.width = "100%";
    navLinks.style.background = "rgba(248, 250, 252, 0.98)";
    navLinks.style.padding = "1rem";
    navLinks.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideMenu = navLinks.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle && navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    }
  });
}

// Profile photo click effect
const profilePhoto = document.querySelector(".profile-photo");
if (profilePhoto) {
  profilePhoto.addEventListener("click", () => {
    profilePhoto.style.animation = "none";
    setTimeout(() => {
      profilePhoto.style.animation = "bounce 0.6s ease";
    }, 10);
  });
}

// Add bounce animation
const style = document.createElement("style");
style.textContent = `
            @keyframes bounce {
                0%, 20%, 60%, 100% {
                    transform: translateY(0) scale(1);
                }
                40% {
                    transform: translateY(-20px) scale(1.05);
                }
                80% {
                    transform: translateY(-10px) scale(1.02);
                }
            }
        `;
document.head.appendChild(style);
