import React from 'react';
import { AppHeader } from './app-header';
import './../../index.scss';
import { Meta } from '@storybook/react';

export default {
  title: 'Header',
  component: AppHeader
} as Meta<typeof AppHeader>;

const Template = () => <AppHeader />;

export const Header = Template.bind({});
