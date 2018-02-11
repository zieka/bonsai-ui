import React, { Component } from 'react';
import './Topic.css';

class Topic extends Component {
  render() {
    return (
      <div className="topic">
        <h3 className="topic__title f3">{this.props.title}</h3>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Topic;
