import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class UserList extends Component {
    static contextTypes = {
        history: PropTypes.object
    }

    state = {
        userList: [],
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let userList = localStorage.getItem('userList');
        userList = userList ? JSON.parse(userList) : [];
        this.setState({userList});
    }

    handleDel = (user) => {
        // 注意再写事件的时候.如：onClick={this.handleDel(item)} 这种传递 参数 的写法会导致 render 渲染的时候就
        // 执行了 handleDel 函数，从而导致错误；这是因为 this.handleDel(item) 的写法，实际上就是调用了；
        // 所以可用 onClick={()=>this.handleDel(item)} 的箭头函数来解决，就能避免上述问题
        // 注：这中写法 onClick={this.handleDel} 是不会出现上述问题。
        const {userList} = this.state;
        for (let i = 0; i < userList.length; i++) {
            if (userList[i].id === user.id) {
                userList.splice(i, 1);
                break;
            }
        }
        this.setState({userList});
        localStorage.setItem('userList', JSON.stringify(userList));
    };

    userDetail(id) {
        this.context.history.push(`/user/detail/${id}`)
    }

    render() {
        let {userList} = this.state;
        let length = userList.length;
        if (length > 0) {
            return <ul className="list-group">
                {userList.map((item, index) => {
                    return <li className="list-group-item" key={index}>
                        <a onClick={() => this.userDetail(item.id)}>{item.username}</a>
                        &nbsp;<span onClick={() => this.handleDel(item)}>删除</span>
                    </li>;
                })}
            </ul>;
        }
        return <div className="alter alter-info">无数据</div>;
    }
}
