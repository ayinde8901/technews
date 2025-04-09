import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // Correct path
import './Cart.css'; // Import the CSS file
import { PRODUCTS } from '../../Product';
import Swal from 'sweetalert2'; // Import SweetAlert

const Cart = () => {
  const { cartItems, removeFromCart, updateCartItemCount, getTotalCartAmount, clearCart } = useContext(ShopContext);

  // Function to handle item removal with SweetAlert confirmation
  const handleRemoveItem = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This item will be removed from your cart!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(productId); // Remove the item from the cart
        Swal.fire('Removed!', 'Your item has been removed.', 'success');
      }
    });
  };

  // Function to handle checkout with SweetAlert confirmation
  const handleCheckout = () => {
    Swal.fire({
      title: 'Thank you for your order!',
      text: 'Your order has been placed successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      clearCart(); // Clear the cart after the order is placed
    });
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {Object.keys(cartItems).map((key) => {
          const productId = parseInt(key);
          const product = PRODUCTS.find((p) => p.id === productId);
          if (cartItems[productId] > 0) {
            return (
              <div key={productId} className="cart-item">
                <img src={product.productimage} alt={product.productName} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{product.productName}</h3>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateCartItemCount(cartItems[productId] - 1, productId)}>
                      -
                    </button>
                    <input
                      type="number"
                      value={cartItems[productId]}
                      onChange={(e) => updateCartItemCount(Number(e.target.value), productId)}
                    />
                    <button onClick={() => updateCartItemCount(cartItems[productId] + 1, productId)}>
                      +
                    </button>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemoveItem(productId)}>
                    Remove
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-summary">
        <h2>Total: ${getTotalCartAmount()}</h2>
        <button className="checkout-btn" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;