import React from 'react';
import styles from 'styles/main.scss';
import HeaderContainer from 'js/containers/HeaderContainer';
import Body from 'js/components/Body';

export default class App extends React.PureComponent {
	render() {
		return(
			<div className={styles.app}>
				<HeaderContainer />
				<Body currentTab={'buy'} />
			</div>
		);
	}
}
