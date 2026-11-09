import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration form is ready. We will connect it to FastAPI.");

  };

  return (
    <section className="auth-page">

      <div className="auth-card">

        <h1>Create Account</h1>

        <p>Join FOODVERSE and discover delicious meals.</p>

        <form onSubmit={handleSubmit}>

          <label>Full Name</label>

          <div className="auth-input">
            <User size={18} />

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <label>Email Address</label>

          <div className="auth-input">
            <Mail size={18} />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <label>Password</label>

          <div className="auth-input">
            <Lock size={18} />

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Create Account
          </button>

        </form>

        <p className="auth-switch">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </section>
  );
}

export default Register;