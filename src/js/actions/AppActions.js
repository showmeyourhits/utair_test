import { createAction } from 'redux-actions';
import * as types from 'js/constants/AppConstants';

export const setCurrentTab = createAction(
	types.SET_CURRENT_TAB,
	tab => ({tab})
);
