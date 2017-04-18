import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import reducer from 'js/reducers/reducer';
import App from 'js/components/App';

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);