import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.PureComponent {
	static propTypes = {
		currentTab: PropTypes.string,
		setCurrentTab:PropTypes.func.isRequired,
	}

	changeTab = (event) => {
		const {setCurrentTab} = this.props;

		setCurrentTab(event.target.textContent);
	}

	render() {
		const {currentTab} = this.props;

		return (
			<div>
				<ul>
					<li onClick={this.changeTab}>tickets</li>
					<li onClick={this.changeTab}>registration</li>
					<li onClick={this.changeTab}>buy</li>
				</ul>
			</div>
		);
	}
}