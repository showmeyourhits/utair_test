import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/main.scss';
import BuyPageContainer from 'js/containers/BuyPageContainer';

export default class Body extends React.PureComponent {
	static propTypes = {
		currentTab: PropTypes.string,
	}

	render() {
		const {currentTab} = this.props;

		let component;

		switch (currentTab) {
			case 'tickets':
				 component = <div>My mind telling me no...</div>;
				 break;
			case 'registration':
				component = <div>...but my body telling me yes.</div>
				break;
			case 'buy':
			default:
				component = <BuyPageContainer />;
				break;
		}

		return (
			<div className={S.tab_body}>
				{component}
			</div>
		)
	}
}