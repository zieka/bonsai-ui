import React, { Component } from 'react';
import './ButtonExample.css';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';

const codeExample = `<button class="button">Button</button>
<button class="button" disabled>Button Disabled</button>
`;

const codeExample2 = `<button class="button button--fill">Primary</button>
<button class="button button--fill" disabled>Primary Disabled</button>
`;

class ButtonExample extends Component {
  render() {
    return (
      <div>
        <p>
          Buttons come in two basic flavors:
        </p>
        <p>
          The standard class <code>button</code> is <strong>plain</strong> and <strong>rectangular</strong>:
        </p>
        <div style={{'margin':'1.66rem 0'}}>
          <button className="button">Button</button>
          <button className="button" disabled>Button Disabled</button>
        </div>
        <CodeSnippet code={codeExample} lang="html"/>
        <p>
          The modifier class <code>button--fill</code> creates <strong>colored</strong> buttons:
        </p>
        <div style={{'margin':'1.66rem 0'}}>
          <button className="button button--fill">Fill</button>
          <button className="button button--fill" disabled>Fill Disabled</button>
        </div>
        <CodeSnippet code={codeExample2} lang="html"/>
      </div>
    );
  }
}

export default ButtonExample;
