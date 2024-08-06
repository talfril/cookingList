import React from 'react';
import {
  selectedDish,
  bonAppetit,
  noSelectedDishes
} from '../../data/textProps';
import styles from './summary.module.scss';
import { SummaryProps } from '../types';
import { NamePlate } from '../ui/nameplate/nameplate';

export const Summary: React.FC<SummaryProps> = ({ firstDish, secondDish }) => (
  <div className={styles.summary}>
    {firstDish ? <h3>{selectedDish}</h3> : <h3>{noSelectedDishes}</h3>}
    <div className={styles.dishesBlock}>
      {firstDish && <NamePlate type='accent'>{firstDish}</NamePlate>}
      {firstDish && secondDish && <div className={styles.plus}>+</div>}
      {secondDish && <NamePlate type='accent'>{secondDish}</NamePlate>}
    </div>
    {firstDish && <div className={styles.bonAppetit}>{bonAppetit}</div>}
    <a
      className={styles.iconsLink}
      href='https://icons8.com'
      target='_blank'
      rel='noopener noreferrer'
    >
      В работе использованы иконки icons8.com
    </a>
  </div>
);

export default Summary;
