import styles from './modal.module.css';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import useDevice from '../../utils/useDevice';

export const Modal: React.FC<{
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
}> = ({ children, show, onClose }) => {
  const device = useDevice();

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleEsc);
    } else {
      document.removeEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <>
      <div className={clsx(styles.modal, styles[`modal__${device}`])}>
        <button onClick={onClose} className={styles.closeButton}>
          <img
            className={styles.closeImage}
            src={require('../../../public/images/icons/icon-close.png')}
            alt='Close'
          />
        </button>
        {children}
      </div>
      <div className={styles.overlay} onClick={onClose} />
    </>
  );
};

export default Modal;
