import React from 'react';
import ReactDOM from 'react-dom';

const CustomComponent = ({someFukenProp, color}) => {
	return (
		<div style={{color}}>
			{someFukenProp}
		</div>
	);
}

ReactDOM.render(
  <CustomComponent
  	someFukenProp="bustin makes me feel good"
	color="red"
  />,
  document.getElementById('app')
);