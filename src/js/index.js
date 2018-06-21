import '../scss/main.scss';
import * as ELEMENTS from './elements';

const searchWeather = function searchWeather() {
  const cityName = ELEMENTS.ELEMENT_SEARCH_CITY.value.trim();
  console.log(cityName);
};

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);
