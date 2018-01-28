import React, { Component } from 'react';
import Prism from '@maji/react-prism';
import 'prismjs/themes/prism.css';
import './CodeSnippet.css';

class CodeSnippet extends Component {
  render() {
    return (
      <div>
        <Prism language={this.props.lang}>{this.props.code}</Prism>
      </div>
    );
  }
}

export default CodeSnippet;
