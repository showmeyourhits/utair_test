import PropTypes from 'prop-types';

export const SET_CITIES = 'SET_CITIES';
export const SET_DEPART_AND_ARRIVAL_CITIES = 'SET_DEPART_AND_ARRIVAL_CITIES';
export const SET_DATES = 'SET_DATES';
export const SET_PASSENGERS = 'SET_PASSENGERS';

export const MAX_PASSENGERS = 9;

export const CityPropTypes = PropTypes.shape({
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
});
