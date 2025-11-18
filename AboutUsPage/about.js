// Smooth scroll for section nav links
document.querySelectorAll('.section-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Accordion for Values
document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement;
    // Close other accordions
    document.querySelectorAll('.accordion-item').forEach(acc => {
      if(acc !== item) acc.classList.remove('open');
    });
    // Toggle current
    item.classList.toggle('open');
  });
});
