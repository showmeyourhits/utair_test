import React from 'react';
import PropTypes from 'prop-types';
import PageBuy from 'js/components/PageBuy';

export default class Header extends React.PureComponent {
	static propTypes = {
		currentTab: PropTypes.string,
	}

	render() {
		const {currentTab} = this.props;

		switch (currentTab) {
			case 'tickets':
				return <div>My mind telling me no...</div>
			case 'registration':
				return <div>...but my body telling me yes.</div>
			case 'buy':
			default:
				return <PageBuy />
			
		}
	}
}