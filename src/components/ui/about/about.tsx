import styles from './about.module.scss';
import React from 'react';
import clsx from 'clsx';
import { aboutTitle, aboutText } from '../../../data/textProps';
import useDevice from '../../../utils/useDevice';

const About: React.FC = () => {
  const device = useDevice();
  return (
    <main className={clsx(styles.main, styles[`main__${device}`])}>
      <h2 className={clsx(styles.pageTitle, styles[`pageTitle__${device}`])}>
        {aboutTitle}
      </h2>
      <p className={clsx(styles.text, styles[`text__${device}`])}>
        {aboutText[1]}
      </p>
      <p className={clsx(styles.text, styles[`text__${device}`])}>
        {aboutText[2]}
      </p>
      <p className={clsx(styles.text, styles[`text__${device}`])}>
        {aboutText[3]}
      </p>
    </main>
  );
};

export default About;
