import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Home />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
