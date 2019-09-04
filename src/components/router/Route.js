import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Route extends Component {
  static contextTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    let { component: Component } = this.props;
    return this.context.location.path === this.props.path || this.context.location.path.startsWith(this.props.path) ?
      <Component/> : null;
  }
}
