import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles';
import PageRoutes from './routes';
import Cart from './Components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <PageRoutes />
        </div>
        <Cart />
      </BrowserRouter>
    </>
  )
}

export default App;
