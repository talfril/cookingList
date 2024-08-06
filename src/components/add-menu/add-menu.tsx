import React, { useState, useRef } from 'react';
import styles from './add-menu.module.scss';
import { submitAddButtonText, addDishTitle } from '../../data/textProps';
import { useDishes } from '../../context/DishesContext';
import CardComponent from '../ui/card-component/card-component';
import Button from '../ui/button/button';

export const AddMenu = ({ onClose }: { onClose: () => void }) => {
  const { firstDishes, setFirstDishes, secondDishes, setSecondDishes } =
    useDishes();
  const [selectedOption, setSelectedOption] = useState<string>('fullDish');
  const [dishName, setDishName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const validateDishName = (name: string): string | null => {
    const cyrillicRegex = /^[А-Яа-яЁё\s]+$/;
    if (!name) {
      return 'Название блюда не должно быть пустым';
    }
    if (!cyrillicRegex.test(name)) {
      return 'Название блюда должно содержать только кириллические символы';
    }
    if (name.length > 50) {
      return 'Название блюда не должно превышать 50 символов';
    }
    return null;
  };

  const addingNewDish = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationError = validateDishName(dishName);
    if (validationError) {
      setError(validationError);
      return;
    }

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
            {error && <span className={styles.error}>{error}</span>}

            <label>
              <input
                className={styles.visuallyHidden}
                type='radio'
                name='dishType'
                value='fullDish'
                checked={selectedOption === 'fullDish'}
                onChange={() => setSelectedOption('fullDish')}
              />
              <span className={styles.castomCheсkbox} />
              Основное полное блюдо
            </label>
            <label>
              <input
                type='radio'
                className={styles.visuallyHidden}
                name='dishType'
                value='mainWithGarnish'
                checked={selectedOption === 'mainWithGarnish'}
                onChange={() => setSelectedOption('mainWithGarnish')}
              />
              <span className={styles.castomCheсkbox} />
              Основное блюдо, нужен гарнир
            </label>
            <label>
              <input
                type='radio'
                className={styles.visuallyHidden}
                name='dishType'
                value='garnish'
                checked={selectedOption === 'garnish'}
                onChange={() => setSelectedOption('garnish')}
              />
              <span className={styles.castomCheсkbox} />
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
