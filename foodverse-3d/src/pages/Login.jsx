import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login form is ready. Authentication will be connected to FastAPI.");

  };

  return (
    <section className="auth-page">

      <div className="auth-card">

        <h1>Welcome Back!</h1>

        <p>Login to your FOODVERSE account.</p>

        <form onSubmit={handleSubmit}>

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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>

        </form>

        <p className="auth-switch">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </section>
  );
}

export default Login;