(function () {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDate = new Date();

    // Holidays on specific dates
    const holidays = {
        "2024-2-11": "Holiday",
        "2024-2-21": "Holiday",
        "2024-2-22": "Holiday",
        "2024-2-23": "Holiday",
        "2024-4-18": "Holiday",
        "2024-5-2": "Holiday",
        "2024-5-23": "Holiday",
        "2024-6-16": "Holiday",
        "2024-7-10": "Holiday",
        "2024-9-23": "Holiday",
        "2024-10-12": "Holiday",
        "2024-11-1": "Holiday",
        "2024-11-11": "Holiday",
        "2024-11-22": "Holiday",
        "2024-12-17": "Holiday"
    };

    function loadCalendar() {
        const monthYear = document.getElementById("month-year");
        monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
        
        const datesContainer = document.getElementById("dates");
        datesContainer.innerHTML = "";

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Blank spaces for days before the first of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement("div");
            emptyDiv.classList.add("date");
            datesContainer.appendChild(emptyDiv);
        }

        // Adding days
        for (let day = 1; day <= daysInMonth; day++) {
            const dateElement = document.createElement("div");
            const dateKey = `${currentYear}-${currentMonth + 1}-${day}`;
            
            dateElement.classList.add("date");
            dateElement.textContent = day;
            
            const dayOfWeek = new Date(currentYear, currentMonth, day).getDay();

            // Mark holiday dates in red
            if (holidays[dateKey] || dayOfWeek === 0) { // Sundays or specific holidays
                dateElement.classList.add("holiday");
                dateElement.title = holidays[dateKey] || "Sunday"; // Tooltip with holiday or Sunday
            }

            // Highlight today's date
            if (currentDate.getDate() === day && currentDate.getMonth() === currentMonth && currentDate.getFullYear() === currentYear) {
                dateElement.classList.add("today");
            }

            datesContainer.appendChild(dateElement);
        }
    }

    function prevMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        loadCalendar();
    }

    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        loadCalendar();
    }

    // Toggle to show month view
    window.showMonthView = function () {
        document.querySelector('.calendar').classList.remove('week-view');
        loadCalendar();
    }

    // Toggle to show week view
    window.showWeekView = function () {
        document.querySelector('.calendar').classList.add('week-view');
        loadCalendar();
    }

    window.prevMonth = prevMonth;
    window.nextMonth = nextMonth;

    window.onload = loadCalendar;
})();
