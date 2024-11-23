document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// Smooth scroll for anchor links and add active state navigation 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      // Smooth scroll to target section
      target.scrollIntoView({
          behavior: 'smooth'
      });

      // Remove active class from other links
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

      // Add active class to the clicked link
      this.classList.add('active');
  });
});


document.querySelectorAll('.unique-course-button').forEach(button => {
  button.addEventListener('click', function () {
    window.location.href = 'desired-page.html'; 
  });
});



// Management team
const managementData = [
  { 
      image: "22.png", 
      name: "Tshering Wangdi", 
      role: "President"  
  },
  { 
      image: "14.png", 
      name: "Sonam Dendup", 
      role: "Dean of Academic"
  },
  { 
      image: "16.jpeg", 
      name: "Thinley Namgay", 
      role: "Dean of Student Affairs" 
  },
  { 
      image: "15.png", 
      name: "Dr.Yezer", 
      role: "Dean of Research and Industrial Linkages"
  },
];

// Function to create management team cards
function loadManagementTeam() {
  const container = document.getElementById('managementTeamContainer');
  managementData.forEach(member => {
      // Create card element
      const card = document.createElement('div');
      card.classList.add('management-card');

      // Member image
      const img = document.createElement('img');
      img.src = member.image;
      img.alt = `${member.name} photo`;
      card.appendChild(img);

      // Member info container
      const infoContainer = document.createElement('div');
      infoContainer.classList.add('management-info');

      // Member name
      const name = document.createElement('div');
      name.classList.add('management-name');
      name.textContent = member.name;
      infoContainer.appendChild(name);

      // Member role
      const role = document.createElement('div');
      role.classList.add('management-role');
      role.textContent = member.role;
      infoContainer.appendChild(role);

      // Member description
      const description = document.createElement('div');
      description.classList.add('management-description');
      description.textContent = member.description;
      infoContainer.appendChild(description);

      // Append info container to card
      card.appendChild(infoContainer);
      
      // Append card to container
      container.appendChild(card);
  });
}

// Load management team on page load
window.onload = loadManagementTeam;

const openSearch = document.getElementById('openSearch');
const closeSearch = document.getElementById('closeSearch');
const searchOverlay = document.getElementById('searchOverlay');
const searchForm = document.getElementById('searchForm');

// Open the search overlay
openSearch.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    searchOverlay.style.display = 'flex'; // Show overlay
    document.getElementById('searchInput').focus(); // Focus on the input
});

// Close the search overlay
closeSearch.addEventListener('click', function() {
    searchOverlay.style.display = 'none'; // Hide overlay
});

// Close the overlay when clicking outside the content
searchOverlay.addEventListener('click', function(event) {
    if (event.target === searchOverlay) {
        searchOverlay.style.display = 'none';
    }
});

// Handle search form submission
searchForm.addEventListener('submit', function(event) {
    const query = document.getElementById('searchInput').value.trim();
    if (query === '') {
        event.preventDefault(); // Prevent empty searches
        alert("Please enter a search term.");
    } else {
    }
});


// Mission and Vision toggle content display
function toggleMissionVisionContent(type) {
  const visionBtn = document.getElementById('visionBtn');
  const missionBtn = document.getElementById('missionBtn');
  const content = document.getElementById('content');
  
  // Set the content and active state based on type
  if (type === 'vision') {
    visionBtn.classList.add('active');
    missionBtn.classList.remove('active');
    content.innerHTML = "An internationally recognized institute in Liberal Arts and Sciences with an emphasis on GNH value-based learning.";
  } else {
    missionBtn.classList.add('active');
    visionBtn.classList.remove('active');
    content.innerHTML = "To provide GNH-inspired quality tertiary education in Liberal Arts and Sciences. To contribute to the development of a knowledge-based society through knowledge creation, sharing, and advocacy.";
  }
}


// footer
function showContent(id) {
  // Hide all content sections
  document.querySelectorAll('.info-content').forEach(section => {
      section.style.display = 'none';
  });

  // Show the selected content
  document.getElementById(id).style.display = 'block';
}

//news
// Example news data array


//event
function redirectToEventsPage() {
  window.location.href = 'event-details.html';
}


// Total Student
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // Adjust the speed of the count-up animation

        counters.forEach(counter => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    // Reset counter to 0
                    counter.innerText = '0';

                    const target = +counter.getAttribute('data-target');
                    const updateCount = () => {
                        const count = +counter.innerText;
                        const increment = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + increment);
                            setTimeout(updateCount, 20);
                        } else {
                            counter.innerText = target;
                        }
                    };

                    updateCount(); // Start the animation
                }
            });

            observer.observe(counter);
        });
    }

    document.addEventListener('DOMContentLoaded', animateCounters);


    // back to top Show or hide the button based on scroll position
window.addEventListener("scroll", function () {
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });
  
  // Scroll smoothly to the top when the button is clicked
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  













