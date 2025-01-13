// home.js

// Dropdown functionality for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.nav-links li');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            const submenu = dropdown.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            const submenu = dropdown.querySelector('.dropdown-menu');
            if (submenu) submenu.style.display = 'none';
        });
    });

    // Hover effect for service and portfolio boxes
    const serviceAndPortfolioBoxes = document.querySelectorAll('.service-box');
    serviceAndPortfolioBoxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)';
            box.style.transition = 'transform 0.3s';
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)';
        });
    });
});
