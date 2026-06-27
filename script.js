// ================================
// CONTINUOUS TYPEWRITER (LOOPING)
// ================================
const words = [
  "Create. Design. Master.",
  "Jewellery Meets Art.",
  "Build Your Creative Future.",
  "Turn Skill Into Income."
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function typeLoop() {
  current = words[i];

  if (!isDeleting) {
    j++;
    document.getElementById("typewriter").textContent = current.substring(0, j);
  } else {
    j--;
    document.getElementById("typewriter").textContent = current.substring(0, j);
  }

  if (j === current.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1200);
    return;
  }

  if (j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeLoop, isDeleting ? 60 : 120);
}

typeLoop();


// ================================
// SMOOTH SCROLL
// ================================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


// ================================
// FADE-IN ON SCROLL
// ================================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));


// ================================
// CARD INTERACTION MICRO EFFECT
// ================================
document.querySelectorAll(".card, .tile").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `rotateX(${-(y - rect.height/2)/15}deg) rotateY(${(x - rect.width/2)/15}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});


// ================================
// FORM SUBMIT
// ================================
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Application received. We will contact you soon.");
  e.target.reset();
});
