// scripts/filtered.js

// 1ï¸âƒ£ Temple Data Array
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima PerÃº",
        location: "Lima, PerÃº",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/457d18284a3214df5942ad5b9557d806444b2d1b/full/1600%2C/0/default"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/882909eb6a835276e4dd9519b93cad9da6e223a3/full/1600%2C/0/default"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52959,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/0e85ee02f9c7079448ade5ad4b8b0505a07b4231/full/800%2C/0/default"
    }
];

// Helper functions
function getDedicatedYear(dateStr) {
    return parseInt(dateStr.split(",")[0]);
}

function getTempleType(temple) {
    const year = getDedicatedYear(temple.dedicated);
    let type = [];
    if (year < 1900) type.push("old");
    else if (year >= 2000) type.push("new");
    if (temple.area >= 90000) type.push("large");
    else if (temple.area < 90000) type.push("small");
    return type.join(" ");
}

// 2ï¸âƒ£ Render Function
const templeGrid = document.getElementById("templeGrid");

function renderTemples(list) {
        templeGrid.innerHTML = "";
        if (!list || list.length === 0) {
                const p = document.createElement('p');
                p.textContent = 'No temples match that filter.';
                templeGrid.appendChild(p);
                return;
        }
        list.forEach((t, i) => {
                const figure = document.createElement("figure");
                figure.setAttribute("data-type", getTempleType(t));
                // Improve LCP by prioritizing the first visible image
                const isFirst = i === 0;
                const loadingAttr = isFirst ? 'eager' : 'lazy';
                const fetchPriority = isFirst ? 'high' : 'low';
                figure.innerHTML = `
            <img src="${t.imageUrl}" alt="${t.templeName}" loading="${loadingAttr}" decoding="async" width="400" height="220" fetchpriority="${fetchPriority}">
            <figcaption>${t.templeName}</figcaption>
            <div class="temple-meta">
                <div><strong>Location:</strong> ${t.location}</div>
                <div><strong>Dedicated:</strong> ${t.dedicated}</div>
                <div><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</div>
            </div>
        `;
                templeGrid.appendChild(figure);
        });
}

// 3ï¸âƒ£ Filter Logic
function filterTemples(type) {
    if (type === "all") {
        return temples;
    } else {
        return temples.filter(t => getTempleType(t).includes(type));
    }
}

// Set active link
function setActiveFilter(filter) {
    document.querySelectorAll('.filter-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelectorAll(`.filter-link[data-filter="${filter}"]`).forEach(link => {
        link.classList.add('active');
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !expanded);
            mobileNav.classList.toggle('active');
        });
    }

    // Event Listeners for Navigation
    renderTemples(temples);
    setActiveFilter('all');
    document.querySelectorAll(".filter-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); // Prevents page reload
            const filter = link.getAttribute("data-filter");
            setActiveFilter(filter);
            renderTemples(filterTemples(filter));
            // Close mobile menu after clicking a filter
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Footer Updates
    document.getElementById("currentYear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

});