import React, { Component } from 'react';

class Checkbox extends Component {
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
      <label className="checkbox">
        <span className="checkbox__outer">
          <input
            type="checkbox"
            className="checkbox__input"
            disabled={this.state.disabled}
            checked={this.state.checked}
            onClick={this.handleClick}
          />
          <span className="checkbox__inner" />
        </span>
        <span className="checkbox__text">{this.props.label}</span>
      </label>
    );
  }
}

export default Checkbox;
