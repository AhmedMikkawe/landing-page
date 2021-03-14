/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");
const navItems = document.querySelectorAll("li");
const navLinks = document.querySelectorAll(".menu__link");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function toggleActiveState() {
  const options = {
    rootMargin: "-100px",
    threshold: 0.25,
  };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      let navId = entry.target.getAttribute("id");
      let active = document.querySelector(`#${navId}link`);
      if (entry.isIntersecting === true) {
        entry.target.classList.add("your-active-class");
        active.classList.add("item-active-class");
      } else {
        entry.target.classList.remove("your-active-class");
        active.classList.remove("item-active-class");
      }
    });
  }, options);
  sections.forEach(function (section) {
    section.classList.remove("your-active-class");
    observer.observe(section);
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
sections.forEach(function (section) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = `#${section.id}`;
  a.id = `${section.id}link`;
  a.textContent = section.dataset.nav;
  a.classList.add("menu__link");
  a.addEventListener("click", scrollToSection);
  li.appendChild(a);
  fragment.appendChild(li);
});
navList.appendChild(fragment);
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */
window.addEventListener("scroll", toggleActiveState);
// Build menu

// Scroll to section on link click
function scrollToSection(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

// Set sections as active
