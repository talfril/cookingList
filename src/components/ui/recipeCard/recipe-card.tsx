import React from 'react';
import styles from './recipe-card.module.scss';
import CardComponent from '../card-component/card-component';
import { RecipeCardProps } from '../../types';
import useDevice from '../../../utils/useDevice';
import clsx from 'clsx';

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onClick }) => {
  const { name, image } = recipe;
  const device = useDevice();

  return (
    <div
      onClick={onClick}
      className={styles.recipeCard}
      role='button'
      tabIndex={0}
    >
      <CardComponent
        cardTitle={name}
        cardInner={
          <div
            className={clsx(
              styles.recipeImageContainer,
              styles[`recipeImageContainer__${device}`]
            )}
          >
            <img
              src={image}
              alt={name}
              className={styles.recipeImage}
              loading='lazy'
            />
          </div>
        }
      />
    </div>
  );
};

export default RecipeCard;
