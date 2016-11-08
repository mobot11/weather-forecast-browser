import axios from 'axios'

const API_KEY = 'b365a2971d07cce973a471aa84749283'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

//middlewares are functions that take an action, and depending on the
//actions type, can do tasks on the actions before they reach the reducer

//gatekeeper analogy

//middlewares allow us to do interesting things by intercepting these actions

//can have many different pieces of middleware

export const FETCH_WEATHER = 'FETCH_WEATHER'




export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`
	const request = axios.get(url)

	//returning promise as payload
	return {
		type: FETCH_WEATHER,
		payload: request
	}
}