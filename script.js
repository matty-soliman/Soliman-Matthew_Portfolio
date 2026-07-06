// ===== Typed role text in hero =====
const roles = [
  "WordPress Developer",
  "QA / Test Engineer",
  "Hardware Troubleshooter",
  "Aspiring Full-Stack Dev"
];

const typedEl = document.getElementById("typedRole");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400); // pause at full word
      return;
    }
  } else {
    charIndex--;
    typedEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 80);
}

if (typedEl) typeLoop();

// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // close menu after clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== Footer year =====
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Project Modal =====
const projectData = {
  "solar-charging": {
    title: "Solar-Powered Coin-Based Phone Charging Station with RFID Access",
    status: "DEPLOYED",
    statusClass: "status--shipped",
    category: "CAPSTONE",
    roleSummary: "The client needed a secure, coin-operated charging solution for public spaces. I engineered a complete system combining RFID authentication, solar power management, and automated charging control.",
    description: "A solar-powered, coin-operated phone charging station with RFID authentication for secure access, automated charging control, and real-time performance monitoring.",
    tags: ["Arduino Mega", "C++", "RFID", "Servo Motor", "LCD", "Solar Power"],
    contributions: [
      "Designed and implemented RFID authentication system for secure user access",
      "Programmed coin detection mechanism using Arduino Mega",
      "Integrated solar power management system with battery monitoring",
      "Built real-time performance monitoring via LCD display",
      "Developed automated charging control with safety features"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop"
    ],
    link: null
  },
  "iot-monitoring": {
    title: "IoT Smart Room Monitoring System with Fire Alert & Cloud Integration",
    status: "DEPLOYED",
    statusClass: "status--shipped",
    category: "IoT",
    roleSummary: "The client required real-time environmental monitoring with cloud integration for safety alerts. I built a comprehensive IoT system with multi-sensor integration and automated hazard detection.",
    description: "Real-time environmental sensing with cloud data logging via ThingSpeak, plus hazard detection that triggers local alarms and cloud notifications.",
    tags: ["Arduino R4 WiFi", "C++", "ThingSpeak", "DHT Sensor", "MQ Gas Sensor"],
    contributions: [
      "Implemented WiFi connectivity for cloud data transmission",
      "Integrated multiple sensors (temperature, humidity, gas) for comprehensive monitoring",
      "Set up ThingSpeak cloud platform for real-time data logging",
      "Programmed fire detection algorithm with automatic alert system",
      "Built local alarm system with visual and audio indicators"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop"
    ],
    link: null
  },
  "obstacle-robot": {
    title: "Obstacle Avoidance Autonomous Robot",
    status: "DEPLOYED",
    statusClass: "status--shipped",
    category: "ROBOTICS",
    roleSummary: "The goal was to create an autonomous navigation system for obstacle avoidance. I engineered ultrasonic sensing algorithms and motor control logic for smooth autonomous movement.",
    description: "An autonomous robot that navigates using ultrasonic distance sensing, with motor movement controlled through an L298N driver.",
    tags: ["Arduino Uno", "C++", "HC-SR04", "L298N", "DC Motors"],
    contributions: [
      "Programmed ultrasonic distance sensing algorithm for obstacle detection",
      "Implemented motor control logic using L298N driver",
      "Designed navigation algorithm for smooth obstacle avoidance",
      "Built and tested robot chassis with motor assembly",
      "Optimized sensor placement for maximum detection range"
    ],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=500&fit=crop"
    ],
    link: null
  },
  "hotel-savano": {
    title: "Hotel Savano — Hotel Booking Website",
    status: "LIVE",
    statusClass: "status--live",
    category: "WORDPRESS",
    roleSummary: "Hotel Savano needed a professional booking website with online presence. I engineered a complete WordPress solution with booking integration, responsive design, and end-to-end technical setup.",
    description: "Designed and built a responsive WordPress site using Elementor, including booking information, contact forms, and image galleries, with domain, hosting, SSL, and security configured end-to-end.",
    tags: ["WordPress", "Elementor", "Responsive Design", "Client Work"],
    contributions: [
      "Engineered responsive, pixel-perfect layouts using Elementor based on client wireframes",
      "Configured end-to-end hosting, domain mapping, SSL certificates, and baseline security configurations",
      "Built and tested custom interactive contact forms and dynamic image galleries",
      "Implemented booking system integration with contact forms",
      "Created responsive layouts optimized for desktop and mobile",
      "Provided ongoing maintenance and client support"
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop"
    ],
    link: "https://hotelsavano.ph/"
  },
  "arangkada-sj": {
    title: "Arangkada San Josenio — Business Website",
    status: "LIVE",
    statusClass: "status--live",
    category: "WORDPRESS",
    roleSummary: "Arangkada San Josenio required a dynamic business website for news and events. I built a responsive WordPress platform with dynamic content sections and client training.",
    description: "Built and maintained a responsive WordPress site for desktop and mobile, adding news, events, and gallery sections while working directly with the client on ongoing updates.",
    tags: ["WordPress", "Elementor", "Responsive Design", "Client Work"],
    contributions: [
      "Developed responsive WordPress site using Elementor with mobile-first approach",
      "Created news and events sections with dynamic content management",
      "Built image galleries for business showcase with interactive features",
      "Implemented mobile-first responsive design for optimal user experience",
      "Worked directly with client on content updates and improvements",
      "Provided training for client to manage content independently"
    ],
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&h=500&fit=crop"
    ],
    link: "http://arangkadasj.ph/"
  },
  "coffee-shop": {
    title: "Coffee Shop Website (WordPress)",
    status: "IN PROGRESS",
    statusClass: "status--progress",
    category: "PERSONAL",
    roleSummary: "A personal project to explore WordPress design capabilities. I'm building a coffee shop website focusing on menu layouts, branding, and engaging page designs.",
    description: "A personal WordPress project built and hosted locally — a coffee shop website exploring menu layouts, branding, and page design. Still a work in progress, with more to add before it goes live.",
    tags: ["WordPress", "Elementor", "Personal Project"],
    contributions: [
      "Designing custom coffee shop branding and visual identity",
      "Building menu layout with item descriptions and pricing",
      "Creating engaging page layouts for different sections",
      "Experimenting with Elementor widgets and custom CSS",
      "Planning for future features: online ordering, reservations"
    ],
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=500&fit=crop"
    ],
    link: null
  }
};

