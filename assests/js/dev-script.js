/* ------------ font script------------ */
tailwind.config = {
    theme: {
      extend: {
        colors: {
          title: '#0C141DE5',
          description: '#0C141DE5',
        },
        fontFamily: {
          forum: ['Forum', 'serif'],
          poppins: ['Poppins', 'sans-serif'],
        }
      }
    }
  }

/* ------------ SLIDER ------------ */
/* ------------ STICKY NAV ------------ */
const nav = document.getElementById("main-nav");
const logo = document.getElementById("logo-img");

function updateNav() {
  const links = document.querySelectorAll(".nav-link");
  const contactBtn = document.querySelector("#nav-right a:last-child");

  if (window.scrollY > 50) {
    nav.classList.add("bg-white", "shadow");
    nav.classList.remove("bg-transparent");

    links.forEach(el => el.classList.replace("text-white", "text-black"));

    contactBtn.classList.replace("border-white", "border-black");
    contactBtn.classList.replace("text-white", "text-black");

    logo.src = logo.dataset.dark;

  } else {
    nav.classList.remove("bg-white", "shadow");
    nav.classList.add("bg-transparent");

    links.forEach(el => el.classList.replace("text-black", "text-white"));

    contactBtn.classList.replace("border-black", "border-white");
    contactBtn.classList.replace("text-black", "text-white");

    logo.src = logo.dataset.light;
  }
}

window.addEventListener("scroll", updateNav);
updateNav();


/* ------------ hero side bar ------------ */

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

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

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

