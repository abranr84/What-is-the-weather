let button = document.querySelector('#search-button');
let searchInput = document.querySelector('#search-city-input');
let city = document.querySelector('#current-day-city');
let temp = document.querySelector('#current-day-temp');
let wind = document.querySelector('#current-day-humidity');


let APIKey = "46125bbc6eca33917f97835bb7522ce6";
let weatherBaseEndpoint = "http://api.openweathermap.org/geo/1.0/direct?q="

let getWeatherByCityName = async (city) => {
    let endpoint = weatherBaseEndpoint + '&q=' + searchInput + '&appid=' + APIKey;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}

button.addEventListener('click', async (e) => {
    let weather = await getWeatherByCityName(searchInput.value);
    console.log(weather);
})

let updateCurrentWeather = (data) => {
    city.textContent = data.name + ', ' + data.sys.country;
}