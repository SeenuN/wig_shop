// Slideshow functionality (only relevant for index.html)
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName('slides');
  const dots = document.getElementsByClassName('dot');
  if (slides.length > 0) { // Only run if slides exist
    for (let s of slides) { s.style.display = 'none'; }
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
    for (let d of dots) { d.className = d.className.replace(' active-dot', ''); }
    dots[slideIndex].className += ' active-dot';
    setTimeout(showSlides, 6000);
  }
}

// Hamburger menu toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // Run slideshow only if slides exist (for index.html)
  if (document.getElementsByClassName('slides').length > 0) {
    showSlides();
  }
  // Attach menu toggle event listener
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
  } else {
    console.error('Menu toggle button not found');
  }
});