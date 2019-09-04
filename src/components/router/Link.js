import React, { Component } from 'react';

export default class Link extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {

  };

  render() {
    return <a onClick={this.handleClick}>{this.props.children}</a>;
  }
}
