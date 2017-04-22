import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/main.scss';
import BuyPageContainer from 'js/containers/BuyPage/BuyPageContainer';
import SayWhat from 'js/components/SayWhat';

export default class Body extends React.PureComponent {
	static propTypes = {
		currentTab: PropTypes.string,
	}

	render() {
		const {currentTab} = this.props;

		let component;

		switch (currentTab) {
			case 'tickets':
				component = <SayWhat />
				break;
			case 'registration':
				component = <SayWhat />
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