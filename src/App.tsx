import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalCss } from './styles';
import PageRoutes from './routes';
import Cart from './Components/Cart';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
          <GlobalCss />
          <div className="container">
            <PageRoutes />
          </div>
          <Cart />
        </BrowserRouter>
    </Provider>
    </>
  )
}

export default App;
