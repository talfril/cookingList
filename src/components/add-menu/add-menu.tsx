import React, { useState, useEffect } from 'react';
import styles from './add-menu.module.css';
import {
  addButtonText,
  noAddButtonText,
  submitAddButtonText,
  addDishTitle
} from '../../data/textProps';
import { useDishes } from '../../context/DishesContext';
import CardComponent from '../card-component/card-component';

export const AddMenu = () => {
  const { firstDishes, setFirstDishes, secondDishes, setSecondDishes } =
    useDishes();
  const [addMenu, setAddMenu] = useState(false);
  const [buttonTextValue, setButtonTextValue] = useState(addButtonText);
  const [selectedOption, setSelectedOption] = useState<string>('fullDish');
  const [dishName, setDishName] = useState<string>('');

  useEffect(() => {
    setButtonTextValue(addMenu ? noAddButtonText : addButtonText);
  }, [addMenu]);

  const changeMenuState = () => {
    setAddMenu((prevAddMenu) => !prevAddMenu);
  };

  const addingNewDish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAddMenu(false);

    const newDish = {
      _id: (Math.random() * 1000).toString(),
      name: dishName,
      isFull:
        selectedOption === 'fullDish' || selectedOption === 'mainWithGarnish'
    };

    if (selectedOption === 'garnish') {
      setSecondDishes([...secondDishes, { _id: newDish._id, name: dishName }]);
    } else {
      setFirstDishes([...firstDishes, newDish]);
    }

    setDishName('');
    setSelectedOption('fullDish');
    setAddMenu(false);
  };

  return (
    <div className={styles.addMenu}>
      <button onClick={changeMenuState}>{buttonTextValue}</button>
      {addMenu && (
        <CardComponent
          cardTitle={addDishTitle}
          cardInner={
            <form onSubmit={addingNewDish}>
              <fieldset className={styles.addMenuForm}>
                <input
                  type='text'
                  placeholder='Новое блюдо - это...'
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                />
                <label>
                  <input
                    type='radio'
                    name='dishType'
                    value='fullDish'
                    checked={selectedOption === 'fullDish'}
                    onChange={() => setSelectedOption('fullDish')}
                  />
                  Основное полное блюдо
                </label>
                <label>
                  <input
                    type='radio'
                    name='dishType'
                    value='mainWithGarnish'
                    checked={selectedOption === 'mainWithGarnish'}
                    onChange={() => setSelectedOption('mainWithGarnish')}
                  />
                  Основное блюдо, нужен гарнир
                </label>
                <label>
                  <input
                    type='radio'
                    name='dishType'
                    value='garnish'
                    checked={selectedOption === 'garnish'}
                    onChange={() => setSelectedOption('garnish')}
                  />
                  Гарнир
                </label>
              </fieldset>
            </form>
          }
          cardButton={<button type='submit'>{submitAddButtonText}</button>}
        />
      )}
    </div>
  );
};

export default AddMenu;
