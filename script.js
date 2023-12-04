// Menu Show Y-Axis Hidden
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu Show
// Validate if navToggle constant element exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        if (navMenu.classList.contains('show-menu')) {
            navMenu.classList.remove('show-menu');
        }
        else navMenu.classList.add('show-menu');
    });
}