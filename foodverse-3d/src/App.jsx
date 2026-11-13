import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import FoodDetails from './pages/FoodDetails'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from "./pages/Checkout";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="app-shell">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/food/:id" element={<FoodDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
