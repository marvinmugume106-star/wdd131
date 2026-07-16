// Function to handle the review counter logic using localStorage
function updateReviewCounter() {
    // 1. Get the current count from localStorage, defaulting to 0 if not set
    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

    // 2. Increment the counter for the successful submission
    // Since review.html is the action page, it loads only after submission.
    reviewCount += 1;

    // 3. Save the new count back to localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // 4. Update the display on the confirmation page
    const displayElement = document.getElementById('reviewCountDisplay');
    if (displayElement) {
        // Use a singular/plural check for better grammar
        const reviewWord = reviewCount === 1 ? 'review' : 'reviews';
        displayElement.textContent = `${reviewCount} ${reviewWord}`;
    }
}

// Execute the function when the review.html page loads
document.addEventListener('DOMContentLoaded', updateReviewCounter);// Function to handle the review counter logic using localStorage
function updateReviewCounter() {
    // 1. Get the current count from localStorage, defaulting to 0 if not set
    let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;

    // 2. Increment the counter for the successful submission
    // Since review.html is the action page, it loads only after submission.
    reviewCount += 1;

    // 3. Save the new count back to localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // 4. Update the display on the confirmation page
    const displayElement = document.getElementById('reviewCountDisplay');
    if (displayElement) {
        // Use a singular/plural check for better grammar
        const reviewWord = reviewCount === 1 ? 'review' : 'reviews';
        displayElement.textContent = `${reviewCount} ${reviewWord}`;
    }
}

// Execute the function when the review.html page loads
document.addEventListener('DOMContentLoaded', updateReviewCounter);