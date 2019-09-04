import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Link extends Component {

    static contextTypes = {
        location: PropTypes.object,
        history: PropTypes.object,
    }

    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.context.history.push(this.props.to)
    };

    render() {
        return <a className="nav-link" style={{cursor: 'pointer'}} onClick={this.handleClick}>{this.props.children}</a>;
    }
}
