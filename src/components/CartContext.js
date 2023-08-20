import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    console.log("pasa");
    const prevCart = [...cart];
    let newCart = [];
    const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
    console.log(existingItemIndex);
    if (existingItemIndex !== -1) {
        newCart = [...prevCart];
        newCart[existingItemIndex].quantity += quantity;
        setCart(newCart);
    } else {
        const newItem = { ...item, quantity: quantity };
        setCart([...prevCart, newItem]);
    }
  };

  const updateItemQuantity = (itemId, quantity) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: quantity } : item
      );
      return updatedCart;
    });
  };

  const removeItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const getCartItemCount = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const value = {
    cart,
    addItem,
    updateItemQuantity,
    removeItem,
    getCartItemCount,
    getCartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
