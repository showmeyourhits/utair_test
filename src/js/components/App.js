import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/main.scss';
import HeaderContainer from 'js/containers/HeaderContainer';
import BodyContainer from 'js/containers/BodyContainer';
import SideContainer from 'js/containers/SideContainer';

export default class App extends React.PureComponent {
	static propTypes = {
		sideComponent: PropTypes.func,
	}

	render() {
		const {sideComponent} = this.props;
		return(
			<div className={S.app}>
				<HeaderContainer />
				<BodyContainer />
				<SideContainer />
			</div>
		);
	}
}
