/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-03-31 13:57:50
 * @LastEditors: pdc
 * @LastEditTime: 2020-03-31 16:21:30
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
