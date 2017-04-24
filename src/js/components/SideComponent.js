import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import S from 'styles/side.scss';
import InfoComponent from 'js/components/InfoComponent';
import What from 'js/components/SayWhat';

export default class SideComponent extends React.PureComponent {
	static propTypes = {
		sideComponent: PropTypes.string,
		toggleSideComponent: PropTypes.func.isRequired,
	}

	static transition = {
		enter: S.enter,
		enterActive: S.enter_active,
		leave: S.leave,
		leaveActive: S.leave_active,
	}

	render() {
		const {sideComponent} = this.props;

		return (
			<CSSTransitionGroup
				className={S.side_wrapper}
				transitionName={this.constructor.transition}
				transitionEnterTimeout={0}
				transitionLeaveTimeout={0}
			>
				{sideComponent ?
					<div className={S.side} key={'side'}>
						{sideComponent}
					</div>
				: null}
			</CSSTransitionGroup>
		);
	}
}