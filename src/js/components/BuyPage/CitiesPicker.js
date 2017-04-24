import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/buy_page.scss';
import {CityPropTypes} from 'js/constants/BuyConstants';

export default class ChooseCities extends React.PureComponent {
	static propTypes = {
		currentCity: CityPropTypes,
		type: PropTypes.string.isRequired,
		cities: PropTypes.arrayOf(CityPropTypes),
		getCities: PropTypes.func.isRequired,
		toggleSideComponent: PropTypes.func.isRequired,
	}

	componentDidMount() {
		const {cities, getCities} = this.props;

		if (!cities.length) {
			getCities();
		}
	}

	render() {
		const {type, cities} = this.props;

		return (
			<div className={'hi'}>
				PickCity
			</div>
		);
	}
}