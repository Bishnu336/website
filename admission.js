// JavaScript for form handling and basic interactivity

// Function to handle form submission
function handleSubmit(event) {
    // Prevent the form from submitting the usual way (page reload)
    event.preventDefault();
  
    // Get form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const schoolCaptain = document.getElementById('schoolCaptain').checked;
  
    // Validate form input
    if (!name || !email || !schoolCaptain) {
      alert('Please fill in all fields and check the School Captain box.');
      return false;
    }
  
    // Simulate successful submission
    alert(`Thank you, ${name}! Your application has been submitted successfully.`);
    
    // Reset the form
    document.getElementById('scholarshipForm').reset();
    return true;
  }
  
  // Smooth scroll function to navigate to a specific section
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  