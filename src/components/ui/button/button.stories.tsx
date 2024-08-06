import React from 'react';
import Button from './button';
import './../../../index.scss';
import { ButtonProps } from '../../types';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ui/Button',
  component: Button
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const BasicButton = Template.bind({});

BasicButton.args = {
  buttonText: 'click me',
  buttonType: 'button',
  buttonImageUrl: require('../../../../public/images/icons/icon-dice-dark.png'),
  buttonOnClick: () => alert('button is clicked')
} as ButtonProps;
