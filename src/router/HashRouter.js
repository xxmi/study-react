import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HashRouter extends Component {

  state = {
    location: {
      hash: '',
      path: location.hash.slice(1) || '/',
    },
  };


  static childContextTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
  };

  getChildContext() {
    return {
      location: this.state.location,
      history: {
        push: (path) => {
          location.hash = path;
        },
      },
    };
  }

  componentDidMount() {
    let { hash } = location;
    location.hash = hash = hash === '' || hash === '#/' ? '#/home' : hash;
    this.setState({ location: { path: hash.slice(1) } });
    const handle = (e) => {
      this.setState({ location: { ...this.state.location, path: location.hash.slice(1) || '/' } });
    };
    window.addEventListener('hashchange', handle);
  }


  render() {
    return <div className="container">{this.props.children}</div>;
  }
}
