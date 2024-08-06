import React from 'react';
import Modal from './modal';
import './../../../index.scss';
import { ModaleProps } from '../../types';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'ui/Modal',
  component: Modal
} as Meta<typeof Modal>;

const Template: StoryFn<ModaleProps> = (args) => <Modal {...args} />;

export const BasicModal = Template.bind({});

BasicModal.args = {
  show: true,
  children: (
    <div>
      <h1>Заголовок модального окна</h1>
      <p>Контент модального окна</p>
    </div>
  )
} as ModaleProps;
