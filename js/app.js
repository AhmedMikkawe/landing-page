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
const iconMenu = document.querySelector(".icon");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// this function is responsible for showing the navigation menu or hiding it
function toggleMenu() {
  if (navList.className == "navbar__list") {
    navList.classList.add("show");
  } else {
    navList.classList.remove("show");
  }
}
// this function is responsible for changing class names on the section
// depending on if the section is visible on the viewport or not
function toggleActiveState() {
  const options = {
    rootMargin: "-100px",
    threshold: 0.25,
  };
  // the intersection observer takes one argument and it's a function
  // the function takes two arguments entries and the observer itself
  const observer = new IntersectionObserver(function (entries, observer) {
    // looping through the entries every entry is a section
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
    // it removes the class from all the sections
    section.classList.remove("your-active-class");
    // call the observe method from the observer object
    // and passing the section as an argument
    observer.observe(section);
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav by looping through the sections
// for every section it adds a link in the navbar
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
/**
 * End Main Functions
 * Begin Events
 *
 */
window.addEventListener("scroll", toggleActiveState);
iconMenu.addEventListener("click", toggleMenu);
// Scroll to section on link click
function scrollToSection(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}
