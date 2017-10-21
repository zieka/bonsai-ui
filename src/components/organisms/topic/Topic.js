import React, { Component } from 'react';
import './Topic.css';

class Topic extends Component {
  render() {
    return (
      <div className="topic">
        <h4 className="topic__title">{this.props.title}</h4>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Topic;
