import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        FOOD<span>VERSE</span>
        <small>3D EXPERIENCE</small>
      </Link>

      <button
        className="mobile-menu"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        {open ? <X /> : <Menu />}
      </button>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/menu" onClick={() => setOpen(false)}>Explore Menu</Link>
        <a href="#categories" onClick={() => setOpen(false)}>Categories</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
      </div>

      <div className="nav-actions">
        <Link to="/cart" className="cart-icon">
          <ShoppingBag size={20} />
          <span>Cart</span>
        </Link>

        <Link to="/login" className="login-button">
          Login
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;