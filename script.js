
const apiKey = `5c0dd6d4f434fb5209f49dfc02b1a39d`;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector(`.search input`);
const searchBtn = document.querySelector(`.search button`);
const weatherImage = document.querySelector(`.weather .weather-icon`);
const displayWeather = document.querySelector(`.weather`);
const errorMessage = document.querySelector(`.error`);
const weatherDescription = document.querySelector(`.weather-description`);


async function checkWeather(city) {


    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if (response.status === 404){
    errorMessage.style.display = `block`;
    displayWeather.classList.remove(`show`);


} else {
    errorMessage.style.display = `none`;
}

    var data = await response.json();
    console.log(data);
document.querySelector(`.city`).innerHTML = data.name;
document.querySelector(`.temp`).innerHTML = Math.round(data.main.temp) + `°C`;
document.querySelector(`.humidity`).innerHTML = data.main.humidity + `%`;
document.querySelector(`.wind`).innerHTML = data.wind.speed + ` KM/H`;

console.log(data.weather[0].description);

if (data.weather[0].main === `Clouds`){
    weatherImage.src = `images 2/clouds.png`;
    weatherDescription.textContent = data.weather[0].description;
} else if (data.weather[0].main === `Clear`){
    weatherImage.src = `images 2/clear.png`;
    weatherDescription.textContent = data.weather[0].description;
} else if (data.weather[0].main === `Drizzle`){
    weatherImage.src = `images 2/drizzle.png`;
    weatherDescription.textContent = data.weather[0].description;
} else if (data.weather[0].main === `Mist`){
weatherImage.src = `images 2/mist.png`;
weatherDescription.textContent = data.weather[0].description;

}  else if (data.weather[0].main === `Snow`){
    weatherImage.src = `images 2/snow.png`;
    weatherDescription.textContent = data.weather[0].description;
    
    }  else if (data.weather[0].main === `Rain`){
        weatherImage.src = `images 2/rain.png`;
    weatherDescription.textContent = data.weather[0].description;
        
        } 
 displayWeather.classList.add(`show`);
 searchBox.value = ``;
 

console.log(data.name);



}



searchBtn.addEventListener(`click`, () => {
checkWeather(searchBox.value)
searchBox.innerHTML = ``;


})