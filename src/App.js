import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import Groceries from './Components/Groceries'
import Basket from './Components/Basket'

function App() {
  return (
    <div className="App">
    <Header />
    <div className="container">
    <Groceries />
    <Basket />
    </div>
    </div>
  );
}

export default App;
