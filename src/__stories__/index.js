import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import Switch from '../components/molecules/switch/Switch';
import Checkbox from '../components/molecules/checkbox/Checkbox';
import '../assets/bonsai/bonsai.css';

storiesOf('Switch', module)
  .addDecorator(checkA11y)
  .add('that starts unchecked', () => (
    <Switch label="Switch that starts unchecked" />
  ))
  .add('that starts checked', () => (
    <Switch checked={true} label="Switch that starts checked" />
  ))
  .add('Disabled and unchecked', () => (
    <Switch disabled={true} label="Disabled unchecked switch" />
  ))
  .add('Disabled and checked', () => (
    <Switch disabled={true} checked={true} label="Disabled checked switch" />
  ));

storiesOf('Checkbox', module)
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
