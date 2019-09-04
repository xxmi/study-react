import React from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter, Route} from 'react-router-dom';
import { HashRouter, Route, App } from './components/router';

const Home = (props) => {
  console.log(props);
  console.log(location);
  return <div>首页</div>;
};
const User = () => <div>用户中心</div>;
const Profile = () => <div>个人设置</div>;

ReactDOM.render(
  <HashRouter>
    <App>
      <Route path="/user" component={User}/>
      <Route path="/home" component={Home}/>
      <Route path="/profile" component={Profile}/>
    </App>
  </HashRouter>
  , document.querySelector('#root'));
