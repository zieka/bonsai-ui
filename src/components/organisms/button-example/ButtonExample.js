import React, { Component } from 'react';
import './ButtonExample.css';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';

const codeExample = `<button class="btn shadow--pop">Button</button>
<button class="btn" disabled>Button Disabled</button>
`;

const codeExample2 = `<button class="btn btn--fill shadow--pop">Fill</button>
<button class="btn btn--fill" disabled>Fill Disabled</button>
`;

const codeExample3 = `<button class="btn btn--danger shadow--pop">Danger</button>
<button class="btn btn--danger" disabled>Danger Disabled</button>
`;

class ButtonExample extends Component {
  render() {
    return (
      <div>
        <p>Buttons come in three flavors:</p>
        <p>
          The standard class <code>btn</code> applies the shape and shadowing of
          the button and can be used as a default button:
        </p>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn shadow--pop">Button</button>
          <button className="btn shadow--pop" disabled>
            Button Disabled
          </button>
        </div>
        <CodeSnippet code={codeExample} lang="html" />
        <p>
          The modifier class <code>btn--fill</code> creates a{' '}
          <strong>colored</strong> button which should be used to visually guide
          the user to the next step:
        </p>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn btn--fill shadow--pop">Fill</button>
          <button className="btn btn--fill shadow--pop" disabled>
            Fill Disabled
          </button>
        </div>
        <CodeSnippet code={codeExample2} lang="html" />
        <p>
          The modifier class <code>btn--danger</code> creates a{' '}
          <strong>cautionary</strong> button and should be used to alert the
          user to a potentially negative action:
        </p>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn btn--danger shadow--pop">Danger</button>
          <button className="btn btn--danger shadow--pop" disabled>
            Danger Disabled
          </button>
        </div>
        <CodeSnippet code={codeExample3} lang="html" />
      </div>
    );
  }
}

export default ButtonExample;
