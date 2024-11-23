// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Scroll smoothly to the target element
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  // Scroll-to-Top Button
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.textContent = '↑ Top';
  scrollTopBtn.classList.add('scroll-to-top');
  document.body.appendChild(scrollTopBtn);
  
  // Show/Hide Scroll-to-Top Button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
  
  // Scroll to Top on Button Click
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  