import React, { useState } from 'react';
import styles from './cooking-list.module.css';
import {
  firstDishTitle,
  secondDishTitle,
  randomButtonText
} from '../../data/textProps';
import { useDishes } from '../../context/DishesContext';
import useDevice from '../../utils/useDevice';
// import clsx from 'clsx';
import CardComponent from '../card-component/card-component';
import { CookingListProps } from '../types';

export const CookingList: React.FC<CookingListProps> = ({
  setSelectedFirstDish,
  setSelectedSecondDish
}) => {
  const { firstDishes, secondDishes } = useDishes();
  const device = useDevice();
  console.log(device);
  const [selectedFirstDish, setSelectedFirstDishState] = useState<{
    name: string;
    isFull: boolean;
  } | null>(null);
  const [selectedSecondDish, setSelectedSecondDishState] = useState<string>('');

  const handleFirstDishChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedDish = firstDishes.find(
      (dish) => dish.name === event.target.value
    );
    if (selectedDish) {
      setSelectedFirstDish(selectedDish.name);
      setSelectedFirstDishState({
        name: selectedDish.name,
        isFull: selectedDish.isFull!
      });
      if (selectedDish.isFull) {
        setSelectedSecondDish('');
        setSelectedSecondDishState('');
      }
    }
  };

  const selectRandomFirstDish = () => {
    const randomIndex = Math.floor(Math.random() * firstDishes.length);
    const selectedDish = firstDishes[randomIndex];
    setSelectedFirstDish(selectedDish.name);
    setSelectedFirstDishState({
      name: selectedDish.name,
      isFull: selectedDish.isFull!
    });
    if (selectedDish.isFull) {
      setSelectedSecondDish('');
      setSelectedSecondDishState('');
    }
  };

  const selectRandomSecondDish = () => {
    const randomIndex = Math.floor(Math.random() * secondDishes.length);
    const selectedDish = secondDishes[randomIndex];
    setSelectedSecondDish(selectedDish.name);
    setSelectedSecondDishState(selectedDish.name);
  };

  return (
    <>
      <CardComponent
        cardTitle={firstDishTitle}
        cardInner={
          <select
            value={selectedFirstDish ? selectedFirstDish.name : ''}
            onChange={handleFirstDishChange}
            className={styles.dropdown}
          >
            <option value=''>Выберите блюдо</option>
            {firstDishes.map((dish) => (
              <option key={dish._id} value={dish.name}>
                {dish.name}
              </option>
            ))}
          </select>
        }
        cardButton={
          <button onClick={selectRandomFirstDish}>{randomButtonText}</button>
        }
      />

      {selectedFirstDish && !selectedFirstDish.isFull && (
        <CardComponent
          cardTitle={secondDishTitle}
          cardInner={
            <select
              value={selectedSecondDish}
              onChange={(e) => {
                setSelectedSecondDish(e.target.value);
                setSelectedSecondDishState(e.target.value);
              }}
              className={styles.dropdown}
            >
              <option value=''>Выберите блюдо</option>
              {secondDishes.map((dish) => (
                <option key={dish._id} value={dish.name}>
                  {dish.name}
                </option>
              ))}
            </select>
          }
          cardButton={
            <button onClick={selectRandomSecondDish}>{randomButtonText}</button>
          }
        />
      )}
    </>
  );
};

export default CookingList;
