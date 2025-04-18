//close mobile menu if body is clicked
document.getElementsByClassName("main")[0].addEventListener("click", closeMenu);

// close mobile menu if footer is clicked
document
  .getElementsByClassName("footer")[0]
  .addEventListener("click", closeMenu);
window.onscroll = () => closeMenu();

//Function to close mobile menu
function closeMenu() {
  if (document.querySelector(".menu-links").classList.contains("open"))
    toggleMenu(document.querySelector(".burger"));
}

//Menu Toggle
const toggleMenu = (x) => {
  document.querySelector(".menu-links").classList.toggle("open");
  x.classList.toggle("change");
  document.getElementsByClassName("overlay")[0].classList.toggle("d-initial");
};

// Configuration for Header IntersectionObservers
const header_io_config = {
  root: null,
  threshold: 1,
  rootMargin: "-50px",
};

// IntersectionObserver for headers
var headerIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.classList.add("show");
      console.log("IO");
      entry.target.classList.add("animate__animated");
      entry.target.classList.add("animate__flash");
    }
  });
}, header_io_config);

// Configuration for Section IntersectionObservers
const section_io_config = {
  root: null,
  threshold: 0.2,
  rootMargin: "-50px",
};

// IntersectionObserver for section
var sectionCheck = 0;
var sectionIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // entry.target.classList.add("show");
      console.log("Section IO");
      if (sectionCheck == 1) {
        entry.target.classList.add("slide-left-animation");
        sectionIntersectionObserver.unobserve(entry.target);
        sectionCheck = 0;
        console.log(sectionCheck);
      } else {
        entry.target.classList.add("slide-right-animation");
        sectionIntersectionObserver.unobserve(entry.target);
        sectionCheck = 1;
        console.log(sectionCheck);
      }
    }
  });
}, section_io_config);

// select all header elements and use intersection observers on them
const headers2 = document.querySelectorAll("h2");
headers2.forEach((header) => {
  headerIntersectionObserver.observe(header);
});

const headers1 = document.querySelectorAll("h1");
headers1.forEach((header) => {
  headerIntersectionObserver.observe(header);
});

// select all section and footer elements and use intersection observers on them
const sections = document.querySelectorAll("section");
sections.forEach((section) => {
  sectionIntersectionObserver.observe(section);
});

const footer = document.querySelector("footer");
sectionIntersectionObserver.observe(footer);
