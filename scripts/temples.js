document.addEventListener('DOMContentLoaded', () => {
    // Dynamically set the current year in the footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Dynamically set the last modified date in the footer
    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.navbar-mobile');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }
});