const modal = document.getElementById("projectModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const projectCards = document.querySelectorAll(".project-card");
const modalContent = document.querySelector(".modal__content");

let lastFocusedEl = null; // element to restore focus to on close

function getFocusableEls() {
  return modalContent.querySelectorAll(
    'a[href], button:not([disabled]), img[tabindex], [tabindex]:not([tabindex="-1"])'
  );
}

function trapFocus(e) {
  if (e.key !== "Tab") return;
  const focusable = getFocusableEls();
  if (focusable.length === 0) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

// Cache modal elements
const modalTitle = document.getElementById("modalTitle");
const modalStatus = document.querySelector("#modalMeta .status");
const modalCategory = document.querySelector("#modalMeta .project-card__num");
const modalRoleSummary = document.getElementById("modalRoleSummary");
const modalTags = document.getElementById("modalTags");
const modalContributions = document.getElementById("modalContributions");
const modalMainImage = document.getElementById("modalMainImage");
const modalThumbnails = document.getElementById("modalThumbnails");
const modalGallerySide = document.querySelector(".modal__gallery-side");
const modalGrid = document.querySelector(".modal__grid");
const modalLink = document.getElementById("modalLink");
const modalActions = document.getElementById("modalActions");

function openModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  modalTitle.textContent = data.title;
  
  modalStatus.textContent = data.status;
  modalStatus.className = `status ${data.statusClass}`;
  
  modalCategory.textContent = data.category;
  
  // Role summary
  modalRoleSummary.replaceChildren(
    ...data.roleSummary.split('\n').map(line => {
      const p = document.createElement('p');
      p.textContent = line;
      return p;
    })
  );
  
  // Tags
  modalTags.replaceChildren(
    ...data.tags.map(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      return span;
    })
  );
  
  // Contributions
  modalContributions.replaceChildren(
    ...data.contributions.map(contribution => {
      const li = document.createElement('li');
      li.textContent = contribution;
      return li;
    })
  );
  
  // Gallery
  if (data.images && data.images.length > 0) {
    modalMainImage.src = data.images[0];
    modalMainImage.style.display = "block";
    modalGallerySide.style.display = "flex";
    modalGrid.classList.remove("gallery-hidden");
    
    modalThumbnails.replaceChildren(
      ...data.images.map((img, index) => {
        const image = document.createElement('img');
        image.src = img;
        image.alt = `Project thumbnail ${index + 1}`;
        image.dataset.index = index;
        return image;
      })
    );
    
    // Add click handlers for thumbnails
    modalThumbnails.querySelectorAll("img").forEach(thumb => {
      thumb.addEventListener("click", () => {
        modalMainImage.src = thumb.src;
      });
    });
  } else {
    modalGallerySide.style.display = "none";
    modalGrid.classList.add("gallery-hidden");
  }
  
  // Link button
  if (data.link) {
    modalLink.href = data.link;
    modalActions.style.display = "flex";
  } else {
    modalActions.style.display = "none";
  }
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // move focus into the modal and start trapping Tab
  modalClose.focus();
  document.addEventListener("keydown", trapFocus);
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
  document.removeEventListener("keydown", trapFocus);

  // wait for the close transition, then restore focus
  setTimeout(() => {
    if (lastFocusedEl) lastFocusedEl.focus();
  }, 300);
}

// Add click handlers to project cards
projectCards.forEach((card) => {
  const projectId = card.dataset.project;
  
  if (!projectId) {
    console.warn('Project card missing data-project attribute', card);
    return;
  }
  
  card.addEventListener("click", (e) => {
    // Don't open modal if clicking the visit site link directly
    if (e.target.closest(".project-card__link")) {
      return;
    }
    lastFocusedEl = card;
    openModal(projectId);
  });
});

// Close modal handlers
modalClose.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

// Close on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

// ===== Work-in-progress notice =====
const noticeModal = document.getElementById("noticeModal");
const noticeBackdrop = document.getElementById("noticeBackdrop");
const noticeClose = document.getElementById("noticeClose");
const noticeDismiss = document.getElementById("noticeDismiss");

function closeNotice() {
  noticeModal.classList.remove("active");
  document.body.style.overflow = "";
}

if (noticeModal) {
  noticeModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

if (noticeClose) noticeClose.addEventListener("click", closeNotice);
if (noticeBackdrop) noticeBackdrop.addEventListener("click", closeNotice);
if (noticeDismiss) noticeDismiss.addEventListener("click", closeNotice);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && noticeModal && noticeModal.classList.contains("active")) {
    closeNotice();
  }
});
