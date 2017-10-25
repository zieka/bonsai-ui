import React, { Component } from 'react';
import './ButtonExample.css';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';

const codeExample = `<button class="button">Button</button>
<button class="button" disabled>Button Disabled</button>
`;

const codeExample2 = `<button class="button button--fill">Fill</button>
<button class="button button--fill" disabled>Fill Disabled</button>
`;

const codeExample3 = `<button class="button button--danger">Danger</button>
<button class="button button--danger" disabled>Danger Disabled</button>
`;

class ButtonExample extends Component {
  render() {
    return (
      <div>
        <p>
          Buttons come in three flavors:
        </p>
        <p>
          The standard class <code>button</code> applies the shape and shadowing
          of the button and can be used as a default button:
        </p>
        <div style={{'margin':'1.66rem 0'}}>
          <button className="button">Button</button>
          <button className="button" disabled>Button Disabled</button>
        </div>
        <CodeSnippet code={codeExample} lang="html"/>
        <p>
          The modifier class <code>button--fill</code> creates a <strong>colored</strong> button
          which should be used to visually guide the user to the next step:
        </p>
        <div style={{'margin':'1.66rem 0'}}>
          <button className="button button--fill">Fill</button>
          <button className="button button--fill" disabled>Fill Disabled</button>
        </div>
        <CodeSnippet code={codeExample2} lang="html"/>
          <p>
            The modifier class <code>button--danger</code> creates a <strong>cautionary</strong> button
            and should be used to alert the user to a potentially negative action:
          </p>
          <div style={{'margin':'1.66rem 0'}}>
            <button className="button button--danger">Danger</button>
            <button className="button button--danger" disabled>Danger Disabled</button>
          </div>
          <CodeSnippet code={codeExample3} lang="html"/>
      </div>
    );
  }
}

export default ButtonExample;
