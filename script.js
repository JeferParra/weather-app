const apiKey = '8f0d83c2f7aa9d1896e2bd3c5d5b0ae8';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const inputCity = document.querySelector('.search input');
const searchCity = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data)
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°c`;
  document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
  document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;

  const weatherClouds = data.weather[0].main.toLowerCase();
  weatherIcon.src = `assets/${weatherClouds}.png`

  document.querySelector('.weather').style.display = 'block';

}

searchCity.addEventListener('click', () => {
  checkWeather(inputCity.value);
})