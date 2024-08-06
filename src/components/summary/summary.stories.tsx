import React from 'react';
import Summary from './summary';
import './../../index.scss';
import { SummaryProps } from '../types';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Summary',
  component: Summary
} as Meta<typeof Summary>;

const Template: StoryFn<SummaryProps> = (args) => <Summary {...args} />;

export const SummaryFooter = Template.bind({});

SummaryFooter.args = {
  firstDish: 'Котлета',
  secondDish: 'Картошка фри'
} as SummaryProps;
