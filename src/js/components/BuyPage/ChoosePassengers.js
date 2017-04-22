import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/buy_page.scss'
import PassengerInput from 'js/components/BuyPage/PassengerInput'; 

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
		console.log(type, number);
	}

	render() {
		const {passengers} = this.props;

		return (
			<div className={S.passengers}>
				{Object.keys(passengers).map(type => (
					<PassengerInput
						type={type}
						number={passengers[type]}
						changeValue={this.handleChange}
					/>
				))}
			</div>
		);
	}
}