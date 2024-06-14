// Smooth Scrolling für Navigation und Button
const navLinks = document.querySelectorAll('nav ul li a');
const contactButton = document.getElementById('contact-button');

const scrollToSection = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
};

navLinks.forEach(link => {
    link.addEventListener('click', (event) => scrollToSection(event, link.getAttribute('href')));
});

contactButton.addEventListener('click', (event) => scrollToSection(event, '#contact'));

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener('click', function topFunction() {
    const targetElement = document.querySelector('#head');
    targetElement.scrollIntoView({behavior: 'smooth'})
  // document.body.scrollTop = 0; // For Safari
  // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});