/* ------------ start font script------------ */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        title: "#0C141DE5",
        description: "#0C141DE5",
      },
      fontFamily: {
        forum: ["Forum", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
};
/* ------------ end font script------------ */

/* ------------ start STICKY NAV ------------ */
const nav = document.getElementById("main-nav");
const logo = document.getElementById("logo-img");
const menuIcon = document.querySelector("#mobile-toggle svg");
const phoneIcon = document.querySelector('a[href^="tel"] i');

// FIRST Contact Button (new unique for sticky text/border)
const contactBtnFirst = document.getElementById("contact-btn-first");

// SECOND Contact Button (already exists)
const contactBtn = document.getElementById("contact-btn");

// Detect dark-logo navbar (second nav)
const isDarkNav = logo && logo.src.includes("colo-logo.png");

function updateNav() {
  const links = document.querySelectorAll(".nav-link");

  if (window.scrollY > 50) {
    // Sticky navbar
    nav.classList.add("bg-white", "shadow");
    nav.classList.remove("bg-transparent");

    // Nav links color
    links.forEach((el) => el.classList.replace("text-white", "text-black"));

    // FIRST Contact button → sticky border black, text black
    if (contactBtnFirst) {
      contactBtnFirst.classList.remove("border-white", "text-white");
      contactBtnFirst.classList.add("border-black", "text-black");
    }

    // SECOND Contact button → sticky bg black, text white, border black
    if (contactBtn) {
      contactBtn.classList.add("bg-[#152231]", "text-white", "border-black");
      contactBtn.classList.remove("text-black", "bg-transparent");
    }

    // Logo swap
    if (logo && logo.dataset.dark) logo.src = logo.dataset.dark;

    // Mobile icons → black
    if (menuIcon) menuIcon.style.color = "#0C141DE5";
    if (phoneIcon) phoneIcon.style.color = "#0C141DE5";
  } else {
    // Transparent / top navbar
    nav.classList.remove("bg-white", "shadow");
    nav.classList.add("bg-transparent");

    // Nav links
    if (!isDarkNav) {
      links.forEach((el) => el.classList.replace("text-black", "text-white"));
    }

    // FIRST Contact button → normal border white, text black
    if (contactBtnFirst) {
      contactBtnFirst.classList.remove("border-black", "text-[#152231");
      contactBtnFirst.classList.add("border-white", "text-[#152231");
    }

    // SECOND Contact button → normal transparent bg, text black, border black
    if (contactBtn) {
      contactBtn.classList.remove("bg-[#152231]", "text-white");
      contactBtn.classList.add(
        "bg-transparent",
        "text-black",
        "border-[#152231"
      );
    }

    // Logo swap
    if (logo && logo.dataset.light) logo.src = logo.dataset.light;

    // Mobile icons color
    if (isDarkNav) {
      if (menuIcon) menuIcon.style.color = "#0C141DE5";
      if (phoneIcon) phoneIcon.style.color = "#0C141DE5";
    } else {
      if (menuIcon) menuIcon.style.color = "white";
      if (phoneIcon) phoneIcon.style.color = "white";
    }
  }
}

window.addEventListener("scroll", updateNav);
updateNav();

// ===== MOBILE SIDEBAR JS =====
const mobileToggle = document.getElementById("mobile-toggle");
const mobileSidebar = document.getElementById("mobile-sidebar");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const sidebarClose = document.getElementById("sidebar-close");

if (mobileToggle && mobileSidebar && sidebarBackdrop) {
  function openSidebar() {
    mobileSidebar.classList.remove("-translate-x-full");
    sidebarBackdrop.classList.remove("hidden");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      sidebarBackdrop.classList.add("opacity-100");
    });
  }

  function closeSidebar() {
    mobileSidebar.classList.add("-translate-x-full");
    sidebarBackdrop.classList.remove("opacity-100");
    document.body.style.overflow = "";

    setTimeout(() => {
      sidebarBackdrop.classList.add("hidden");
    }, 300);
  }

  mobileToggle.addEventListener("click", openSidebar);
  sidebarBackdrop.addEventListener("click", closeSidebar);

  if (sidebarClose) {
    sidebarClose.addEventListener("click", closeSidebar);
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebar();
  });

  mobileSidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeSidebar);
  });
}

