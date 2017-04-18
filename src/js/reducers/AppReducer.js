import {handleActions} from 'redux-actions';
import * as types from 'js/constants/AppConstants';

const initialState = {
	currentTab: 'buy',
};

export default handleActions({
	[types.SET_CURRENT_TAB]: (state, {payload: {tab}}) => ({
		...state,
		currentTab: tab,
	}),
}, initialState);