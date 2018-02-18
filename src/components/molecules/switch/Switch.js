import React, { Component } from 'react';

class Switch extends Component {
  render() {
    return (
      <div>
        <span className="switch" tabindex="0">
          <span className="switch-inner">
            <i className="icon-check" />
          </span>
        </span>
      </div>
    );
  }
}

export default Switch;
