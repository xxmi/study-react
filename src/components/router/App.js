import React, {Component} from 'react';
import Link from './Link';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/home">首页</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user">用户管理</Link>
                            </li>
                            <li className="nav-item"><Link to="/profile">个人设置</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
