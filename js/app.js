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

const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function toggleActiveState() {
  let observer = new IntersectionObserver(function () {});
  sections.forEach(function (section) {
    section.classList.remove("your-active-class");
    observer.observe(section);
  });
  navItems.forEach(function (navItem) {
    navItem.classList.remove("item-active-class");
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
  a.textContent = section.dataset.nav;
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

// Set sections as active
