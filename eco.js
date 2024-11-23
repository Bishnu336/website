function showYear(year) {
    const contents = document.querySelectorAll('.year-content');
    contents.forEach(content => content.style.display = 'none');
    document.getElementById(`year-${year}`).style.display = 'block';
}

// Initialize to show Year I content by default
document.addEventListener("DOMContentLoaded", () => {
    showYear(1);
});


