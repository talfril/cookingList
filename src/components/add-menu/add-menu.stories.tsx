import React from 'react';
import { AddMenu } from './add-menu';
import './../../index.scss';
import { Meta, StoryFn } from '@storybook/react';
import { DishesProvider } from '../../context/DishesContext';

export default {
  title: 'AddMenu',
  component: AddMenu
} as Meta<typeof AddMenu>;

const Template: StoryFn<React.ComponentProps<typeof AddMenu>> = (args) => (
  <DishesProvider>
    <AddMenu {...args} />
  </DishesProvider>
);

export const AddDishesMenu = Template.bind({});

AddDishesMenu.args = {
  onClose: () => alert('menu is closed')
};
