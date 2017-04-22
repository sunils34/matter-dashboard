import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import SelectionButton from './SelectionButton';

storiesOf('SelectionButton', module)
  .add('with text', () => (
    <div>
      <SelectionButton onClick={action('clicked')}>Male</SelectionButton>
      <SelectionButton onClick={action('clicked')}>Female</SelectionButton>
      <SelectionButton selected onClick={action('clicked')}>Female</SelectionButton>
    </div>
  ))
  .add('with some emoji', () => (
    <SelectionButton onClick={action('clicked')}>😀 😎 👍 💯</SelectionButton>
  ));
