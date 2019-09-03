import React from 'react';
import ReactDOM from 'react-dom';
// import {HashRouter, Route} from 'react-router-dom';
import {HashRouter, Route} from './components/router';

const Home = (props) => {
    console.log(props);
    return <div>首页</div>;
}
const User = () => <div>用户中心</div>
const Profile = () => <div>个人设置</div>

ReactDOM.render(
    <HashRouter>
        <div>
            <Route path="/home" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/profile" component={Profile}/>
        </div>
    </HashRouter>
    , document.querySelector('#root'))