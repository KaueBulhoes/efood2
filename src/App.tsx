import React from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
