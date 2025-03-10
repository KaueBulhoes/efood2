import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles';
import RestaurantsList from './Components/RestaurantsList';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
          <RestaurantsList /> 
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
