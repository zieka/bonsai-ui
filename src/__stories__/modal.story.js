import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

const stories = storiesOf('Components/Modal', module).addDecorator(checkA11y);

stories.add('Modal open example', () => {
  return (
    <div className="modal">
      <div className="modal__box">
        <div className="modal__header">
          <div className="modal__title">Modal Title</div>
          <div className="modal__close" />
        </div>
        <div className="modal__body"> content </div>
        <div className="modal__footer">
          <button className="btn f6 btn--fill ml1 shadow--pop">Continue</button>
          <button className="btn f6 ml1 shadow--pop">Cancel</button>
        </div>
      </div>
    </div>
  );
});
