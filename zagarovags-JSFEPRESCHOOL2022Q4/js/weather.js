const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city=document.querySelector('.city');
const wind=document.querySelector('.wind');
const humidity=document.querySelector('.humidity');
const weatherError=document.querySelector('.weather-error');

async function getWeather(cityName){
    weatherError.textContent='';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=en&appid=bd7bfaab8d03303457a742c88cc154a4&units=metric`;
    const res=await fetch(url);
    const data=await res.json();
    if(data.cod=='404'){
        weatherError.textContent=`Error! City not found for ${cityName}!`
    }
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent=`Wind speed: ${Math.floor(data.wind.speed)} m/s`;
    humidity.textContent=`Humidity: ${Math.floor(data.main.humidity)} %`;
};

export {getWeather, city};