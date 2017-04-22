import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/buy_page.scss'

export default class PassengerInput extends React.PureComponent {
	static propTypes = {
		number: PropTypes.number.isRequired,
		type: PropTypes.string.isRequired,
		changeValue: PropTypes.func.isRequired,
	}

	handleAdd = () => {
		
	}

	render() {
		const {number, type} = this.props;

		return (
			<div className={''}>
				<button>+</button>
				<div>
					{number}{' '}{type}
				</div>
				<button>-</button>
			</div>
		);
	}
}