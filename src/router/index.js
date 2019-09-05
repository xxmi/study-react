import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HashRouter from './HashRouter';
import Route from './route';
import App from './components/App';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

ReactDOM.render(
  <HashRouter>
    <App>
      <Route path="/home" component={Home}/>
      <Route path="/user" component={User}/>
      <Route path="/profile" component={Profile}/>
    </App>
  </HashRouter>
  , document.querySelector('#root'));
