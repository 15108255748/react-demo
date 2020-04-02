/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-03-31 13:57:50
 * @LastEditors: pdc
 * @LastEditTime: 2020-04-02 14:30:23
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
