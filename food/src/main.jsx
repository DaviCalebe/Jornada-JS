import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style/global.css";
import Rotas from "./rotas.jsx";
import { CartProvider } from './contexts/cart-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <Rotas />
  </CartProvider>
)
