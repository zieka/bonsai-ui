import React, { Component } from 'react';

class IOInput extends Component {
  render() {
    return (
      <div className="io">
        <label className="io__label" for={this.props.inputId}>
          {this.props.label}
        </label>
        <input
          className="io__control"
          type={this.props.type}
          placeholder={this.props.placeholder}
          id={this.props.inputId}
          value={this.props.value}
          readonly={this.props.readonly}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

export default IOInput;
