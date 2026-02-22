document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    const interval = 10000; // 5 seconds
    const transitionDuration = 600; // Must match CSS transition duration
    let currentSlide = 0;

    // Check if slides exist to avoid errors on pages without slider
    if (slides.length === 0) return;

    // Initialize first slide as active if none are set
    if (!document.querySelector('.hero-slide.active')) {
        slides[0].classList.add('active');
    }

    const nextSlide = () => {
        const prevIndex = currentSlide;
        const nextIndex = (currentSlide + 1) % slides.length;
        
        const prevEl = slides[prevIndex];
        const nextEl = slides[nextIndex];

        // Ensure next slide is ready (at start position, no transition classes)
        nextEl.classList.remove('prev', 'active', 'no-transition');

        // Trigger transition
        // Current slide exits to left
        prevEl.classList.add('prev');
        prevEl.classList.remove('active');
        
        // Next slide enters from right
        nextEl.classList.add('active');

        // Update index
        currentSlide = nextIndex;

        // Cleanup after transition
        setTimeout(() => {
            // Disable transition to snap back instantly
            prevEl.classList.add('no-transition');
            prevEl.classList.remove('prev'); // Snaps to default state (translateX(100%))
            
            // Force reflow to ensure the snap happens without transition
            void prevEl.offsetWidth; 
            
            // Re-enable transition for next time
            prevEl.classList.remove('no-transition');
        }, transitionDuration);
    };

    // Set interval to change slides automatically
    setInterval(nextSlide, interval);
});
