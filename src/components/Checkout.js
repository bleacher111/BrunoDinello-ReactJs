import React from 'react';
import { useCart } from './CartContext';
import Brief from './Brief';
import CheckoutForm from './CheckoutForm';
import '../css/Checkout.css';

function Checkout() {
  const { cart, getCartItemCount } = useCart();

  return (
    <div className="checkout-page">
      <div className="checkout-form">
        <h2>Información de Envío</h2>
        <CheckoutForm />
      </div>
      <div className="checkout-summary">
        <h2></h2>
        <Brief cart={cart} />
      </div>
    </div>
  );
}

export default Checkout;