import React, { Component } from 'react';

class Switch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: this.props.disabled,
      checked: this.props.checked
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
      <div class="switch">
        <div class="switch__outer">
          <input
            className="switch__input"
            type="checkbox"
            disabled={this.state.disabled}
            checked={this.state.checked}
            onClick={this.handleClick}
          />
          <span className="switch__graphic" tabindex="0">
            <span className="switch-inner" />
          </span>
        </div>
        <span className="switch__text">{this.props.label}</span>
      </div>
    );
  }
}

export default Switch;
