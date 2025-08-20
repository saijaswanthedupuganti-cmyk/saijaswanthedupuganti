/*
 * Simple JavaScript interactions for the portfolio.
 * Handles mobile navigation toggling and prevents the contact form from
 * submitting to a server (as no backend is implemented). Feel free to
 * extend this script with smooth scroll or form submission via email
 * services in the future.
 */

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links li a');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  // Close mobile menu when a link is clicked
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });

  // Prevent default form submission (no backend)
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      alert('Thank you for reaching out! This form is currently disabled. You can contact me directly via email or phone.');
    });
  }
});