import React, {Component} from 'react';
import Link from './Link';
import Route from '../Route';
import AddUser from './AddUser';
import UserList from './UserList';
import UserDetail from './UserDetail';


export default class User extends Component {
    render() {
        console.log('User.render')
        return (
            <div className="row" style={{marginTop: '20px'}}>
                <div className="col-3">
                    <div className="nav flex-column nav-pills">
                        <Link to="/user/add">添加用户</Link>
                        <Link to="/user/list">用户列表</Link>
                    </div>
                </div>
                <div className="col-9">
                    <Route path="/user/add" component={AddUser}/>
                    <Route path="/user/list" component={UserList}/>
                    <Route path="/user/detail/:id" component={UserDetail}/>
                </div>
            </div>
        );
    }
}
