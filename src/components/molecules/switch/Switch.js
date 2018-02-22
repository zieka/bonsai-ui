import React, { Component } from 'react';

class Switch extends Component {
  render() {
    return (
      <div class="switch">
        <input className="switch__input" type="checkbox" />
        <span className="switch__graphic" tabindex="0">
          <span className="switch-inner" />
        </span>
      </div>
    );
  }
}

export default Switch;
