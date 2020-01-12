import React from 'react';
import ReactDOM from 'react-dom';
var createBrowserHistory = require('history').createBrowserHistory;
import { syncReduxAndRouter} from 'redux-simple-router';
import Root from './containers/Root';
import configureStore from './store/ConfigureStore';
const target = document.getElementById('publishingAppRoot');
const history = createBrowserHistory();
export const store = configureStore(window.__INITIAL_STATE__);
console.log(typeof syncReduxAndRouter(history, store));

const node = (
    <Root history={history} store={store} />
);
ReactDOM.render(node, target);