import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import { ReactNotifications } from 'react-notifications-component';


ReactDOM.render(
  <React.StrictMode>
    <ReactNotifications />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

