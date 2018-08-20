import axios from 'axios';

const API_KEY = 'd9ee20c81247cbc7079cb9bbd49fcc23';
const root_url = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather (city) {
  const url = `${root_url}&q=${city},us`;
  const request = axios.get(url);	


	return {
		type: FETCH_WEATHER,
		payload: request
	};
}