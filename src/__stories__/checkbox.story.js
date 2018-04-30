import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import Checkbox from '../components/molecules/checkbox/Checkbox';
import centered from '@storybook/addon-centered';

storiesOf('Checkbox', module)
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .add('that starts unchecked', () => (
    <Checkbox label="Checkbox that starts unchecked" />
  ))
  .add('that starts checked', () => (
    <Checkbox checked={true} label="Checkbox that starts checked" />
  ))
  .add('Disabled and unchecked', () => (
    <Checkbox disabled={true} label="Disabled unchecked checkbox" />
  ))
  .add('Disabled and checked', () => (
    <Checkbox
      disabled={true}
      checked={true}
      label="Disabled checked checkbox"
    />
  ));
