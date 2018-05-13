import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import InputExample from '../components/organisms/input-example/InputExample';
import centered from '@storybook/addon-centered';

const stories = storiesOf('Pages/Inputs', module).addDecorator(checkA11y);

stories.add('Inputs example', () => <InputExample />);