/* ------------ start STICKY NAV ------------ */

/* ------------ start hero side bar ------------ */
document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slides > div");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const indicators = document.querySelectorAll(".indicators li");

  let index = 0;
  const total = slides.length;
  const intervalTime = 5000;
  let autoSlide;

  function updateSlider() {
    if (!slidesContainer) return;

    slidesContainer.style.transform = `translateX(-${index * 100}%)`;

    indicators.forEach((dot, i) => {
      dot.classList.remove("w-6", "bg-[#FFFFFF99]");
      dot.classList.add("w-2", "bg-[#FFFFFF52]");

      if (i === index) {
        dot.classList.remove("w-2", "bg-[#FFFFFF52]");
        dot.classList.add("w-6", "bg-[#FFFFFF99]");
      }
    });
  }

  function nextSlide() {
    index = (index + 1) % total;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    updateSlider();
  }

  function startAuto() {
    autoSlide = setInterval(nextSlide, intervalTime);
  }

  function resetAuto() {
    clearInterval(autoSlide);
    startAuto();
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetAuto();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetAuto();
    });
  }

  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
      resetAuto();
    });
  });

  updateSlider();
  startAuto();
});
/* ------------ start hero side bar ------------ */

// ------------ start The Passero Story about us page ------------
document.addEventListener("DOMContentLoaded", () => {
  const timelineYears = document.querySelectorAll(".timeline-year h2");
  const contentTitle = document.querySelector(".timeline-title");
  const contentText = document.querySelector(".timeline-text");
  const contentImage = document.querySelector(".timeline-image");

  const timelineData = {
    2021: {
      title: "The Beginning",
      text: "Passero Vitrified was founded with a clear vision to create high-quality vitrified tiles driven by modern technology and a design-first approach.",
      img: "./assests/img/about/The-Beginning.jpg",
    },
    2022: {
      title: "Surface Expansion",
      text: "Launched more than 10 unique surface finishes in the Indian market and marked our first major exhibition presence in Rajkot.",
      img: "assests/img/about/Manufacturing-Expansion.png",
    },
    2023: {
      title: "Market Presence",
      text: "Expanded our industry footprint with a successful exhibition in Morbi, strengthening our brand visibility in the tile manufacturing hub.",
      img: "assests/img/about/National-Presence.png",
    },
    2024: {
      title: "Retail Entry",
      text: "Participated in the prestigious ACETECH exhibition in Mumbai, opened our first exclusive brand outlet in Ujjain, and announced plans to enter sanitaryware manufacturing.",
      img: "./assests/img/about/Global-Reach.png",
    },
    2025: {
      title: "Store Growth",
      text: "Showcased our collections at the Delhi exhibition and opened new Passero brand outlets in Dewas and Indore. ",
      img: "./assests/img/about/Innovation-Technology-Upgrade.png",
    },
    2026: {
      title: "Future Plans",
      text: "Planning to expand our presence further with the launch of a new exclusive brand outlet in Ahmedabad.",
      img: "./assests/img/about/Brand-Store-Launch.png",
    },
  };
  function updateContent(year) {
    const data = timelineData[year];
    if (!data) return;

    contentTitle.textContent = data.title;
    contentText.textContent = data.text;
    contentImage.src = data.img;
    contentImage.alt = data.title;
  }
  timelineYears.forEach((yearEl) => {
    yearEl.addEventListener("click", () => {
      const year = yearEl.textContent.trim();
      timelineYears.forEach((y) => {
        y.classList.remove("active-year");
        y.classList.add("text-[#0F1924B8]");
      });
      yearEl.classList.add("active-year");
      yearEl.classList.remove("text-[#0F1924B8]");
      updateContent(year);
    });
  });
  const firstActive = document.querySelector(".timeline-year h2.active-year");
  if (firstActive) {
    updateContent(firstActive.textContent.trim());
  }
});
// ------------ end The Passero Story about us page ------------

// start Collection Details nav tabs section
const tabs = document.querySelectorAll("#filter-tabs .tab");
const items = document.querySelectorAll("#tile-grid .tile-item");

