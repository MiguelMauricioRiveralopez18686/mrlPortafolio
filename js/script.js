document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize Sidenav for mobile navigation
    var elemsSidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsSidenav);

    // Initialize Materialize Scrollspy for smooth scrolling and active nav links
    var elemsScrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elemsScrollspy, {
        scrollOffset: 0, // Adjust if you have a fixed header
        throttle: 50 // How often ScrollSpy checks for position changes
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default hash behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Materialize specific scroll animation
                // This will scroll to the target element with a smooth effect
                M.ScrollSpy.getInstance(targetElement); // Get instance if already initialized, or just ensure it's there
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });

                // Close sidenav if it's open (for mobile)
                var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
                if (sidenavInstance && sidenavInstance.isOpen) {
                    sidenavInstance.close();
                }
            }
        });
    });

    // Optional: Add a simple fade-in effect for sections as they come into view
    // This is a basic example, for more complex animations, consider a library like AOS
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        sectionObserver.observe(section);
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Materialize Sidenav for mobile navigation
    var elemsSidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elemsSidenav);

    // Initialize Materialize Scrollspy for smooth scrolling and active nav links
    var elemsScrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(elemsScrollspy, {
        scrollOffset: 64, // Adjust for fixed navbar height (desktop)
        throttle: 50 // How often ScrollSpy checks for position changes
    });

    // Get the scroll-to-top button
    const scrollToTopBtn = document.getElementById('scroll-to-top');

    // Function to handle scroll-to-top button visibility
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling 300px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default hash behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Determine offset based on Materialize fixed navbar height
                let offset = 64; // Default for desktop
                if (window.innerWidth < 993) { // Materialize mobile breakpoint
                    offset = 56; // Mobile navbar height
                }

                // Scroll to the target element with smooth animation
                window.scrollTo({
                    top: targetElement.offsetTop - offset, // Subtract navbar height
                    behavior: 'smooth'
                });

                // Close sidenav if it's open (for mobile)
                var sidenavInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
                if (sidenavInstance && sidenavInstance.isOpen) {
                    sidenavInstance.close();
                }
            }
        });
    });

    // Scroll to top when the arrow button is clicked
    scrollToTopBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll to the top
        });
    });

    // Optional: Add a simple fade-in effect for sections as they come into view
    // This is a basic example, for more complex animations, consider a library like AOS
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        sectionObserver.observe(section);
    });

});