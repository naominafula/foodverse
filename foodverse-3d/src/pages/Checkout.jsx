import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Smartphone, ArrowLeft, ShieldCheck } from "lucide-react";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      navigate("/menu");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/mpesa/stkpush", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone: phone,
          amount: Number(Math.round(total))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Payment request failed");
      }

      setMessage(
        data.message || "Payment request submitted. Check your phone."
      );

    } catch (error) {
      setMessage(
        error.message || "Unable to connect to the payment server."
      );
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Your cart is empty.</h2>
        <button onClick={() => navigate("/menu")}>
          Explore Menu
        </button>
      </div>
    );
  }

  return (
    <section className="checkout-page">

      <button
        className="checkout-back"
        onClick={() => navigate("/cart")}
      >
        <ArrowLeft size={18} /> Back to cart
      </button>

      <div className="checkout-heading">
        <span>FOODVERSE PAYMENT</span>
        <h1>Complete Your Order</h1>
        <p>One more step towards enjoying your favourite food.</p>
      </div>

      <div className="checkout-layout">

        <div className="checkout-form-card">

          <h2>Payment Method</h2>

          <div className="payment-method">
            <Smartphone size={30} />
            <div>
              <h3>M-Pesa</h3>
              <p>Pay securely using your mobile phone.</p>
            </div>
          </div>

          <form onSubmit={handlePayment}>

            <label>M-Pesa Phone Number</label>

            <input
              type="tel"
              placeholder="0712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="(07|01)[0-9]{8}|254[17][0-9]{8}"
              title="Enter a valid Kenyan mobile number"
              required
            />

            <p className="checkout-hint">
              Enter the Safaricom number that will receive
              the payment request.
            </p>

            <div className="payment-security">
              <ShieldCheck size={20} />
              <span>Your M-Pesa PIN is entered on your phone,
              never on this website.</span>
            </div>

            <button
              type="submit"
              className="mpesa-button"
              disabled={loading}
            >
              {loading
                ? "Sending request..."
                : `Pay KSh ${total.toLocaleString()}`}
            </button>

            {message && (
              <p className="payment-message" role="status">
                {message}
              </p>
            )}

          </form>

        </div>

        <div className="checkout-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (
            <div className="checkout-product" key={item.id}>
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                KSh {(item.price * item.quantity).toLocaleString()}
              </strong>
            </div>
          ))}

          <hr />

          <div className="checkout-total">
            <span>Total</span>
            <strong>KSh {total.toLocaleString()}</strong>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Checkout;
