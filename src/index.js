import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import { basketItems } from './Reducer/reducer';

const store = createStore(basketItems)

export default store

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

