import React from 'react';
import styles from './card-components.module.scss';
import useDevice from '../../../utils/useDevice';
import clsx from 'clsx';
import { CardComponentProps } from '../../types';

const CardComponent: React.FC<CardComponentProps> = ({
  cardTitle,
  cardInner,
  cardButton
}) => {
  const device = useDevice();

  return (
    <div className={clsx(styles.card, styles[`card__${device}`])}>
      <h2>{cardTitle}</h2>
      <div>{cardInner}</div>
      <div>{cardButton}</div>
    </div>
  );
};

export default CardComponent;
