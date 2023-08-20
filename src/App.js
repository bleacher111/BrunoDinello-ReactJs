import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartPage from './components/CartPage'; // Importa el nuevo componente
import { CartProvider } from './components/CartContext';
import Checkout from './components/Checkout';
import Footer from './components/Footer';  // Importa el componente Footer

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />  
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

