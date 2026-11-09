import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    total
  } = useCart();

  return (
    <section className="cart-page">

      <div className="section-title">
        <span>YOUR FOOD SELECTION</span>
        <h1>Shopping Cart</h1>
        <p>Review your favourite meals before ordering.</p>
      </div>

      {cart.length === 0 ? (

        <div className="empty-cart">
          <ShoppingBag size={55} />
          <h2>Your cart is empty</h2>
          <p>Discover delicious meals and add them to your cart.</p>

          <Link to="/menu" className="primary-button">
            Explore Menu
          </Link>
        </div>

      ) : (

        <div className="cart-container">

          <div className="cart-items">

            {cart.map((item) => (

              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>
                  <p>KSh {item.price.toLocaleString()}</p>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={15} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <Plus size={15} />
                    </button>

                  </div>
                </div>

                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={20} />
                </button>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div>
              <span>Subtotal</span>
              <strong>KSh {total.toLocaleString()}</strong>
            </div>

            <div>
              <span>Delivery</span>
              <strong>Calculated at checkout</strong>
            </div>

            <hr />

            <div className="total-row">
              <span>Total</span>
              <strong>KSh {total.toLocaleString()}</strong>
            </div>

            <button
              className="checkout-button"
              onClick={() => alert("Checkout will be connected to the backend later.")}
            >
              Proceed to Checkout
            </button>

            <Link to="/menu" className="continue-shopping">
              Continue Shopping
            </Link>

          </div>

        </div>

      )}

    </section>
  );
}

export default Cart;