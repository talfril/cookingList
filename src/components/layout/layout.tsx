import React from 'react';
import styles from './layout.module.scss';
import useDevice from '../../utils/useDevice';
import clsx from 'clsx';
import { AppHeader } from '../app-header/app-header';
import { Outlet } from 'react-router-dom';
import Navigation from '../navigation/navigation';

const Layout = () => {
  const device = useDevice();
  console.log(device);

  return (
    <div className={clsx(styles.layout, styles[`layout__${device}`])}>
      <AppHeader />
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
