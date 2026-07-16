// --- Footer Section ---
// Get the current year and display it in the footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Get the last modified date of the document and display it
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
document.getElementById("lastmodified").textContent = lastModified.toLocaleDateString("en-US", options);

// --- Wind Chill Section ---
// Static variables for temperature and wind speed
const temperature = 10; // in Celsius
const windSpeed = 5; // in km/h

// Function to calculate the wind chill
function calculateWindChill(temp, speed) {
    // Check if conditions for calculation are met (temp <= 10 C and speed > 4.8 km/h)
    if (temp <= 10 && speed > 4.8) {
        // Wind chill formula for metric units
        const windChill = 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
        return windChill.toFixed(1); // Return the value rounded to one decimal place
    } else {
        return "N/A"; // Return N/A if conditions are not met
    }
}

// Get the wind chill element from the HTML
const windChillElement = document.getElementById("wind-chill");

// Call the function and update the wind chill display
windChillElement.textContent = calculateWindChill(temperature, windSpeed);