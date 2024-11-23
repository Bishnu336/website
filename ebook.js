// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const resources = document.querySelectorAll('.resource');

    // Function to add 'visible' class when element is in viewport
    const handleScroll = () => {
        resources.forEach(resource => {
            const rect = resource.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {  // Check if the element is in view
                resource.classList.add('visible');
            }
        });
    };

    // Run on scroll and on page load
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
