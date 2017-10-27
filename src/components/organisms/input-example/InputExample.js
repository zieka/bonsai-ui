import React, { Component } from 'react';
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

const lorem = `Eiusmod est proident labore consequat reprehenderit fugiat consequat culpa do veniam minim. In magna velit Lorem nostrud id sint in labore anim esse. Quis duis exercitation consectetur ad id elit est fugiat. Veniam sint veniam et eu irure consectetur ea labore irure labore qui incididunt adipisicing nulla nulla incididunt. Lorem exercitation aliquip est ullamco quis aute veniam nostrud amet consectetur esse cillum ex. Et enim excepteur pariatur id sint commodo dolore excepteur occaecat reprehenderit ut.`

class InputExample extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="row">
            <div className="col-6">
              <div className="input">
                <label className="input__label" for="exampleEmailInput">Your email</label>
                <input className="input__input" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
              </div>
            </div>
            <div className="col-6">
              <div className="input">
                <label className="input__label" for="exampleRecipientInput">Reason for contacting</label>
                <select className="input__input" id="exampleRecipientInput">
                  <option value="Option 1">Questions</option>
                  <option value="Option 2">Admiration</option>
                  <option value="Option 3">Can I get your number?</option>
                </select>
              </div>
            </div>
          </div>
            <div className="input">
              <label className="input__label" for="exampleMessage">Message</label>
              <textarea className="input__input" placeholder={lorem} id="exampleMessage"></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default InputExample;
