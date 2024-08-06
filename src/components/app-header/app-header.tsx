import styles from './app-header.module.scss';
import React from 'react';
import { mainTitle, subTitle } from '../../data/textProps';
import clsx from 'clsx';
import useDevice from '../../utils/useDevice';

export const AppHeader = () => {
  const device = useDevice();

  return (
    <header className={clsx(styles.header, styles[`header__${device}`])}>
      <h1 className={clsx(styles.mainTitle, styles[`mainTitle__${device}`])}>
        {mainTitle}
      </h1>
      <div className={clsx(styles.subTitle, styles[`subTitle__${device}`])}>
        {subTitle}
      </div>
    </header>
  );
};
