import React, { Component } from 'react';
import './Topic.css';

class Topic extends Component {
  render() {
    return (
      <div className="topic">
        <h5 className="topic__title f4">{this.props.title}</h5>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Topic;
