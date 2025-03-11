import React from 'react';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles';
import RestaurantsList from './Components/RestaurantsList';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
          <RestaurantsList /> 
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
