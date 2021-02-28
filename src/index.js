import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Search from './Search';
import Product from"./products"; 

ReactDOM.render(
  <React.StrictMode>
    <Search products={Product} />
  </React.StrictMode>,
  document.getElementById('root')
);

