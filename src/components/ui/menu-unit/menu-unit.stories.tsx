import React from 'react';
import MenuUnit from './menu-unit';
import './../../../index.scss';
import { MenuUnitProps } from '../../types';
import { Meta, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'ui/MenuUnit',
  component: MenuUnit,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} as Meta<typeof MenuUnit>;

const Template: StoryFn<MenuUnitProps> = (args) => <MenuUnit {...args} />;

export const BasicMenuUnit = Template.bind({});
BasicMenuUnit.args = {
  children: 'Главная',
  link: '/'
} as MenuUnitProps;
