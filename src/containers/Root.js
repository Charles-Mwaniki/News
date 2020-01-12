import React from 'react';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import routes from '../routes';
//import createHashHistory from 'history';
var createHashHistory = require('history').createHashHistory;

const noQueryKeyHistory = createHashHistory({ queryKey: false });
import propTypes from 'prop-types';

 class Root extends React.Component{
   
    render(){
        return(
            <Provider store={this.props.store}>
                <div>
                    <Router history={noQueryKeyHistory}>
                        {routes}
                    </Router>
                    
                </div>
            </Provider>
        );
    }
}

 Root.propTypes = {
    history: propTypes.object.isRequired,
    store: propTypes.object.isRequired
};

export default Root;