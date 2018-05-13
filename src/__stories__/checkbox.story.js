import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import Checkbox from '../components/molecules/checkbox/Checkbox';
import centered from '@storybook/addon-centered';

const stories = storiesOf('Components/Checkbox', module).addDecorator(
  checkA11y
);

stories.add('that starts unchecked', () => (
  <Checkbox label="Checkbox that starts unchecked" />
));

stories.add('that starts checked', () => (
  <Checkbox checked={true} label="Checkbox that starts checked" />
));
stories.add('Disabled and unchecked', () => (
  <Checkbox disabled={true} label="Disabled unchecked checkbox" />
));
stories.add('Disabled and checked', () => (
  <Checkbox disabled={true} checked={true} label="Disabled checked checkbox" />
));
