import React, { createContext, useState, useContext, ReactNode } from 'react';
import { firstDishesMock } from '../data/firstDishesMock';
import { secondDishesMock } from '../data/secondDishesMock';
import { Dish, DishesContextProps } from '../components/types';

const DishesContext = createContext<DishesContextProps | undefined>(undefined);

export const DishesProvider = ({ children }: { children: ReactNode }) => {
  const [firstDishes, setFirstDishes] = useState<Dish[]>(firstDishesMock.data);
  const [secondDishes, setSecondDishes] = useState<Dish[]>(
    secondDishesMock.data
  );

  return (
    <DishesContext.Provider
      value={{ firstDishes, setFirstDishes, secondDishes, setSecondDishes }}
    >
      {children}
    </DishesContext.Provider>
  );
};

export const useDishes = () => {
  const context = useContext(DishesContext);
  if (!context) {
    throw new Error('useDishes must be used within a DishesProvider');
  }
  return context;
};
