/* ------------ start font script------------ */
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
/* ------------ end font script------------ */

/* ------------ start STICKY NAV ------------ */
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

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const contactBtn = document.getElementById('contact-btn');

    if(window.scrollY > 50){ 
        header.classList.add('bg-white');
        contactBtn.classList.add('header-white');
    } else {
        header.classList.remove('bg-white');
        contactBtn.classList.remove('header-white');
    }
});
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
    const timelineYears = document.querySelectorAll('.timeline-year h2');
    const contentTitle = document.querySelector('.timeline-title');
    const contentText = document.querySelector('.timeline-text');
    const contentImage = document.querySelector('.timeline-image');

    const timelineData = {
        '2015': {
            title: 'The Beginning',
            text: 'Passero Vitrified was established with a vision to create high-quality vitrified tiles using modern technology and a design-first mindset.',
            img: './assests/img/about/The-Beginning.jpg'
        },
        '2017': {
            title: 'Manufacturing Expansion',
            text: 'Installed advanced machinery and expanded production capacity to meet growing domestic and export demand.',
            img: 'assests/img/about/Manufacturing-Expansion.png'
        },
        '2019': {
            title: 'National Presence',
            text: 'Introduced multiple new collections and built a strong dealer network across major Indian cities.',
            img: 'assests/img/about/National-Presence.png'
        },
        '2022': {
            title: 'Global Reach',
            text: 'Strengthened export operations, supplying to over 15+ countries with internationally certified quality standards.',
            img: './assests/img/about/Global-Reach.png'
        },
        '2024': {
            title: 'Innovation & Technology Upgrade',
            text: 'Upgraded manufacturing lines with latest digital printing, polishing, and automated quality control systems.',
            img: './assests/img/about/Innovation-Technology-Upgrade.png'
        },
        '2025': {
            title: 'Brand Store Launch',
            text: 'Transitioned from traditional distribution to exclusive Passero Brand Stores, offering premium customer experience and designer collaborations.',
            img: './assests/img/about/Brand-Store-Launch.png'
        }
    };
    function updateContent(year) {
        const data = timelineData[year];
        if (!data) return;

        contentTitle.textContent = data.title;
        contentText.textContent = data.text;
        contentImage.src = data.img;
        contentImage.alt = data.title;
    }
    timelineYears.forEach(yearEl => {
        yearEl.addEventListener('click', () => {
            const year = yearEl.textContent.trim();
            timelineYears.forEach(y => {
                y.classList.remove('active-year');
                y.classList.add('text-[#0F1924B8]');
            });
            yearEl.classList.add('active-year');
            yearEl.classList.remove('text-[#0F1924B8]');
            updateContent(year);
        });
    });
    const firstActive = document.querySelector('.timeline-year h2.active-year');
    if (firstActive) {
        updateContent(firstActive.textContent.trim());
    }
});
// ------------ end The Passero Story about us page ------------

// start Collection Details nav tabs section 
  const tabs = document.querySelectorAll('#filter-tabs .tab');
        const tiles = document.querySelectorAll('#tile-grid .tile');

        function filterTiles(category) {
            tiles.forEach(tile => {
                if (category === 'all' || tile.dataset.category === category) {
                    tile.classList.remove('hidden');
                } else {
                    tile.classList.add('hidden');
                }
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => {
                    t.classList.remove('text-[#935C10]');
                    t.classList.remove('border-b-[#935C10]');
                    t.classList.add('text-[#0C141DE5]');
                    t.classList.add('border-transparent');
                });

                tab.classList.add('text-[#935C10]');
                tab.classList.add('border-b-[#935C10]');
                tab.classList.remove('text-[#0C141DE5]');
                tab.classList.remove('border-transparent');
                const category = tab.dataset.filter;
                filterTiles(category);
            });
        });

        filterTiles('all');
//  ------------end Collection Details nav tabs section ------------

// ------------ start section More Collections You'll Love slider ------------
 // Wrap in a block to avoid duplicate const errors
(() => {
    const sliderGrid = document.getElementById('sliderGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const tilesgrids = document.querySelectorAll('.tilesgrid');

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

        prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        prevBtn.style.cursor = currentIndex === 0 ? 'not-allowed' : 'pointer';

        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.3' : '1';
        nextBtn.style.cursor = currentIndex >= maxIndex ? 'not-allowed' : 'pointer';
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        const maxIndex = getMaxIndex();
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    window.addEventListener('resize', () => {
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
  const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabName = button.getAttribute('data-tab');
                tabButtons.forEach(btn => {
                    btn.classList.remove('border-[#935C10]', 'text-[#935C10]');
                    btn.classList.add('border-transparent', 'text-gray-500');
                });
                button.classList.remove('border-transparent', 'text-gray-500');
                button.classList.add('border-[#935C10]', 'text-[#935C10]');
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(tabName).classList.add('active');
            });
        });

// ------------ end Description Technical Specification Additional Information img ------------

// ------------ start Product Details hero banner img ------------
const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImages = [
            'assests/img/Product-Details/Product-Details.png',
            'assests/img/Product-Details/Product-Details-1.png',
            'assests/img/Product-Details/Product-Details-2.png',
            'assests/img/Product-Details/Product-Details-3.png'
        ];

        thumbnails.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                thumbnails.forEach(t => t.classList.remove('active', 'border-gray-900'));
                thumbnails.forEach(t => t.classList.add('border-[#1F32473D]'));
                thumb.classList.add('active', 'border-gray-900');
                thumb.classList.remove('border-[#1F32473D]');
                document.getElementById('mainImage1').src = mainImages[index];
                document.getElementById('mainImage2').src = mainImages[(index + 1) % mainImages.length];
            });
        });
// ------------ start Product Details hero banner img ------------
// ------------ start Product Details hero banner img ------------
// ------------ start Product Details hero banner img ------------
// ------------ start Product Details hero banner img ------------
