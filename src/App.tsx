import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles';
import PageRoutes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <PageRoutes />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
