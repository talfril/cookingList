import { ReactNode } from 'react';

export interface Dish {
  _id: string;
  name: string;
  isFull?: boolean;
}

export interface DishesContextProps {
  firstDishes: Dish[];
  setFirstDishes: React.Dispatch<React.SetStateAction<Dish[]>>;
  secondDishes: Dish[];
  setSecondDishes: React.Dispatch<React.SetStateAction<Dish[]>>;
}

export interface CookingListProps {
  setSelectedFirstDish: (dish: string) => void;
  setSelectedSecondDish: (dish: string) => void;
}

export type SelectMenuProps = {
  children: ReactNode;
};

export interface CardComponentProps {
  cardTitle: string;
  cardInner: React.ReactNode;
  cardButton?: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  buttonText?: string;
  buttonOnClick?: () => void;
  buttonType: 'button' | 'submit' | 'reset' | undefined;
  buttonImageUrl?: string;
  className?: string;
}

export interface ModaleProps {
  children: React.ReactNode;
  onClose: () => void;
}
