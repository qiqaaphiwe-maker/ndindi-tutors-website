// ==============================
// Smooth Scroll for Navigation
// ==============================
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ==============================
// Form Validation + Success Message
// ==============================
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from reloading page

  // Check required inputs
  const inputs = form.querySelectorAll("input[required]");
  let valid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";
      valid = false;
    } else {
      input.style.border = "none";
    }
  });

  if (valid) {
    alert("✅ Thank you! Your enquiry has been submitted. NDINDI Tutors will contact you shortly.");
    form.reset();
  } else {
    alert("❌ Please fill in all required fields.");
  }
});

// ==============================
// Scroll Animation for Cards
// ==============================
const cards = document.querySelectorAll(".card");

// Initialize animation styles
cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease";
});

// Animate cards on scroll
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (position < screenPosition) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

// ==============================
// Optional: WhatsApp Button Click
// ==============================
const whatsappBtn = document.querySelector(".whatsapp");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    window.open("https://wa.me/27693457771", "_blank");
  });
}
