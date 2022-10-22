import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import UniversalAge from './components/UniversalAge';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UniversalAge />
  </React.StrictMode>
);