// getdates.js

// Get current year and set it in the footer
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Get document last modified date and set it in the footer
const lastModifiedP = document.getElementById('lastModified');
if (lastModifiedP) {
    lastModifiedP.textContent = `Last modified: ${document.lastModified}`;
}
