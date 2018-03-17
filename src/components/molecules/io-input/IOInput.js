import React, { Component } from 'react';

class IOInput extends Component {
  render() {
    return (
      <div className="io">
        <label className="io__label" htmlFor={this.props.inputId}>
          {this.props.label}
        </label>
        <input
          className={`io__control f${this.props.size} shadow--pop`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          id={this.props.inputId}
          value={this.props.value}
          readOnly={this.props.readonly}
          disabled={this.props.disabled}
          autoComplete={this.props.autocomplete}
        />
      </div>
    );
  }
}

export default IOInput;
