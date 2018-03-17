import React, { Component } from 'react';
import mangle from '../../../helpers/mangle';

class Checkbox extends Component {
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
      <label className="checkbox" htmlFor={mangle(this.props.label)}>
        <span className="checkbox__outer">
          <input
            type="checkbox"
            className="checkbox__input"
            disabled={this.state.disabled}
            checked={this.state.checked}
            onChange={this.handleClick}
            id={mangle(this.props.label)}
          />
          <span className="checkbox__inner" />
        </span>
        <span>{this.props.label}</span>
      </label>
    );
  }
}

export default Checkbox;
