/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
const templesList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Declaring variables 
        const articleElement = document.createElement('article');
        const h3 = document.createElement('h3');
        // adding templeName to the h3 element
        h3.textContent = temple.templeName;

        const imgElement = document.createElement('img');
        // populating the div with elements
        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute('alt', temple.location);
        articleElement.appendChild(h3)
        articleElement.appendChild(imgElement);
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/

const getTemples = async (url) => {
    const response = await fetch(url)

    if (response.ok) {
        const data = await response.json()
        templesList.push(...data);
        displayTemples(templesList);
    }

    console.log(templesList);
}

/* reset Function */

function reset() {
    templesElement.innerHTML = "";
}

/* filterTemples Function */

const filterTemples = function (templesList) {
    reset();

    const filtered = document.getElementById('filtered').value;

    switch (filtered) {
        case "utah":
            displayTemples(templesList.filter(temples => temples.location.toLowerCase().includes('utah')));
            break;
        case "notutah":
            displayTemples(templesList.filter(temples => !temples.location.toLowerCase().includes('utah')));
            break;
        case "older":
            displayTemples(templesList.filter(temples => new Date(temples.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(templesList);
            break;
        default:
            break;
    }
}

// Uncomment the event listener
document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templesList);
});

getTemples(url);
