let currentEvent = 1; // Track the currently displayed event

// Show the specified event
function showEvent(eventIndex) {
    const events = document.querySelectorAll('.event-content');
    // Hide all events
    events.forEach(event => event.style.display = 'none');
    
    // Show the selected event
    const eventToShow = document.getElementById(`event-${eventIndex}`);
    if (eventToShow) {
        eventToShow.style.display = 'block';
    }
}

// Change the event when clicking the arrows
function changeEvent(direction) {
    currentEvent += direction;
    
    if (currentEvent > 4) {
        currentEvent = 1; // Loop back to the first event
    } else if (currentEvent < 1) {
        currentEvent = 4; // Loop to the last event
    }

    showEvent(currentEvent);
}

// Initial load: Show the first event
showEvent(currentEvent);


