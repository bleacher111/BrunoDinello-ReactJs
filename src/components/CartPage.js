import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import '../css/Cart.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CartPage = () => {
    const { cart, updateItemQuantity, removeItem, getCartTotal } = useContext(CartContext);
  
    const handleQuantityChange = (e, itemId) => {
      const newQuantity = Number(e.target.value);
      updateItemQuantity(itemId, newQuantity);
    };
  
    const handleRemoveItem = (itemId) => {
      removeItem(itemId);
    };
  
    return (
      <div className="cart-page">
        <h2>Carrito de compras</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(e, item.id)}
                  />
                </td>
                <td>${item.price}</td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-total">
          <strong>Total:</strong> ${getCartTotal()}
        </div>
        <div className="checkout-button">
          <Link to="/checkout">
            <button>Proceder al Checkout</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default CartPage;