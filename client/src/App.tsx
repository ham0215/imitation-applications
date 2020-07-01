import React from 'react';
import RootRouter from 'pages';
import { BrowserRouter } from 'react-router-dom';
import 'App.css';

export default () => {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
};
