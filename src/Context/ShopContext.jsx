import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../Product'; // Import your products

// Create the context
export const ShopContext = createContext(null);

// Function to initialize the default cart state
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0; // Initialize each product's quantity to 0
  }
  return cart;
};

// Shop Context Provider Component
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Function to update the quantity of an item in the cart
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  // Calculate the total number of items in the cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  // Calculate the total cost of items in the cart
  const getTotalCartAmount = () => {
    return PRODUCTS.reduce((total, product) => {
      if (cartItems[product.id] > 0) {
        return total + product.price * cartItems[product.id];
      }
      return total;
    }, 0).toFixed(2);
  };

  // Context value to be provided
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    clearCart,
    getTotalCartItems,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;