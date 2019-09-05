import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

export default class Route extends Component {
  static contextTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
  };

  constructor(props) {
    super(props);
    let keys = [];
    this.regexp = pathToRegexp(this.props.path, keys, { end: false });
    console.log(keys);
    // this.keys = keys.map()
  }

  render() {
    let { component: Component } = this.props;
    return this.context.location.path === this.props.path || this.context.location.path.startsWith(this.props.path) ?
      <Component/> : null;
  }
}
