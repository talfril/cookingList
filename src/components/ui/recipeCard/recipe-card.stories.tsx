import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RecipeCard from './recipe-card';
import { recipesMock } from '../../../data/recipesMock';
import { RecipeCardProps } from '../../types';

export default {
  title: 'ui/RecipeCard',
  component: RecipeCard
} as Meta<typeof RecipeCard>;

const Template: StoryFn<RecipeCardProps> = (args) => <RecipeCard {...args} />;

export const BasicRecipeCard = Template.bind({});
BasicRecipeCard.args = {
  recipe: recipesMock.data[0],
  onClick: () => {}
};
