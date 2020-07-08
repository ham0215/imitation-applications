import React from 'react';
import RootRouter from 'pages';
import { BrowserRouter } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
};
