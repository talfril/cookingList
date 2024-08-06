import React from 'react';
// import styles from './app.module.scss';
import { Routes, Route } from 'react-router-dom';
import RandomDishesPage from '../pages/random-dishes-page/random-dishes-page';
import Page404 from '../pages/404-page/404-page';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import RecipePage from '../pages/recipe-page/recipe-page';
import Layout from '../layout/layout';

const App = () => (
  <Routes>
    <Route element={<Layout />}>
      <Route path='/' element={<MainPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/recipe' element={<RecipePage />} />
      <Route path='/random' element={<RandomDishesPage />} />
      <Route path='/*' element={<Page404 />} />
    </Route>
  </Routes>
);

export default App;
