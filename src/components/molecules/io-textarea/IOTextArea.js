import React, { Component } from 'react';

class IOTextArea extends Component {
  render() {
    return (
      <div className="io">
        <label className="io__label" for={this.props.inputId}>{this.props.label}</label>
        <textarea className="io__control"
          id={this.props.inputId}
          autofocus={this.props.autofocus}
          cols={this.props.cols}
          dirname={this.props.dirname}
          disabled={this.props.disabled}
          form={this.props.form}
          maxlength={this.props.maxlength}
          name={this.props.name}
          placeholder={this.props.placeholder}
          readonly={this.props.readonly}
          required={this.props.required}
          rows={this.props.rows}
          wrap={this.props.wrap}>
        {this.children}
        </textarea>
      </div>
    );
  }
};

export default IOTextArea;
