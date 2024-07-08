import React, { useState, useRef } from 'react';
import styles from './add-menu.module.css';
import { submitAddButtonText, addDishTitle } from '../../data/textProps';
import { useDishes } from '../../context/DishesContext';
import CardComponent from '../card-component/card-component';
import Button from '../button/button';

export const AddMenu = ({ onClose }: { onClose: () => void }) => {
  const { firstDishes, setFirstDishes, secondDishes, setSecondDishes } =
    useDishes();
  const [selectedOption, setSelectedOption] = useState<string>('fullDish');
  const [dishName, setDishName] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const addingNewDish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    onClose();
  };

  return (
    <CardComponent
      cardTitle={addDishTitle}
      cardInner={
        <form ref={formRef} onSubmit={addingNewDish}>
          <fieldset className={styles.addMenuForm}>
            <input
              type='text'
              placeholder='Новое блюдо - это...'
              value={dishName}
              onChange={(e) => setDishName(e.target.value)}
              className={styles.newDishInput}
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
          <Button
            buttonType='submit'
            buttonText={submitAddButtonText}
            buttonImageUrl={require('../../../public/images/icons/icon-add-dark.png')}
          />
        </form>
      }
    />
  );
};

export default AddMenu;
