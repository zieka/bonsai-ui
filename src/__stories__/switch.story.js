import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import Switch from '../components/molecules/switch/Switch';
import centered from '@storybook/addon-centered';

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
