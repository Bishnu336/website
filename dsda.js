// Show the selected year content
function showYear(year) {
    const contents = document.querySelectorAll('.year-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(`year-${year}`).classList.add('active');
}

// Smooth scroll for navigation links (Only for internal links)
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        const href = this.getAttribute('href');
        
        // Apply smooth scroll only to links that target an internal section (i.e., links starting with '#')
        if (href.startsWith('#')) {
            event.preventDefault(); // Prevent default link behavior
            const target = document.querySelector(href); // Find the target element
            target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target element
        }
    });
});





