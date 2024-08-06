import React, { useState } from 'react';
import styles from './select-menu.module.scss';
import { AddMenu } from '../add-menu/add-menu';
import { DishesProvider } from '../../context/DishesContext';
import { SelectMenuProps } from '../types';
import clsx from 'clsx';
import useDevice from '../../utils/useDevice';
import Modal from '../ui/modal/modal';
import Button from '../ui/button/button';
import { addButtonText } from '../../data/textProps';

export const SelectMenu = (props: SelectMenuProps) => {
  const device = useDevice();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <DishesProvider>
      <div className={styles.mainMenu}>
        <div
          className={clsx(styles.selectMenu, styles[`selectMenu__${device}`])}
        >
          {props.children}
        </div>
        <Button
          buttonType='button'
          buttonOnClick={handleOpenModal}
          buttonText={addButtonText}
          className={styles.openModalButton}
          buttonImageUrl={require('../../../public/images/icons/icon-add-dark.png')}
        />
        <Modal show={showModal} onClose={handleCloseModal}>
          <AddMenu onClose={handleCloseModal} />
        </Modal>
      </div>
    </DishesProvider>
  );
};

export default SelectMenu;
