import React from 'react';
import PropTypes from 'prop-types';
import S from 'styles/main.scss';

export default class SayWhat extends React.PureComponent {
	render() {
		return (
			<div className={S.say_what}>
				Say what?
			</div>
		);
	}
}