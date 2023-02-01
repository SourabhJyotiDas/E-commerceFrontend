import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FilterProvider } from './context/filter_context';
import { AppProvider } from "./context/productcontext";
import { CartProvider } from './context/cartContext';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH_DOMAIN
const clientID = process.env.REACT_APP_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
  >
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  </Auth0Provider>

);
