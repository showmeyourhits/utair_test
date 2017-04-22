import { createAction } from 'redux-actions';
import {showNotification} from 'js/actions/AppActions';
import * as types from 'js/constants/BuyConstants';

export const setCities = createAction(
	types.SET_CITIES,
	(cities) => ({cities})
);

export const getCities = dispatch => {
	return fetch('/something')
		.then(response => {
			const cities = response.results;
			dispatch(setCities(cities.map(city => ({id: city.id, title: city.city}))));
		})
		.catch(error => {
			showNotification('get_cities_error', error);
		})
}

export const setDates = createAction(
	types.SET_DATES,
	(depart, arrival) => ({
		depart,
		arrival: arrival < depart ? arrival : null,
	})
);

export const setDepartAndArrivalCities = createAction(
	types.SET_DEPART_AND_ARRIVAL_CITIES,
	(depart, arrival) => ({depart, arrival})
);

export const setPassengers = createAction(
	types.SET_PASSENGERS,
	(humans, kids, babies) => ({
		passengers: {
			humans: Number(humans),
			kids: Number(kids),
			babies: Number(babies),
		},
	})
);

