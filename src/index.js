import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reducers from './redux/reducers';

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {Provider} from 'react-redux';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers,{}, applyMiddleware(promise(), reduxThunk, logger));

ReactDOM.render(
	<Provider store={store}>
			<App />
	</Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
