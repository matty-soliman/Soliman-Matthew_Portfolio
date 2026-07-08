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

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll("section[id]");
const navLinksItems = document.querySelectorAll(".nav__links a");

function updateActiveNav() {
  const scrollY = window.scrollY;
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinksItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveNav);
updateActiveNav(); // Run on load

// ===== Shared Modal Helpers =====
function openGenericModal(modalEl, focusEl = null) {
  modalEl.classList.add("active");
  document.body.style.overflow = "hidden";
  if (focusEl) focusEl.focus();
}

function closeGenericModal(modalEl, restoreFocusEl = null) {
  modalEl.classList.remove("active");
  document.body.style.overflow = "";
  if (restoreFocusEl) {
    setTimeout(() => restoreFocusEl.focus(), 300);
  }
}

// ===== Project Modal =====
const projectData = {
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
    images: [],
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
    images: [],
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
    images: [],
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
  closeGenericModal(modal, lastFocusedEl);
  document.removeEventListener("keydown", trapFocus);
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

// ===== Work-in-progress notice =====
const noticeModal = document.getElementById("noticeModal");
const noticeBackdrop = document.getElementById("noticeBackdrop");
const noticeClose = document.getElementById("noticeClose");
const noticeDismiss = document.getElementById("noticeDismiss");

function closeNotice() {
  closeGenericModal(noticeModal);
}

if (noticeModal) {
  openGenericModal(noticeModal, noticeClose);
}

if (noticeClose) noticeClose.addEventListener("click", closeNotice);
if (noticeBackdrop) noticeBackdrop.addEventListener("click", closeNotice);
if (noticeDismiss) noticeDismiss.addEventListener("click", closeNotice);

// Unified Escape key handler for all modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (modal.classList.contains("active")) {
      closeModal();
    } else if (noticeModal && noticeModal.classList.contains("active")) {
      closeNotice();
    }
  }
});
