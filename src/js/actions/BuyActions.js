import { createAction } from 'redux-actions';
import {showNotification} from 'js/actions/AppActions';
import * as types from 'js/constants/BuyConstants';

export const setCities = createAction(
	types.SET_CITIES,
	(cities) => ({cities})
);

export const getCities = () => dispatch => {
	return fetch('/cities')
		.then(response => {
			response.json().then(res => {
				dispatch(setCities(res.results.map(city => ({id: city.id, title: city.city}))));
			});
		})
		.catch(error => {
			showNotification('get_cities_error', error);
		});
};

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
	(newPassengers) => ({
		passengers: newPassengers,
	})
);
