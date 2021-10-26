import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const ws = new WebSocket('wss://misterio-famaf.herokuapp.com/ws')


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);