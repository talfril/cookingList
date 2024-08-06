import styles from './nameplate.module.scss';
import clsx from 'clsx';
import { NameplateProps } from '../../types';
import React from 'react';

export const NamePlate = ({ children, type = 'basic' }: NameplateProps) => (
  <div className={clsx(styles.nameplate, styles[`nameplate__${type}`])}>
    {children}
  </div>
);
