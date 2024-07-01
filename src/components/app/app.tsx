import React, { useState } from 'react';
import { AppHeader } from '../app-header/app-header';
import { CookingList } from '../cooking-list/cooking-list';
import { Summary } from '../summary/summary';
import { SelectMenu } from '../select-menu/select-menu';
import styles from './app.module.css';

const App = () => {
  const [selectedFirstDish, setSelectedFirstDish] = useState('');
  const [selectedSecondDish, setSelectedSecondDish] = useState('');

  return (
    <div className={styles.app}>
      <AppHeader />
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

export default App;
