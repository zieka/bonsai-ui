import React, { Component } from 'react';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';

const codeExample = `<form>
  <div class="row">
    <div class="col-12 col-sm-6">
      <div class="io">
        <label class="io__label" for="emailAddress" required>Your email</label>
        <input class="io__control" type="email" placeholder="name@mail.com" id="emailAddress" />
      </div>
    </div>
    <div class="col-12 col-sm-6">
      <div class="io">
        <label class="io__label" for="reason">Reason for Contacting</label>
        <select class="io__control" id="reason" required>
          <option value="" hidden>Select a Reason</option>
          <option value="Option 1">General Question</option>
          <option value="Option 2">Report Issue</option>
          <option value="Option 3">Feedback</option>
        </select>
      </div>
    </div>
  </div>
    <div class="io">
      <label class="io__label" for="message" required>Message</label>
      <textarea class="io__control" placeholder="Eiusmod est proident ..." id="message"></textarea>
  </div>
</form>
`;

const codeExample2 = `<button class="button button--fill">Fill</button>
<button class="button button--fill" disabled>Fill Disabled</button>
`;

const codeExample3 = `<button class="button button--danger">Danger</button>
<button class="button button--danger" disabled>Danger Disabled</button>
`;

const lorem = `Eiusmod est proident labore consequat reprehenderit fugiat consequat culpa do veniam minim. In magna velit Lorem nostrud id sint in labore anim esse. Quis duis exercitation consectetur ad id elit est fugiat. Veniam sint veniam et eu irure consectetur ea labore irure labore qui incididunt adipisicing nulla nulla incididunt. Lorem exercitation aliquip est ullamco quis aute veniam nostrud amet consectetur esse cillum ex. Et enim excepteur pariatur id sint commodo dolore excepteur occaecat reprehenderit ut.`

class InputExample extends Component {
  render() {
    return (
      <div>
        <p>
          Bonsai uses the base class <code>io</code> to wrap an input control and it's label.
        </p>
        <p>
          The class <code>io__label</code> can grant form styling to the label element,
          while the class <code>io__control</code> can be applied to the actual input
          control element:
        </p>
        <form>
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="io">
                <label className="io__label" for="emailAddress" required>Your email</label>
                <input className="io__control" type="email" placeholder="name@mail.com" id="emailAddress" />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="io">
                <label className="io__label" for="reason">Reason for Contacting</label>
                <select className="io__control" id="reason" required>
                  <option value="" hidden>Select a Reason</option>
                  <option value="Option 1">General Question</option>
                  <option value="Option 2">Report Issue</option>
                  <option value="Option 3">Feedback</option>
                </select>
              </div>
            </div>
          </div>
            <div className="io">
              <label className="io__label" for="message" required>Message</label>
              <textarea className="io__control" placeholder={lorem} id="message"></textarea>
          </div>
        </form>
        <CodeSnippet code={codeExample} lang="html"/>
          <p>
            There are also styles for disabled or readonly attributes:
          </p>
          <div className="row">
            <div className="col-12 col-sm-6">
              <div className="io">
                <label className="io__label" for="readOnlyExample" required>Read Only Example</label>
                <input className="io__control" type="text" value="This text is the read only style" id="readOnlyExample" readonly="true"/>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="io">
                <label className="io__label" for="disabledExample" required>Disabled Example</label>
                <input className="io__control" type="text" value="This text is the disabled style" id="disabledExample" disabled/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default InputExample;
