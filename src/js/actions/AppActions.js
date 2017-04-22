import { createAction } from 'redux-actions';
import * as types from 'js/constants/AppConstants';

export const setCurrentTab = createAction(
	types.SET_CURRENT_TAB,
	tab => ({tab})
);

export const toggleSideComponent = createAction(
	types.TOGGLE_SIDE_COMPONENT,
	(component = null) => ({component})
);

export const showNotification = (text_id) => {
	console.log(text_id);
}
