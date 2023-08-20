// AddItemButton.js
import React from 'react';
import { useCart } from './CartContext';

function AddItemButton({ item, quantity}) {
  const { addItem } = useCart();

  const handleAddItem = (e) => {
    addItem({ ...item}, quantity );
  };

  return (
    <button className="add-to-cart-button" onClick={handleAddItem}>
      Agregar al carrito
    </button>
  );
}

export default AddItemButton;
