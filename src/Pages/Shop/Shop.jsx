import React, { useContext } from 'react';
import { PRODUCTS } from '../../Product';
import './Shop.css'; // Import the CSS file
import { ShopContext } from '../../Context/ShopContext'; // Import the ShopContext

const Shop = () => {
  // Access the cart state and functions from the ShopContext
  const { cartItems, addToCart } = useContext(ShopContext);

  // Function to handle adding items to the cart
  const handleAddToCart = (product) => {
    addToCart(product.id); // Add the product to the cart using its ID
    alert(`${product.productName} added to cart!`); // Optional: Show a confirmation message
  };

  return (
    <div className='shop'>
      <div className='shop-title'>
      <h1>TechVibe</h1>
      </div>
      <div className='products'>
        {PRODUCTS.map((product) => (
          <div key={product.id} className='product-item'>
            <img src={product.productimage} alt={product.productName} className='product-image' />
            <h3 className='product-name'>{product.productName}</h3>
            <p className='product-price'>${product.price.toFixed(2)}</p>
            <button className='add-to-cart-btn' onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            {/* Display the quantity of this product in the cart */}
            {cartItems[product.id] > 0 && (
              <p className='cart-quantity'>In Cart: {cartItems[product.id]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;