import React, {Component} from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

export default class Route extends Component {
    static contextTypes = {
        location: PropTypes.object,
        history: PropTypes.object,
    };

    constructor(props) {
        super(props);
    }

    render() {
        let keys = [];
        let regexp = pathToRegexp(this.props.path, keys, {end: false});
        keys = keys.map(item => item.name)
        let {component: Component, render} = this.props;
        let {location, location: {path}, history} = this.context;
        let result = path.match(regexp);
        if (!result && !render) return null;

        let [url, ...values] = result;

        let props = {
            location,
            history,
            match: {
                url,
                path,
                params: keys.reduce((memo, key, index) => {
                    memo[key] = values[index]
                    return memo;
                }, {})
            }
        };
        if (Component) {
            return <Component {...props}/>
        }
        return render(props);
    }
}
