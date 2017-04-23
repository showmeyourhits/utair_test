import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import S from 'styles/side.scss';
import ArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';
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

	getSideTitle = () => {
		const {sideComponent} = this.props;

		switch (sideComponent) {
			case 'info':
				return 'Справка';
			default:
				return 'Say what';
		}
	}

	renderSideBody = () => {
		const {sideComponent} = this.props;

		switch (sideComponent) {
			case 'info':
				return <InfoComponent />;
			default:
				return <What/>;
		}
	}



	hide = () => this.props.toggleSideComponent()

	render() {
		const {sideComponent} = this.props;

		return (
			<CSSTransitionGroup
				className={S.side_wrapper}
				transitionName={this.constructor.transition}
				transitionEnterTimeout={0}
				transitionLeaveTimeout={0}
			>
				{sideComponent ? (
					<div className={S.side} key={sideComponent}>
						<div className="header">
							<button className={S.btn_back} onClick={this.hide}>
								<ArrowLeft size={30} />
							</button>
							<span>{this.getSideTitle()}</span>
						</div>
						{this.renderSideBody()}
					</div>
				) : null}
			</CSSTransitionGroup>
		);
	}
}