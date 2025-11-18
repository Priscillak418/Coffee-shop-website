/**
 * Testimonial Slider Script for Caffé Sereno
 * This script controls which testimonial slide is visible.
 */

// Initialize the slide index to the first slide
let slideIndex = 1;

// Function to control the slide display
function showSlides(n) {
  let i;
  // Get all elements with the class 'testimonial-slide'
  let slides = document.getElementsByClassName("testimonial-slide");
  // Get all elements with the class 'dot'
  let dots = document.getElementsByClassName("dot");

  // Handle wraparound logic for the slider
  if (n > slides.length) {
    slideIndex = 1; // Go back to the first slide
  }
  if (n < 1) {
    slideIndex = slides.length; // Go to the last slide
  }

  // Hide all slides and remove the 'active' class from all dots
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }

  // Display the current slide and mark the current dot as active
  // Arrays are 0-indexed, so we subtract 1 from slideIndex
  slides[slideIndex - 1].classList.add('active');
  dots[slideIndex - 1].classList.add('active');
}

// Function called when a dot is clicked (from the HTML onclick attribute)
function currentSlide(n) {
  // Set the current index to the clicked dot's number
  slideIndex = n;
  showSlides(slideIndex);
}

// Automatically display the initial slide when the page loads
// This ensures the slider starts correctly even before any interaction.
document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
});