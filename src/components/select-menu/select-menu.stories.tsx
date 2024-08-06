import React from 'react';
import SelectMenu from './select-menu';
import './../../index.scss';
import { SelectMenuProps } from '../types';
import { Meta, StoryFn } from '@storybook/react';
import CookingList from '../cooking-list/cooking-list';

export default {
  title: 'SelectMenu',
  component: SelectMenu
} as Meta<typeof SelectMenu>;

const Template: StoryFn<SelectMenuProps> = (args) => <SelectMenu {...args} />;

export const SelectMenuComponent = Template.bind({});

SelectMenuComponent.args = {
  children: (
    <CookingList
      setSelectedFirstDish={() => 'Котлета рыбная'}
      setSelectedSecondDish={() => 'Брокколи'}
    />
  )
} as SelectMenuProps;
