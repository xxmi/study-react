import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HashRouter from './HashRouter';
import Route from './route';
import App from './components/App';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Switch from "./Switch";
import Protected from "./Protected";
import Login from "./components/Login";

ReactDOM.render(
    <HashRouter>
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/login" component={Login}/>
                <Protected path="/profile" component={Profile}/>
            </Switch>
        </App>
    </HashRouter>
    , document.querySelector('#root'));
