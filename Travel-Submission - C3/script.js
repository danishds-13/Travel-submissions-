document.addEventListener("DOMContentLoaded", function () {
    const countries = ["United States", "India", "France", "Germany", "Italy", "Australia"];
    let index = 0;

    function changeText() {
        document.getElementById("changing-text").innerText = `Visit ${countries[index]}`;
        index = (index + 1) % countries.length;
    }
    setInterval(changeText, 200);

    const bookingForm = document.getElementById("booking-form");

    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const startDate = new Date(document.getElementById("start-date").value);
        const endDate = new Date(document.getElementById("end-date").value);
        const description = document.getElementById("description").value;

        const today = new Date();
        if (startDate <= today) {
            alert("Start date must be in the future.");
            return;
        }

        if (endDate <= startDate) {
            alert("End date must be later than the start date.");
            return;
        }

        if (description.length < 50 || description.length > 500) {
            alert("Description must be between 50 and 500 characters.");
            return;
        }

        alert("Booking successful!");
        bookingForm.reset();
    });

    document.querySelectorAll(".book-now-btn").forEach(button => {
        button.addEventListener("click", () => {
            alert("Package booked successfully!");
        });
    });
});