function filterTiles(category) {
  items.forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {

    tabs.forEach((t) => {
      t.classList.remove("text-[#935C10]", "border-b-[#935C10]");
      t.classList.add("text-[#0C141DE5]", "border-transparent");
    });

    tab.classList.add("text-[#935C10]", "border-b-[#935C10]");
    tab.classList.remove("text-[#0C141DE5]", "border-transparent");

    filterTiles(tab.dataset.filter);
  });
});

filterTiles("all");

//  ------------end Collection Details nav tabs section ------------

// ------------ start section More Collections You'll Love slider ------------
// Wrap in a block to avoid duplicate const errors
(() => {
  const sliderGrid = document.getElementById("sliderGrid");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const tilesgrids = document.querySelectorAll(".tilesgrid");

  /* ✅ ERROR FIX — IF ELEMENTS NOT FOUND, STOP SCRIPT */
  if (!sliderGrid || !prevBtn || !nextBtn || tilesgrids.length === 0) {
    return;
  }

  let currentIndex = 0;
  let itemsPerView = getItemsPerView();
  const totalItems = tilesgrids.length;

  function getItemsPerView() {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getMaxIndex() {
    return Math.max(0, totalItems - itemsPerView);
  }

  function updateSlider() {
    const tileWidth = tilesgrids[0].offsetWidth;
    const gap = 24;
    const offset = currentIndex * (tileWidth + gap);
    sliderGrid.style.transform = `translateX(-${offset}px)`;
    updateButtons();
  }

  function updateButtons() {
    const maxIndex = getMaxIndex();
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= maxIndex;

    prevBtn.style.opacity = currentIndex === 0 ? "0.3" : "1";
    prevBtn.style.cursor = currentIndex === 0 ? "not-allowed" : "pointer";

    nextBtn.style.opacity = currentIndex >= maxIndex ? "0.3" : "1";
    nextBtn.style.cursor = currentIndex >= maxIndex ? "not-allowed" : "pointer";
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  nextBtn.addEventListener("click", () => {
    const maxIndex = getMaxIndex();
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  window.addEventListener("resize", () => {
    const newItemsPerView = getItemsPerView();
    if (newItemsPerView !== itemsPerView) {
      itemsPerView = newItemsPerView;
      const maxIndex = getMaxIndex();
      currentIndex = Math.min(currentIndex, maxIndex);
      updateSlider();
    }
  });

  updateButtons();
})();

// ------------ end section More Collections You'll Love slider ------------

// ------------ start Description Technical Specification Additional Information img ------------
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Set first tab as active by default
tabButtons[0].classList.remove("border-b-transparent", "text-[#0C141DE5]");
tabButtons[0].classList.add("border-b-[#935C10]", "text-[#935C10]");

tabContents[0].classList.remove("hidden");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.getAttribute("data-tab");

    tabButtons.forEach((btn) => {
      btn.classList.remove("border-b-[#935C10]", "text-[#935C10]");
      btn.classList.add("border-b-transparent", "text-[#0C141DE5]");
    });

    button.classList.remove("border-b-transparent", "text-[#0C141DE5]");
    button.classList.add("border-b-[#935C10]", "text-[#935C10]");

    tabContents.forEach((content) => content.classList.add("hidden"));

    document.getElementById(tabName).classList.remove("hidden");
  });
});

// ------------ end Description Technical Specification Additional Information img ------------

// ------------ start Product Details hero banner img ------------
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImages = [
  "assests/img/Product-Details/Product-Details.png",
  "assests/img/Product-Details/Product-Details-1.png",
  "assests/img/Product-Details/Product-Details-2.png",
  "assests/img/Product-Details/Product-Details-3.png",
];

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    thumbnails.forEach((t) => t.classList.remove("active", "border-gray-900"));
    thumbnails.forEach((t) => t.classList.add("border-[#1F32473D]"));
    thumb.classList.add("active", "border-gray-900");
    thumb.classList.remove("border-[#1F32473D]");
    document.getElementById("mainImage1").src = mainImages[index];
    document.getElementById("mainImage2").src =
      mainImages[(index + 1) % mainImages.length];
  });
});
// ------------ start Product Details hero banner img ------------
// ------------ start Product Details hero banner img ------------
// ------------ start Product Details hero banner img ------------
// ------------ start Product Details hero banner img ------------
