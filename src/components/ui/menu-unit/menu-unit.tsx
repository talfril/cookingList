import styles from './menu-unit.module.scss';
import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { MenuUnitProps } from '../../types';

const MenuUnit: React.FC<MenuUnitProps> = ({ children, link }) => (
  <li className={clsx(styles.menuUnit)}>
    <Link to={link}>{children}</Link>
  </li>
);

export default MenuUnit;
