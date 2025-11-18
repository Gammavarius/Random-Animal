const showButton = document.querySelector('.select-button');
const countryFilter = document.getElementById('country-select');
const imageContainer = document.querySelector('.image-container');

function getCountries() {
    const countries = animals.map(animal => animal.country);
    const uniqueCountries = [...new Set(countries)];
    return uniqueCountries.sort();
}

function createCountryFilter() {
    const uniqueCountries = getCountries();

    while(countryFilter.children.length > 1 ) {
        countryFilter.removeChild(countryFilter.lastChild);
    }

    uniqueCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countryFilter.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createCountryFilter();
})

function showAnimal() {
    const selectedCountry = countryFilter.value;
    let filteredAnimals = animals;

    if (selectedCountry != 'all') {
        filteredAnimals = animals.filter(animal => animal.country === selectedCountry);
    }
    else {
        filteredAnimals = animals;
    }
    if(filteredAnimals.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * filteredAnimals.length);
    return filteredAnimals[randomIndex];
}

function imageCard(animal) {
    if(!animal) {
        imageContainer.innerHTML = `<p class="error">
        Для выбранной страны животных не найдено. Попробуйте другую страну.
        </p>`
        return;
    }
    imageContainer.innerHTML = `
    <div class="card">
        <h2 class="animal.name">${animal.name}</h2>
        <img src=${animal.image} alt=${animal.name} class="animal.image">
        <p class="animal.country">${animal.country}</p>
    </div>
    `;
}

function loadingProcess() {
    imageContainer.innerHTML = `<p class="loading">Подбираем животное...</p>`
}

showButton.addEventListener('click', function() {
    loadingProcess();

    setTimeout(() => {
        const randomAnimal = showAnimal();
        imageCard(randomAnimal);
    }, 500);
   
})
