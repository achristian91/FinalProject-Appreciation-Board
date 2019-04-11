import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Portal from './views/Portal/portal';
import Home from './views/Home/home';
import Feed from './views/Feed/feed';
import Login from './views/Login/login';
import Signup from './views/Signup/signup';
import registerServiceWorker from './registerServiceWorker';

import "./assets/scss/material-kit-react.css?v=1.3.0";
/* Here we will create our routes right off the bat in order to 
prevent the user from getting very far in our app without authentication. */
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/portal" component={Portal} />
            <Route exact path="/feed" component={Feed} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
