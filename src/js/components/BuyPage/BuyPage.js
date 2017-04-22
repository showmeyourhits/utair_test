import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/buy_page.scss';
import ChooseDatesContainer from 'js/containers/BuyPage/ChooseDatesContainer';
import ChooseCitiesContainer from 'js/containers/BuyPage/ChooseCitiesContainer';
import ChoosePassengersContainer from 'js/containers/BuyPage/ChoosePassengersContainer';

export default class BuyTab extends React.PureComponent {
	render() {
		return (
			<div className={S.wrapper}>
				<ChooseCitiesContainer/>
				<ChooseDatesContainer/>
				<ChoosePassengersContainer/>
			</div>
		);
	}
}