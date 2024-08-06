import styles from './button.module.scss';
import React, { useState } from 'react';
import { ButtonProps } from '../../types';
import useDevice from '../../../utils/useDevice';
import clsx from 'clsx';

export const Button: React.FC<ButtonProps> = ({
  buttonText,
  buttonOnClick,
  buttonType,
  buttonImageUrl
}) => {
  const device = useDevice();
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      type={buttonType}
      onClick={buttonOnClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={clsx(styles.button, styles[`button__${device}`], {
        [styles.buttonActive]: isPressed
      })}
    >
      <span>{buttonText}</span>
      {buttonImageUrl && (
        <img
          src={buttonImageUrl}
          alt=''
          className={clsx(styles.buttonIcon, styles[`buttonIcon__${device}`], {
            [styles.buttonIconActive]: isPressed
          })}
        />
      )}
    </button>
  );
};

export default Button;
