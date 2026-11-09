import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";

function FoodCard({ food }) {
  return (
    <div className="food-card">

      <div className="food-image">
        <img src={food.image} alt={food.name} />

        <span className="food-category">
          {food.category}
        </span>
      </div>

      <div className="food-info">

        <h3>{food.name}</h3>

        <p>{food.description}</p>

        <div className="food-time">
          <Clock size={15} />
          {food.preparationTime}
        </div>

        <div className="food-bottom">
          <h3>KSh {food.price.toLocaleString()}</h3>

          <Link
            to={`/food/${food.id}`}
            className="food-view"
            aria-label={`View ${food.name}`}
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>

      </div>

    </div>
  );
}

export default FoodCard;