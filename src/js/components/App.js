import React from 'react';
import S from 'styles/main.scss';
import HeaderContainer from 'js/containers/HeaderContainer';
import BodyContainer from 'js/containers/BodyContainer';

export default class App extends React.PureComponent {
	render() {
		return(
			<div className={S.app}>
				<HeaderContainer />
				<BodyContainer />
			</div>
		);
	}
}
