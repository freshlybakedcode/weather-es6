import '../scss/main.scss';
import * as ELEMENTS from './modules/elements';
import Http from './modules/http';
import { WeatherData, weatherProxyHandler } from './modules/weatherData';

const appId = '3148346af2c07ec95f525c8809b3d577';
const units = 'metric';

const updateWeather = function updateWeather(weatherData) {
  ELEMENTS.ELEMENT_WEATHER_CITY_NAME.textContent = weatherData.cityName;
  ELEMENTS.ELEMENT_WEATHER_DESCRIPTION.textContent = weatherData.description;
  ELEMENTS.ELEMENT_WEATHER_TEMPERATURE.textContent = weatherData.temperature;
  ELEMENTS.ELEMENT_WEATHER_BOX.style.display = 'block';
};

const searchWeather = function searchWeather() {
  const cityName = ELEMENTS.ELEMENT_SEARCH_CITY.value.trim();
  if (cityName.length > 0) {
    console.log(cityName);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${appId}`;
    Http.fetchData(url)
      .then((responseData) => {
        console.log(responseData);
        const currentWeatherData = new WeatherData(cityName, responseData.weather[0].description);
        const weatherProxy = new Proxy(currentWeatherData, weatherProxyHandler);
        weatherProxy.temperature = responseData.main.temp;
        updateWeather(weatherProxy);
      })
      .catch(error => console.log(error));
  }
};

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);
