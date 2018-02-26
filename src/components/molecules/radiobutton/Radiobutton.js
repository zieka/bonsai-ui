import React, { Component } from 'react';

class Radiobutton extends Component {
  render() {
    return (
      <label className="radiobutton">
        <span className="radiobutton__outer">
          <input type="radio" className="radiobutton__input" />
          <span className="radiobutton__inner" />
        </span>
        <span className="radiobutton__text">Label for radiobutton</span>
      </label>
    );
  }
}

export default Radiobutton;
