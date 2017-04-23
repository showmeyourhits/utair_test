import React from 'react';
import PropTypes from 'prop-types';
import {MAX_PASSENGERS} from 'js/constants/BuyConstants';
import S from 'styles/buy_page.scss'
import PassengerInput from 'js/components/BuyPage/PassengerInput'; 

/**
 * @param {object} passengers
 * @returns {object} result
 */
const validatePassengers = (passengers) => {
	const {humans, kids, babies} = passengers;
	let ok = true;
	let msg;

	if (humans + kids + babies > MAX_PASSENGERS) {
		ok = false;
		msg = 'too_many_passengers';
	} else if (babies > humans) {
		ok = false;
		msg = 'too_many_babies';
	} else if (humans < 1) {
		ok = false;
		msg = 'too_few_humans';
	}

	return {ok, msg};
}

export default class BuyTab extends React.PureComponent {
	static propTypes = {
		passengers: PropTypes.shape({
			humans: PropTypes.number,
			kids: PropTypes.number,
			babies: PropTypes.number,
		}).isRequired,
		setPassengers: PropTypes.func.isRequired,
		showNotification: PropTypes.func.isRequired,
	}

	handleChange = (type, number) => {
		const {passengers, setPassengers, showNotification} = this.props;
		const newPassengers = Object.assign({}, passengers, {[type]: number});
		const result = validatePassengers(newPassengers);

		if (result.ok) {
			setPassengers(newPassengers);
		} else {
			showNotification(result.msg);
		}
	}

	render() {
		const {passengers} = this.props;

		return (
			<div className={S.passengers}>
				{Object.keys(passengers).map(type => (
					<PassengerInput
						key={type}
						type={type}
						number={passengers[type]}
						changeValue={this.handleChange}
					/>
				))}
			</div>
		);
	}
}