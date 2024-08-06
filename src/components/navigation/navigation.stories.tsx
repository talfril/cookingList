import React from 'react';
import Navigation from './navigation';
import './../../index.scss';
import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta<typeof Navigation>;

const Template: StoryFn = (args) => <Navigation {...args} />;

export const NavigationMenu = Template.bind({});
NavigationMenu.args = {};
