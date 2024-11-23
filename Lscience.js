function showYear(year) {
    // Hide all year modules
    document.querySelectorAll('.year-modules').forEach((module) => {
      module.style.display = 'none';
    });
  
    // Show the selected year's modules
    const selectedYear = document.getElementById(`year-${year}`);
    if (selectedYear) {
      selectedYear.style.display = 'block';
    }
  }
  
  // Initially display Year 1
  window.onload = function() {
    showYear(1);
  };
  