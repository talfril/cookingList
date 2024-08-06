import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import useDevice from '../../utils/useDevice';
import MenuUnit from '../ui/menu-unit/menu-unit';
import styles from './navigation.module.scss';

const Navigation: React.FC = () => {
  const device = useDevice();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className={clsx(styles.navigation, styles[`navigation__${device}`], {
        [styles.navigationOpen]: isMenuOpen
      })}
    >
      <nav className={styles.navigationMenu}>
        <ul className={styles.navigationList}>
          <MenuUnit link='/'>Главная</MenuUnit>
          {/* <MenuUnit link='/login'>Авторизация</MenuUnit> */}
          <MenuUnit link='/recipe'>Рецепты</MenuUnit>
          <MenuUnit link='/random'>Рандомный выбор блюда</MenuUnit>
        </ul>
        <div className={styles.toggleButton} onClick={toggleMenu} />
      </nav>
    </div>
  );
};

export default Navigation;
