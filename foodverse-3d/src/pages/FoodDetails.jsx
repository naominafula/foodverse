import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Clock, ShoppingCart, ArrowLeft } from "lucide-react";

import foods from "../data/foods";
import FoodScene from "../three/FoodScene";
import { useCart } from "../context/CartContext";

function FoodDetails() {
  const { id } = useParams();
  const food = foods.find((item) => item.id === Number(id));

  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!food) {
    return (
      <div className="empty-page">
        <h2>Food not found!</h2>
        <Link to="/menu">Return to menu</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(food);
    setAdded(true);
  };

  return (
    <section className="details-page">

      <Link to="/menu" className="back-link">
        <ArrowLeft size={18} /> Back to menu
      </Link>

      <div className="details-container">

        <div className="details-image">
          {food.id === 1 ? (
            <FoodScene />
          ) : (
            <img src={food.image} alt={food.name} />
          )}
        </div>

        <div className="details-info">

          <span className="details-category">
            {food.category}
          </span>

          <h1>{food.name}</h1>

          <p>{food.description}</p>

          <div className="details-time">
            <Clock size={18} />
            Preparation time: {food.preparationTime}
          </div>

          <h2>Ingredients</h2>

          <ul className="ingredients-list">
            {food.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
              </li>
            ))}
          </ul>

          <h2 className="details-price">
            KSh {food.price.toLocaleString()}
          </h2>

          <button
            className="add-cart-button"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={18} />
            {added ? "Added to cart!" : "Add to Cart"}
          </button>

        </div>

      </div>

    </section>
  );
}

export default FoodDetails;