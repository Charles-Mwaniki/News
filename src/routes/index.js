import React from 'react';
import CoreLayout from '../layouts/CoreLayout';
import PublishingApp from '../layouts/PublishingApp';
import LoginView from '../views/LoginView';
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom';

export default (
    <Router>
        <Switch>
    <Route path="/about"><CoreLayout /></Route>
    <Route path="/home"><PublishingApp /></Route>
    <Route path="/login"><LoginView /></Route>
        </Switch>
    </Router>
   
);