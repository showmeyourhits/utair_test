import {appTabs} from 'js/constants/AppConstants';

export const getCurrentTab = state => state.AppReducer.currentTab;

export const getLinePosition = (state) => {
	const currentTab = getCurrentTab(state);
	const pos = appTabs.findIndex(tab => tab.value === currentTab);

	return `calc((100%/3) * ${pos === -1 ? 0 : pos})`
}