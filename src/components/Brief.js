// Brief.js
import React from 'react';

function Brief({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h3>Resumen de la compra</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Brief;
