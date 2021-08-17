import React from 'react';
import { PrimaryButton } from './Button';
import { storiesOf } from '@storybook/react';





const stories = storiesOf('Button', module);

stories.add('button', () => <PrimaryButton />);