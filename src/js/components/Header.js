import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/header.scss';
import {appTabs} from 'js/constants/AppConstants';
import PlaneIcon from 'react-icons/lib/md/airplanemode-active';
import InfoIcon from 'react-icons/lib/md/info-outline';

export default class Header extends React.PureComponent {
	static propTypes = {
		currentTab: PropTypes.string.isRequired,
		linePosition: PropTypes.string.isRequired,
		setCurrentTab: PropTypes.func.isRequired,
		toggleSideComponent: PropTypes.func.isRequired,
	}

	changeTab = (event, value, other) => {
		const {setCurrentTab} = this.props;

		setCurrentTab(event.target.dataset.value);
	}

	showInfo = () => this.props.toggleSideComponent('info')

	render() {
		const {currentTab, linePosition} = this.props;

		return (
			<div className={S.header}>
				<div className={S.row}>
					<div className={S.logo}><PlaneIcon size={40} /></div>
					<div className={S.icon} onClick={this.showInfo}><InfoIcon size={30} /></div>
				</div>
				<div className={S.row}>
					{appTabs.map(tab => (
						<div
							className={S.tab}
							data-value={tab.value}
							onClick={this.changeTab}
							key={tab.value}
						>
							{tab.title}
						</div>
					))}
				</div>
				<div className={S.line} style={{left: linePosition}}></div>
			</div>
		);
	}
}