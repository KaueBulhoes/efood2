import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles';
import PageRoutes from './routes';
import { Provider } from 'react-redux';
import { store } from './Store';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
          <GlobalCss />
          <div className="container">
            <PageRoutes />
          </div>
          <Checkout />
        </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;
