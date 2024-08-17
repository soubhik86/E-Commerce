import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, AdjustCart, clearCart } from "../redux/Cartslice"; // Import your action creators

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id })); // Dispatch the action to remove the item
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(AdjustCart({ id, quantity })); // Dispatch the action to adjust the quantity
  };

  const handleClearCart = () => {
    dispatch(clearCart()); // Dispatch the action to clear the entire cart
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      <div>
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <img
                src={item.images}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              {item.title} - ${item.price}
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  onClick={() => handleQuantityChange(item.id, -1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div  style={{ textAlign: "right", marginTop: "20px", backgroundColor: "#f9f9f9", padding: "10px", borderRadius: "5px" }}>
        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
      </div>
      </div>
    </div>
  );
};

export default Cart;
