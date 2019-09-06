import React, {Component} from 'react';

export default class extends Component {
    state = {
        id: '',
        username: ''
    }

    constructor(props) {
        super(props);
        const {id} = this.props.match.params;
        let userList = localStorage.getItem('userList')
        userList = userList ? JSON.parse(userList) : [];
        let user = userList.find(item => item.id = id)
        if (user) {
            this.state = {...user};
        }
    }
    
    render() {
        return <div>编号：{this.state.id} / 姓名：{this.state.username}</div>
    }
}