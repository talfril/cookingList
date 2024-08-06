import React, { useState } from 'react';
import { CookingList } from '../../cooking-list/cooking-list';
import { Summary } from '../../summary/summary';
import { SelectMenu } from '../../select-menu/select-menu';
import styles from './random-dishes-page.module.scss';

const RandomDishesPage = () => {
  const [selectedFirstDish, setSelectedFirstDish] = useState('');
  const [selectedSecondDish, setSelectedSecondDish] = useState('');

  return (
    <div className={styles.randomPageLayout}>
      <SelectMenu>
        <CookingList
          setSelectedFirstDish={setSelectedFirstDish}
          setSelectedSecondDish={setSelectedSecondDish}
        />
      </SelectMenu>
      <Summary firstDish={selectedFirstDish} secondDish={selectedSecondDish} />
    </div>
  );
};

export default RandomDishesPage;
