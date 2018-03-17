import React, { Component } from 'react';
import CodeSnippet from '../../molecules/code-snippet/CodeSnippet';
import IOInput from '../../molecules/io-input/IOInput';
import IOTextArea from '../../molecules/io-textarea/IOTextArea';

const lorem = `Enter any comments, questions, and/or concerns here`;
const codeExample = `<form>
  <div class="row">
    <div class="col-12 sm-6">
      <div class="io">
        <label class="io__label" for="emailAddress" required>Your email</label>
        <input class="io__control shadow--pop" type="email" autocomplete='email' placeholder="name@mail.com" id="emailAddress" />
      </div>
    </div>
    <div class="col-12 sm-6">
      <div class="io">
        <label class="io__label" for="reason">Reason for Contacting</label>
        <select class="io__control shadow--pop" id="reason" required>
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
      <textarea class="io__control shadow--pop" placeholder="${lorem}" id="message"></textarea>
  </div>
</form>
`;

const codeExample2 = `<div class="row">
  <div class="col-12 sm-6">
    <div class="io">
      <label class="io__label" for="readOnlyExample" required>Read Only Example</label>
      <input class="io__control" type="text" value="This text is the read only style" id="readOnlyExample" readonly="true"/>
    </div>
  </div>
  <div class="col-12 sm-6">
    <div class="io">
      <label class="io__label" for="disabledExample" required>Disabled Example</label>
      <input class="io__control" type="text" value="This text is the disabled style" id="disabledExample" disabled/>
    </div>
  </div>
</div>
`;

class InputExample extends Component {
  render() {
    return (
      <div>
        <p>
          Bonsai uses the base class <code>io</code> to wrap an input control
          and it's label.
        </p>
        <p>
          The class <code>io__label</code> can grant form styling to the label
          element, while the class <code>io__control</code> can be applied to
          the actual input control element:
        </p>
        <form>
          <div className="row">
            <div className="col-12 sm-6">
              <IOInput
                inputId="emailAddress"
                placeholder="name@mail.com"
                type="email"
                autocomplete="email"
                label="Your email"
                size="6"
              />
            </div>
            <div className="col-12 sm-6">
              <div className="io">
                <label className="io__label" htmlFor="reason">
                  Reason for Contacting
                </label>
                <select
                  className="io__control f6 shadow--pop"
                  id="reason"
                  required>
                  <option value="" hidden>
                    Select a Reason
                  </option>
                  <option value="Option 1">General Question</option>
                  <option value="Option 2">Report Issue</option>
                  <option value="Option 3">Feedback</option>
                </select>
              </div>
            </div>
          </div>
          <IOTextArea
            placeholder={lorem}
            inputId="message"
            label="message"
            size="6"
          />
        </form>
        <CodeSnippet code={codeExample} lang="html" />
        <p>There are also styles for disabled or readonly attributes:</p>
        <div className="row">
          <div className="col-12 sm-6">
            <IOInput
              inputId="readOnlyExample"
              type="text"
              label="Read Only Example"
              value="This text is the read only style"
              readonly="true"
              size="6"
            />
          </div>
          <div className="col-12 sm-6">
            <IOInput
              inputId="disabledExample"
              type="text"
              label="Disabled Example"
              value="This text is the disabled style"
              disabled="true"
              size="6"
            />
          </div>
        </div>
        <CodeSnippet code={codeExample2} lang="html" />
      </div>
    );
  }
}

export default InputExample;
