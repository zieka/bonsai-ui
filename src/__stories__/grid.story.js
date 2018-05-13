import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import GridExample from '../components/organisms/grid-example/GridExample';
import centered from '@storybook/addon-centered';

const stories = storiesOf('Pages/Grid', module).addDecorator(checkA11y);

stories.add('Grid example', () => <GridExample />);
