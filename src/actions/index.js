import axios from 'axios';

const API_KEY = "bc0eb82b39f724a479722be5b01754ec";
const ROOT_URL =`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&type=accurate`

export const FETCH_WEATHER= 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}