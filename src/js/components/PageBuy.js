import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {
	static propTypes = {
		currentTab: PropTypes.string,
	}

	render() {
		const {currentTab} = this.props;

		return (
			<div>
				Покупка билетов
			</div>
		);
	}
}