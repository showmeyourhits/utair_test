import {handleActions} from 'redux-actions';
import m from 'moment';
import * as types from 'js/constants/BuyConstants';

const initialState = {
	cities: [],
	cityDepart: null,
	cityArrival: null,
	dateDepart: m().format('YYYY-MM-DD'),
	dateArrival: null,
	passengers: {
		humans: 1,
		kids: 0,
		babies: 0,
	},
};

export default handleActions({
	[types.SET_CITIES]: (state, {payload: {cities}}) => ({
		...state,
		cities,
	}),
	[types.SET_DEPART_AND_ARRIVAL_CITIES]: (state, {payload: {depart, arrival}}) => ({
		...state,
		cityDepart: depart,
		cityArrival: arrival,
	}),
	[types.SET_DATES]: (state, {payload: {depart, arrival}}) => ({
		...state,
		dateDepart: depart,
		dateArrival: arrival,
	}),
	[types.SET_PASSENGERS]: (state, {payload: {passengers}}) => ({
		...state,
		passengers,
	}),
}, initialState);