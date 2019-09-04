import React, { Component } from 'react';
import Link from './Link';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  // render() {
  //   return (
  //     <div>
  //       <div className="header">
  //         <Link to="/home">首页</Link>
  //         <Link to="/user">用户管理</Link>
  //         <Link to="profile">个人设置</Link>
  //       </div>
  //       <div className="container">
  //         {this.props.children}
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    return <div>
      <div className="header">
        <Link to="/home">首页</Link>
      </div>
      <div className="container">
        {this.props.children}
      </div>
    </div>;
  }
}
