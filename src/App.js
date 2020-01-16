import React from 'react';
import ReactDOM from 'react-dom';
import { syncReduxAndRouter} from 'redux-simple-router';
import Root from './containers/Root';
import configureStore from './store/ConfigureStore';
const target = document.getElementById('publishingAppRoot');
var createBrowserHistory = require('history').createBrowserHistory;
const history = createBrowserHistory();
export const store = configureStore(window.__INITIAL_STATE__);
//syncReduxAndRouter(history, store);

const node = (
    <Root history={history} store={store} />
);
ReactDOM.render(node, target);