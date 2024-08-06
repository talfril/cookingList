import React from 'react';
import Error404 from './404';
import './../../../index.scss';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ui/Error404',
  component: Error404,
  decorators: [
    (Story) => (
      <div style={{ padding: '3rem' }}>
        <Story />
      </div>
    )
  ]
} as Meta<typeof Error404>;

const Template: StoryFn = () => <Error404 />;

export const BasicError404 = Template.bind({});
BasicError404.parameters = {};
