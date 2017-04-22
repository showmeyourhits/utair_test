import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/buy_page.scss';

export default class BuyTab extends React.PureComponent {
	static propTypes = {
	}

	render() {
		const {currentTab, linePosition} = this.props;

		return (
			<div className={S.dates}>
				ChooseDate
			</div>
		);
	}
}