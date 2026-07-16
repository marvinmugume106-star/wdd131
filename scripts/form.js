// Array of product objects provided in the assignment instructions
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Function to populate the product select element
function populateProducts() {
    const selectElement = document.getElementById('productName');

    products.forEach(product => {
        // Create a new option element
        const option = document.createElement('option');
        
        // Use the product 'id' for the value attribute (as per typical assignment requirements)
        option.value = product.id;
        
        // Use the product 'name' for the display text
        // Capitalize the name for a cleaner appearance, as seen in the prompt's context
        option.textContent = product.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        
        // Append the new option to the select element
        selectElement.appendChild(option);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', populateProducts);