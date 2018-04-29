import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { selectV2 } from '@storybook/addon-knobs';
import Switch from '../components/molecules/switch/Switch';
import Checkbox from '../components/molecules/checkbox/Checkbox';
import '../assets/bonsai/bonsai.css';
import centered from '@storybook/addon-centered';

storiesOf('Switch', module)
  .addDecorator(centered)
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

storiesOf('Buttons', module)
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('button demo with knobs', () => {
    const fontLabel = 'Font Size';
    const fontOptions = {
      f1: 'f1',
      f2: 'f2',
      f3: 'f3',
      f4: 'f4',
      f5: 'f5',
      f6: 'f6',
      f7: 'f7'
    };
    const fontDefaultValue = 'f5';

    const font = selectV2(fontLabel, fontOptions, fontDefaultValue);

    const shapeLabel = 'Shape';
    const shapeOptions = {
      'default (rectangle)': '',
      'circle 1': 'btn--circle-1',
      'circle 2': 'btn--circle-2',
      'circle 3': 'btn--circle-3',
      'circle 4': 'btn--circle-4',
      'circle 5': 'btn--circle-5',
      'circle 6': 'btn--circle-6',
      'circle 7': 'btn--circle-7',
      pill: 'btn--pill'
    };
    const shapeDefaultValue = 'none';

    const shape = selectV2(shapeLabel, shapeOptions, shapeDefaultValue);

    const flavorLabel = 'Flavor';
    const flavorOptions = {
      default: '',
      fill: 'btn--fill',
      danger: 'btn--danger'
    };
    const flavorDefaultValue = '';

    const flavor = selectV2(flavorLabel, flavorOptions, flavorDefaultValue);

    const isDisabled = boolean('Disabled', false);

    const shadowPop = boolean('Shadow Pop', false);

    const buttonText = text('Button Text', 'btn');

    return (
      <div>
        <button
          disabled={isDisabled}
          className={`btn ${flavor} ${shape} ${font} ${
            shadowPop ? 'shadow--pop' : ''
          }`}>
          {buttonText}
        </button>
        <div>{`<button ${
          isDisabled ? 'disabled' : ''
        } class="btn ${flavor} ${shape} ${font} ${
          shadowPop ? 'shadow--pop' : ''
        }">${buttonText}</button>`}</div>
      </div>
    );
  })
  .add('default', () => <button className="btn f6">Button Default</button>)
  .add('disabled', () => (
    <button className="btn f6 shadow--pop" disabled>
      Button Disabled
    </button>
  ))
  .add('color filled', () => (
    <button className="btn f6 btn--fill">Color Filled</button>
  ))
  .add('color filled disabled', () => (
    <button className="btn f6 btn--fill" disabled>
      Color Filled Disabled
    </button>
  ));
