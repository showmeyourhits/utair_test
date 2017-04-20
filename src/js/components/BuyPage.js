import React from 'react';
import PropTypes from 'prop-types';

export default class BuyTab extends React.PureComponent {
	static propTypes = {
	}
s
	render() {
		const {currentTab, linePosition} = this.props;

		return (
			<div>
				Wanna buy {currentTab}
			</div>
		);
	}
}