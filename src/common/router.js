import React from 'react';
import {
  Route,
} from 'react-router-dom';
import menu from './menu.js';

const router = (
  <>
    {
      menu.map((item) => (
        <Route path={item.path} component={() => import(item.component)} />
      ))
    }
  </>
)

export {
  router,
};
