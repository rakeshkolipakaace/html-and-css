document.addEventListener("DOMContentLoaded", function () {
    const daysContainer = document.querySelector(".days");
    const monthDisplay = document.querySelector(".month");
    const yearDisplay = document.querySelector(".year");
    const prevMonthBtn = document.querySelector(".prev-month");
    const nextMonthBtn = document.querySelector(".next-month");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function renderCalendar(month, year) {
        daysContainer.innerHTML = ""; // Clear previous days

        const firstDay = new Date(year, month, 1).getDay(); // Get starting weekday
        const totalDays = new Date(year, month + 1, 0).getDate(); // Get total days

        monthDisplay.textContent = new Intl.DateTimeFormat("en-US", { month: "long" }).format(new Date(year, month));
        yearDisplay.textContent = year;

        // Fill empty days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            let emptyDiv = document.createElement("div");
            emptyDiv.classList.add("empty");
            daysContainer.appendChild(emptyDiv);
        }

        // Fill actual days
        for (let day = 1; day <= totalDays; day++) {
            let dayDiv = document.createElement("div");
            dayDiv.textContent = day;
            dayDiv.classList.add("calendar-day");
            daysContainer.appendChild(dayDiv);

            // Highlight today's date
            if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                dayDiv.classList.add("today");
            }
        }
    }

    // Event Listeners for navigation
    prevMonthBtn.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    renderCalendar(currentMonth, currentYear); // Initial render
});
