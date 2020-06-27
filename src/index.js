import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'; //  react-redux is in order to apply redux in react project
import { createStore } from 'redux'; // createStore is have to load rootReducer
import rootReducer from './modules'; // import folder name is import index.js inside folder

const store = createStore(rootReducer);
// console.log(store.getState());

ReactDOM.render(
  // apply redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
