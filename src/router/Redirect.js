import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Redirect extends Component {
    static  contextTypes = {
        history: PropTypes.object
    }

    constructor(props) {
        super(props);
        localStorage.setItem('from', props.from);
    }

    componentDidMount() {
        this.context.history.push(this.props.to);
    }

    render() {
        return null;
    }
}