import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './cooking-list.module.scss';
import {
  firstDishTitle,
  secondDishTitle,
  randomButtonText
} from '../../data/textProps';
import { useDishes } from '../../context/DishesContext';
import useDevice from '../../utils/useDevice';
import CardComponent from '../ui/card-component/card-component';
import { CookingListProps } from '../types';
import Button from '../ui/button/button';

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
  const [isFirstDropdownOpen, setFirstDropdownOpen] = useState<boolean>(false);
  const [isSecondDropdownOpen, setSecondDropdownOpen] =
    useState<boolean>(false);

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

  const toggleFirstDropdown = () => {
    setFirstDropdownOpen((prev) => !prev);
  };

  const toggleSecondDropdown = () => {
    setSecondDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <CardComponent
        cardTitle={firstDishTitle}
        cardInner={
          <div className={styles.dropdownWrapper}>
            <select
              value={selectedFirstDish ? selectedFirstDish.name : ''}
              onChange={handleFirstDishChange}
              onClick={toggleFirstDropdown}
              onBlur={() => setFirstDropdownOpen(false)}
              className={styles.dropdown}
            >
              <option value=''>Выберите блюдо</option>
              {firstDishes.map((dish) => (
                <option
                  key={dish._id}
                  value={dish.name}
                  className={styles.dropdownOption}
                >
                  {dish.name}
                </option>
              ))}
            </select>
            <span
              className={clsx(styles.arrowIcon, {
                [styles.open]: isFirstDropdownOpen
              })}
            />
          </div>
        }
        cardButton={
          <Button
            buttonType='button'
            buttonOnClick={selectRandomFirstDish}
            buttonText={randomButtonText}
            buttonImageUrl={require('../../../public/images/icons/icon-dice-dark.png')}
          />
        }
      />

      {selectedFirstDish && !selectedFirstDish.isFull && (
        <CardComponent
          cardTitle={secondDishTitle}
          cardInner={
            <div className={styles.dropdownWrapper}>
              <select
                value={selectedSecondDish}
                onChange={(e) => {
                  setSelectedSecondDish(e.target.value);
                  setSelectedSecondDishState(e.target.value);
                }}
                onClick={toggleSecondDropdown}
                onBlur={() => setSecondDropdownOpen(false)}
                className={styles.dropdown}
              >
                <option value=''>Выберите блюдо</option>
                {secondDishes.map((dish) => (
                  <option
                    key={dish._id}
                    value={dish.name}
                    className={styles.dropdownOption}
                  >
                    {dish.name}
                  </option>
                ))}
              </select>
              <span
                className={clsx(styles.arrowIcon, {
                  [styles.open]: isSecondDropdownOpen
                })}
              />
            </div>
          }
          cardButton={
            <Button
              buttonType='button'
              buttonOnClick={selectRandomSecondDish}
              buttonText={randomButtonText}
              buttonImageUrl={require('../../../public/images/icons/icon-dice-dark.png')}
            />
          }
        />
      )}
    </>
  );
};

export default CookingList;
