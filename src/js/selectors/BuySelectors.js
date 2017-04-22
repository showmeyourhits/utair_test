export const getCityDepart = state => state.BuyReducer.cityDepart;
export const getCityArrival = state => state.BuyReducer.cityArrival;

export const getDateDepart = state => state.BuyReducer.dateDepart;
export const getDateArrival = state => state.BuyReducer.dateArrival;

export const getPassengers = state => state.BuyReducer.passengers;

export const getCities = state => state.BuyReducer.cities;

export const getFilteredCities = state => {
	const depart = getCityDepart(state) || {};
	const arrival = getCityArrival(state) || {};
	const cities = getCities(state);

	return cities.filter(city => !(city === depart || city === arrival));
}