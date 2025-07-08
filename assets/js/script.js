// Slideshow functionality
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName('slides');
  const dots = document.getElementsByClassName('dot');
  for (let s of slides) { s.style.display = 'none'; }
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = 'block';
  for (let d of dots) { d.className = d.className.replace(' active-dot', ''); }
  dots[slideIndex].className += ' active-dot';
  setTimeout(showSlides, 6000);
}

// Hamburger menu toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  showSlides(); // Initialize slideshow
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu); // Toggle menu on click
  }
});