import React from 'react';
import CardComponent from './card-component';
import './../../../index.scss';
import { CardComponentProps } from '../../types';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../button/button';

export default {
  title: 'ui/Card',
  component: CardComponent
} as Meta<typeof CardComponent>;

const Template: StoryFn<CardComponentProps> = (args) => (
  <CardComponent {...args} />
);

export const BasicCard = Template.bind({});

BasicCard.args = {
  cardTitle: 'Заголовок карточки',
  cardInner: (
    <div>Внутренняя часть карточки, текстовое и функциональное наполнение</div>
  ),
  cardButton: <Button buttonType='button' buttonText='Кнопка карточки' />
} as CardComponentProps;
