import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/buy_page.scss';
import {CityPropTypes} from 'js/constants/BuyConstants';
import CitiesPickerContainer from 'js/containers/BuyPage/CitiesPickerContainer';

export default class ChooseCities extends React.PureComponent {
	static propTypes = {
		currentCity: CityPropTypes,
		type: PropTypes.string.isRequired,
		toggleSideComponent: PropTypes.func.isRequired,
	}

	static cityPlaceholder = {
		depart: 'Откуда',
		arrival: 'Куда',
	}

	showCityPicker = () => {
		const {toggleSideComponent, type, currentCity} = this.props;
		toggleSideComponent(<CitiesPickerContainer currentCity={currentCity} type={type} />)
	}

	render() {
		const {currentCity, type} = this.props;

		return (
			<div className={'ass'} onClick={this.showCityPicker}>
				{currentCity ? currentCity.title : this.constructor.cityPlaceholder[type]}
			</div>
		);
	}
}