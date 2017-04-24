import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/buy_page.scss';
import CityInput from 'js/components/BuyPage/CityInput.js';
import {CityPropTypes} from 'js/constants/BuyConstants';

export default class ChooseCities extends React.PureComponent {
	static propTypes = {
		cityDepart: CityPropTypes,
		cityArrival: CityPropTypes,
		toggleSideComponent: PropTypes.func.isRequired,
	}

	render() {
		const {cityDepart, cityArrival, toggleSideComponent} = this.props;

		return (
			<div className={S.cities}>
				<CityInput
					type="depart"
					currentCity={cityDepart}
					toggleSideComponent={toggleSideComponent}
				/>
				<CityInput
					type="arrival"
					currentCity={cityArrival}
					toggleSideComponent={toggleSideComponent}
				/>
			</div>
		);
	}
}