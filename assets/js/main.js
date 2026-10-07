document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const icon = btn.querySelector('i');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        // Toggle icon between bars and times (close)
        if (menu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Sticky Navbar Effect on Scroll (Optimized)
    const navbar = document.getElementById('navbar');
    let isScrolled = false;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            if (!isScrolled) {
                navbar.classList.add('shadow-lg', 'bg-slate-900/90');
                navbar.classList.remove('glass-nav');
                isScrolled = true;
            }
        } else {
            if (isScrolled) {
                navbar.classList.remove('shadow-lg', 'bg-slate-900/90');
                navbar.classList.add('glass-nav');
                isScrolled = false;
            }
        }
    }, { passive: true });
    
    // Trigger scroll event on load to set correct navbar state
    window.dispatchEvent(new Event('scroll'));
});
