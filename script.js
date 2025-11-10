document.addEventListener("DOMContentLoaded", function() {

    // ===== Intersection Observer for scroll animations (Existing Code) =====
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the item is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    
    // ===== NEW: Wobbly Button Effect =====
    
    const wobblyButtons = document.querySelectorAll('.wobbly-btn');

    wobblyButtons.forEach(button => {
        const text = button.textContent;
        button.innerHTML = ''; // Clear original text

        // Split text into letters and wrap in spans
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            // If it's a space, use a non-breaking space to maintain structure
            if (char === ' ') {
                char = '&nbsp;';
            }
            button.innerHTML += `<span>${char}</span>`;
        }
        
        const letters = button.querySelectorAll('span');

        button.addEventListener('mouseover', () => {
            letters.forEach((letter, i) => {
                setTimeout(() => {
                    letter.style.animation = 'wobble 0.5s ease-in-out 1';
                }, i * 30); // Stagger the animation
            });
        });

        button.addEventListener('mouseleave', () => {
            letters.forEach(letter => {
                // Remove animation so it can play again
                letter.style.animation = ''; 
            });
        });
    });

});
