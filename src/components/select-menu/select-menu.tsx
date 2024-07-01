import React from 'react';
import styles from './select-menu.module.css';
import { AddMenu } from '../add-menu/add-menu';
import { DishesProvider } from '../../context/DishesContext';
import { SelectMenuProps } from '../types';
import clsx from 'clsx';
import useDevice from '../../utils/useDevice';

export const SelectMenu = (props: SelectMenuProps) => {
  const device = useDevice();

  return (
    <DishesProvider>
      <div className={clsx(styles.selectMenu, styles[`selectMenu__${device}`])}>
        {props.children}
      </div>
      <AddMenu />
    </DishesProvider>
  );
};

export default SelectMenu;
