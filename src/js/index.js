import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import reducer from 'js/reducers/reducer';
import AppContainer from 'js/containers/AppContainer';

const store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('app')
);