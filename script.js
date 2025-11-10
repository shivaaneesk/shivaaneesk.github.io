document.addEventListener("DOMContentLoaded", function() {

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    // This function will be called when an observed element enters the viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Find all elements to animate and observe them
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

});
