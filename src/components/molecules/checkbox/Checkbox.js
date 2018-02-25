import React, { Component } from 'react';

class Checkbox extends Component {
  render() {
    return (
      <label className="checkbox">
        <span className="checkbox__outer">
          <input type="checkbox" className="checkbox__input" />
          <span className="checkbox__inner" />
        </span>
        <span className="checkbox__text">Label for Checkbox</span>
      </label>
    );
  }
}

export default Checkbox;
