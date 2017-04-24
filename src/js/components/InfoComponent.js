import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/main.scss';
import ArrowLeft from 'react-icons/lib/md/keyboard-arrow-left';

export default class InfoComponent extends React.PureComponent {
	render() {
		return (
			<div>
				<div className="header">
					<button className={S.btn_back} onClick={() => this.props.hide()}>
						<ArrowLeft size={30} />
					</button>
					<span>Справка</span>
				</div>
				<div>Info</div>
			</div>
		);
	}
}