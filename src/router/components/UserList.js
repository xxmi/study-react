import React, { Component } from 'react';

export default class UserList extends Component {
  state = {
    userList: [],
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let userList = localStorage.getItem('userList');
    userList = userList ? JSON.parse(userList) : [];
    this.setState({ userList });
  }

  handleDel = (user) => {
    // const { userList } = this.state;
    // for (let i = 0; i < userList.length; i++) {
    //   if (userList[i].id === user.id) {
    //     userList.splice(i, 1);
    //     break;
    //   }
    // }
    // this.setState({ userList });
    // localStorage.setItem('userList', JSON.stringify(userList));
  };

  render() {
    let { userList } = this.state;
    let length = userList.length;
    if (length > 0) {
      return <ul className="list-group">
        {userList.map((item, index) => {
          return <li className="list-group-item" key={index}>{item.username}
            &nbsp;<span onClick={this.handleDel(item)}>删除</span>
          </li>;
        })}
      </ul>;
    }
    return <div className="alter alter-info">无数据</div>;
  }
}
