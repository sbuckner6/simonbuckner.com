document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenuIcon.addEventListener('click', function() {
        mobileMenu.classList.toggle('show');
    });

    const mobileMenuLinks = document.querySelectorAll('.mobile-menu li a');
    for (let i = 0; i < mobileMenuLinks.length; i++) {
        mobileMenuLinks[i].addEventListener('click', function() {
            mobileMenu.classList.toggle('show');
        });
    }
});

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}
