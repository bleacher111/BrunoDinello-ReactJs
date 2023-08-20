import React, { useState } from 'react';

function ItemQuantitySelector({ maxQuantity, onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 1 && newQuantity <= maxQuantity) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div>
      <label htmlFor="quantity">Cantidad:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        min="1"
        max={maxQuantity}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default ItemQuantitySelector;
