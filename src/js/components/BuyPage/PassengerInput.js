import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/buy_page.scss'
import WCIcon from 'react-icons/lib/md/wc';

export default class PassengerInput extends React.PureComponent {
	static propTypes = {
		number: PropTypes.number.isRequired,
		type: PropTypes.string.isRequired,
		changeValue: PropTypes.func.isRequired,
	}

	handleAdd = () => {
		const {changeValue, type, number} = this.props;
		console.log('add');

		changeValue(type, number + 1);
	}

	handleSubstract = () => {
		const {changeValue, type, number} = this.props;

		if (number > 0) {
			changeValue(type, number - 1);
		}
	}

	render() {
		const {number, type} = this.props;
		console.log('input renders');

		return (
			<div className={''}>
				<button onClick={this.handleAdd}>+</button>
				<div>
					<div>
						<span>{number}</span>
						<WCIcon size={40} />
					</div>
					<div>{type}</div>
				</div>
				<button onClick={this.handleSubstract}>-</button>
			</div>
		);
	}
}