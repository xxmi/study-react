import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class HashRouter extends Component {

    state = {
        location: {
            hash: '',
            path: ''
        }
    }


    static childContextTypes = {
        location: PropTypes.object,
        history: PropTypes.object
    }

    getChildContext() {
        return {
            location: this.state.location,
            history: {
                push: (path) => {
                    this.setState({location: {path}})
                }
            }
        };
    }

    componentDidMount() {
        let {hash} = location
        this.setState({location: {path: hash.slice(1)}})
        const handle = (e) => {
            console.log(e);
        }
        window.addEventListener('hashchange ', handle)
    }


    render() {
        return <div>{this.props.children}</div>
    }
}