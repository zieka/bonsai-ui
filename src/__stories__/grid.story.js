import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import GridExample from '../components/organisms/grid-example/GridExample';
import centered from '@storybook/addon-centered';

storiesOf('Grid', module)
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .add('Grid example', () => <GridExample />);
