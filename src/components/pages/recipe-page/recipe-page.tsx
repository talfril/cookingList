import React, { useState } from 'react';
import RecipeCard from '../../ui/recipeCard/recipe-card';
import { recipesMock } from '../../../data/recipesMock';
import styles from './recipe-page.module.scss';
import Modal from '../../ui/modal/modal';
import { Recipe } from '../../types';
import CardComponent from '../../ui/card-component/card-component';
import useDevice from '../../../utils/useDevice';
import clsx from 'clsx';

const RecipePage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [showModal, setShowModal] = useState(false);
  const device = useDevice();

  const handleCardClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
  };

  return (
    <div
      className={clsx(
        styles.recipesContainer,
        styles[`recipesContainer__${device}`]
      )}
    >
      {recipesMock.data.map((recipe) => (
        <RecipeCard
          key={recipe._id}
          recipe={recipe}
          onClick={() => handleCardClick(recipe)}
        />
      ))}
      {selectedRecipe && (
        <Modal show={showModal} onClose={handleCloseModal}>
          <CardComponent
            cardTitle={selectedRecipe.name}
            cardInner={
              <div
                className={clsx(
                  styles.modalContent,
                  styles[`modalContent__${device}`]
                )}
              >
                <div
                  className={clsx(
                    styles.recipeImageBlock,
                    styles[`recipeImageBlock__${device}`]
                  )}
                >
                  <img
                    src={selectedRecipe.image}
                    alt={selectedRecipe.name}
                    className={clsx(
                      styles.selectedRecipeImage,
                      styles[`selectedRecipeImage__${device}`]
                    )}
                  />
                  <div>
                    <h3>Ингредиенты:</h3>
                    <ul
                      className={clsx(
                        styles.ingredientList,
                        styles[`ingredientList__${device}`]
                      )}
                    >
                      {Object.entries(selectedRecipe.ingredients).map(
                        ([ingredient, quantity]) => (
                          <li
                            key={ingredient}
                            className={clsx(
                              styles.ingredientItem,
                              styles[`ingredientItem__${device}`]
                            )}
                          >{`${ingredient}: ${quantity}`}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
                <h3>Приготовление:</h3>
                <p>{selectedRecipe.cooking}</p>
              </div>
            }
          />
        </Modal>
      )}
    </div>
  );
};

export default RecipePage;
