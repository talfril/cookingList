import React from 'react';
import {
  selectedDish,
  bonAppetit,
  noSelectedDishes
} from '../../data/textProps';
import styles from './summary.module.css';

export type SummaryProps = {
  firstDish: string;
  secondDish: string;
};

export const Summary: React.FC<SummaryProps> = ({ firstDish, secondDish }) => (
  <div className={styles.summary}>
    {firstDish ? <h3>{selectedDish}</h3> : <h3>{noSelectedDishes}</h3>}
    <div className={styles.dishesBlock}>
      {firstDish && <div className={styles.selectedDish}>{firstDish}</div>}
      {firstDish && secondDish && <div className={styles.plus}>+</div>}
      {secondDish && <div className={styles.selectedDish}>{secondDish}</div>}
    </div>
    {firstDish && <div className={styles.bonAppetit}>{bonAppetit}</div>}
  </div>
);

export default Summary;
