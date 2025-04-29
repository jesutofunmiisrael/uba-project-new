// Toggle the navigation menu on mobile when hamburger menu is clicked
const hamburgerMenu = document.getElementById('hamburger-menu');
const navBar = document.querySelector('.nav-bar');

hamburgerMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
});

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
    // Ensure the index is within bounds
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100; // Move to the correct slide
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Automatically move the slide every 3 seconds
setInterval(() => moveSlide(1), 3000);

// Show the first slide on load
showSlide(slideIndex);
