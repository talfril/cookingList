import React from 'react';
import About from './about';
import './../../../index.scss';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ui/About',
  component: About,
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta<typeof About>;

const Template: StoryFn = () => <About />;

export const BasicAbout = Template.bind({});
BasicAbout.parameters = {};
