import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/side.scss';
import ArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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

	hide = () => this.props.toggleSideComponent()

	render() {
		const {sideComponent} = this.props;
		console.log(this.constructor.transition);

		return (
			<CSSTransitionGroup
				className={S.side_wrapper}
				transitionName={this.constructor.transition}
				transitionEnterTimeout={0}
				transitionLeaveTimeout={0}
			>
				{sideComponent ? (
					<div className={S.side} key="somekey">
						<button onClick={this.hide}>
							<ArrowLeft size={30} />
						</button>
						{sideComponent}
					</div>
				) : null}
			</CSSTransitionGroup>
		);
	}
}