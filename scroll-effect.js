// Select the header containing the title
const header = document.querySelector('header');

// Function to determine scroll limit based on device
function getScrollLimit() {
    if (window.innerHeight <= 852) { // Mobile screen width (adjust as needed)
        return 285; // Lower scroll limit for mobile
    } else {
        return 400; // Higher scroll limit for larger screens
    }
}

// Function to handle scroll
function handleScroll() {
    const scrollLimit = getScrollLimit(); // Dynamically get the scroll limit
    if (window.scrollY > scrollLimit) {
        header.classList.add('fade-out'); // Apply fade-out to the header
    } else {
        header.classList.remove('fade-out'); // Remove fade-out when scrolled back up
    }
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);

// Optional: Recalculate scroll limit on window resize
window.addEventListener('resize', handleScroll);

