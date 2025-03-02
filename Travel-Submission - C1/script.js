// List of countries for rotating text
const countries = ["United States", "India", "France", "Germany", "Italy", "Australia"];
let index = 0;

function changeText() {
    const textElement = document.getElementById("changing-text");
    if (textElement) {
        textElement.innerText = `Visit ${countries[index]}`;
        index = (index + 1) % countries.length;
    }
}

// Ensure script runs only after DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    setInterval(changeText, 200);
});
