import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered';
import LazyLoad from 'react-lazyload';

storiesOf('Shadows', module)
  .addDecorator(checkA11y)
  .add('shadow examples', () => (
    <div>
      <h3 className="f3">Shadows</h3>
      <p>
        The .shadow-l and .shadow-h classes can be used to add box shadows to
        elements. The .shadow-l class adds a low level shadow meaning it will
        appear close to the origin plane:
      </p>
      <div style={{ textAlign: 'center' }}>
        <LazyLoad height={200}>
          <img
            className="shadow-l"
            src="http://bonsai-ui.com/hb_1920.jpg"
            alt="Bonsai with low shadow"
            width="250"
          />
        </LazyLoad>
      </div>
      <p>
        The .shadow-h class adds a high level shadow meaning it will appear
        further away from the origin plane than the lower shadow level:
      </p>
      <div style={{ textAlign: 'center' }}>
        <LazyLoad height={200}>
          <img
            className="shadow-h"
            src="http://bonsai-ui.com/hb_1920.jpg"
            alt="Bonsai with high shadow"
            width="250"
          />
        </LazyLoad>
      </div>
      <p>
        The .shadow--pop class adds a shadow on interaction with the element:
      </p>
      <div style={{ textAlign: 'center' }}>
        <LazyLoad height={200}>
          <img
            className="shadow--pop"
            src="http://bonsai-ui.com/hb_1920.jpg"
            alt="Bonsai with interactive shadows"
            width="250"
          />
        </LazyLoad>
      </div>
    </div>
  ));
