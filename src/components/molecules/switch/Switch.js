import React, { Component } from 'react';
import mangle from '../../../helpers/mangle';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: this.props.disabled,
      checked: this.props.checked || false
    };
  }

  handleClick = () => {
    this.setState({
      disabled: this.state.disabled,
      checked: !this.state.checked
    });
  };

  render() {
    return (
      <div className="switch">
        <div className="switch__outer">
          <input
            className="switch__input"
            type="checkbox"
            disabled={this.state.disabled}
            checked={this.state.checked}
            onChange={this.handleClick}
            id={mangle(this.props.label)}
          />
          <span className="switch__graphic" tabIndex="0">
            <span className="switch-inner" />
          </span>
        </div>
        <label htmlFor={mangle(this.props.label)}>{this.props.label}</label>
      </div>
    );
  }
}

export default Switch;
