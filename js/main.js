// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close menu when clicking on a link
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Scroll behavior - Close menu on scroll
window.addEventListener('scroll', () => {
  if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeIn 0.8s ease-in-out';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

console.log('Mero Turismo - Website Loaded Successfully!');

// Gallery Lightbox Functionality
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Open lightbox on gallery item click
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const alt = img.getAttribute('alt');
    const src = img.getAttribute('src');
    
    lightboxImage.src = src;
    lightboxCaption.textContent = alt;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
});

// Close lightbox on close button click
lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox on outside click
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    closeLightbox();
  }
});

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
    closeLightbox();
  }
});

// Function to close lightbox
function closeLightbox() {
  lightboxModal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

console.log('Gallery Lightbox - Ready!');

