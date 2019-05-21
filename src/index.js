import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < TodoList / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// JSX语法，如果我们要使用自建的组建，直接命名就好 APP，必须以大写字母开头