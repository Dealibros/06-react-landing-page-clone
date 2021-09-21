import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContent from './App';
import GlobalStyles from './GlobalStyles.js';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <AppContent />
  </React.StrictMode>,
  document.getElementById('root'),
);
