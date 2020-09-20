import React from 'react';
import './App.css';
import Header from './header';
import  './Header.css';
import Tindercard from './tindercard';
import Swipebuttons from './swipebuttons';
import  './swipebuttons.css';

function App() {
  return (
    <div className="app">
    

      <Header/>
      <Tindercard />
      <Swipebuttons />

    </div>
  );
}

export default App;
