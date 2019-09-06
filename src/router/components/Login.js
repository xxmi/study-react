import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
    static contextTypes = {
        history: PropTypes.object
    }
    handleLogin = () => {
        localStorage.setItem('login', 'success')
        let from = localStorage.getItem('from');
        this.context.history.push(from ? from : '/home');
    }

    render() {
        return <button onClick={this.handleLogin}>登陆</button>;
    }
}