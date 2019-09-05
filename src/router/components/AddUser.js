import React, { Component } from 'react';

export default class AddUser extends Component {
  state = {
    username: '',
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let username = this.username.value.trim();
    if (!username) return;
    let userList = localStorage.getItem('userList');
    userList = userList ? JSON.parse(userList) : [];
    userList.push({ id: new Date().valueOf(), username });
    console.log('userList', userList);
    localStorage.setItem('userList', JSON.stringify(userList));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">用户姓名：</label>
          <div className="col-sm-10">
            <input className="form-control" type="text" ref={(input) => this.username = input}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">保存</button>
      </form>
    );
  }
}
