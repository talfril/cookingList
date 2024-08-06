import styles from './404.module.scss';
import React from 'react';
import clsx from 'clsx';
import { error404 } from '../../../data/textProps';
import useDevice from '../../../utils/useDevice';

const Error404: React.FC = () => {
  const device = useDevice();
  return (
    <main className={clsx(styles.main, styles[`main__${device}`])}>
      <h2 className={clsx(styles.pageTitle, styles[`pageTitle__${device}`])}>
        {error404.title}
      </h2>
      <div className={styles.error404}>4&nbsp;0&nbsp;4</div>
      <p className={styles.text}> {error404.text}</p>
    </main>
  );
};

export default Error404;
