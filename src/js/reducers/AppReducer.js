import {handleActions} from 'redux-actions';
import * as types from 'js/constants/AppConstants';

const initialState = {
	currentTab: 'buy',
	sideComponent: null,
};

export default handleActions({
	[types.SET_CURRENT_TAB]: (state, {payload: {tab}}) => ({
		...state,
		currentTab: tab,
	}),
	[types.TOGGLE_SIDE_COMPONENT]: (state, {payload: {component}}) => ({
		...state,
		sideComponent: component,
	}),
}, initialState);