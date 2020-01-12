import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';

function configureStore(initialState, debug=false){
    let createStoreWithMiddleware;
    const middleware = applyMiddleware(thunk);
    createStoreWithMiddleware = compose(middleware);
    const store = createStoreWithMiddleware(createStore)(rootReducer,initialState);
    return store;
}

export default configureStore;