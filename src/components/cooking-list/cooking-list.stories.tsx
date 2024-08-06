import React from 'react';
import CookingList from './cooking-list';
import './../../index.scss';
import { CookingListProps } from '../types';
import { Meta, StoryFn } from '@storybook/react';
import { DishesProvider } from '../../context/DishesContext';

export default {
  title: 'CookingList',
  component: CookingList
} as Meta<typeof CookingList>;

const Template: StoryFn<CookingListProps> = (args) => (
  <DishesProvider>
    <CookingList {...args} />
  </DishesProvider>
);

export const CookingListComponent = Template.bind({});

CookingListComponent.args = {
  setSelectedFirstDish: () => 'Котлета рыбная',
  setSelectedSecondDish: () => 'Пюре из брокколе'
} as CookingListProps;
