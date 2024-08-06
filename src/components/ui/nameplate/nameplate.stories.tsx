import React from 'react';
import { NamePlate } from './nameplate';
import './../../../index.scss';
import { NameplateProps } from '../../types';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ui/NamePlate',
  component: NamePlate
} as Meta<typeof NamePlate>;

const Template: StoryFn<NameplateProps> = (args) => <NamePlate {...args} />;

export const BasicNameplate = Template.bind({});

BasicNameplate.args = {
  children: 'Базовая плашка',
  type: 'basic'
} as NameplateProps;

export const AccentNameplate = Template.bind({});

AccentNameplate.args = {
  children: 'Акцентная плашка',
  type: 'accent'
} as NameplateProps;

export const LightNameplate = Template.bind({});

LightNameplate.args = {
  children: 'Светлая плашка',
  type: 'light'
} as NameplateProps;

export const Darkameplate = Template.bind({});

Darkameplate.args = {
  children: 'Темная плашка',
  type: 'dark'
} as NameplateProps;
