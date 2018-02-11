import React, { Component } from 'react';
import './ButtonExample.css';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';

const codeExample = `<button class="btn f6 shadow--pop">Button</button>
<button class="btn" disabled>Button Disabled</button>
`;

const codeExample2 = `<button class="btn f6 btn--fill shadow--pop">Fill</button>
<button class="btn btn--fill" disabled>Fill Disabled</button>
`;

const codeExample3 = `<button class="btn f6 btn--danger shadow--pop">Danger</button>
<button class="btn btn--danger" disabled>Danger Disabled</button>
`;

const codeExample4 = `<button class="btn f1 btn--circle-1 btn--fill shadow--pop">1</button>
<button class="btn f2 btn--circle-2 btn--fill shadow--pop">2</button>
<button class="btn f3 btn--circle-3 btn--fill shadow--pop">3</button>
<button class="btn f4 btn--circle-4 btn--fill shadow--pop">4</button>
<button class="btn f5 btn--circle-5 btn--fill shadow--pop">5</button>
<button class="btn f6 btn--circle-6 btn--fill shadow--pop">6</button>
<button class="btn f7 btn--circle-7 btn--fill shadow--pop">7</button>
`;

const codeExample5 = `<button class="btn f4 btn--circle-3 btn--fill shadow--pop">1</button>
<button class="btn f7 btn--circle-3 btn--fill shadow--pop">2</button>
`;

class ButtonExample extends Component {
  render() {
    return (
      <div>
        <h3 className="f3">Flavors</h3>
        <p>
          The standard class <code>btn</code> applies the shape and shadowing of
          the button and can be used as a default button:
        </p>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f6 shadow--pop">Button</button>
          <button className="btn f6 shadow--pop" disabled>
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
          <button className="btn f6 btn--fill shadow--pop">Fill</button>
          <button className="btn f6 btn--fill shadow--pop" disabled>
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
          <button className="btn f6 btn--danger shadow--pop">Danger</button>
          <button className="btn f6 btn--danger shadow--pop" disabled>
            Danger Disabled
          </button>
        </div>
        <CodeSnippet code={codeExample3} lang="html" />
        <h3 className="f3">Sizes</h3>
        <p>
          Buttons also scale on font size so you can define a custom font size
          or add a font-sizing class (f#) to get the button you desire:
        </p>

        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f1 btn--fill shadow--pop">add f1</button>
        </div>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f2 btn--fill shadow--pop">add f2</button>
        </div>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f3 btn--fill shadow--pop">add f3</button>
        </div>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f4 btn--fill shadow--pop">add f4</button>
        </div>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f5 btn--fill shadow--pop">add f5</button>
        </div>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f6 btn--fill shadow--pop">add f6</button>
        </div>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f7 btn--fill shadow--pop">add f7</button>
        </div>
        <h3 className="f3">Shapes</h3>
        <p>
          The <code>btn--pill</code> class adds a pill shape to the button:
        </p>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f6 btn--fill btn--pill shadow--pop">
            btn--pill
          </button>
        </div>
        <p>
          The <code>btn--circle-#</code> class adds a circle shape to buttons.
          The # in the class name is a number 1-7 which will create presized
          circles ideal for those font sizes:
        </p>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f1 btn--circle-1 btn--fill shadow--pop">
            1
          </button>
          <button className="btn f2 btn--circle-2 btn--fill shadow--pop">
            2
          </button>
          <button className="btn f3 btn--circle-3 btn--fill shadow--pop">
            3
          </button>
          <button className="btn f4 btn--circle-4 btn--fill shadow--pop">
            4
          </button>
          <button className="btn f5 btn--circle-5 btn--fill shadow--pop">
            5
          </button>
          <button className="btn f6 btn--circle-6 btn--fill shadow--pop">
            6
          </button>
          <button className="btn f7 btn--circle-7 btn--fill shadow--pop">
            7
          </button>
        </div>
        <CodeSnippet code={codeExample4} lang="html" />
        <p>A circle size does not have to match its font size:</p>
        <div style={{ margin: '1.66rem 0' }}>
          <button className="btn f4 btn--circle-3 btn--fill shadow--pop">
            Yes
          </button>

          <button
            className="btn f7 btn--circle-3 btn--fill shadow--pop"
            style={{ verticalAlign: 'bottom' }}>
            No
          </button>
        </div>
        <CodeSnippet code={codeExample5} lang="html" />
      </div>
    );
  }
}

export default ButtonExample;
