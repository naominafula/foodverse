import { useNavigate } from "react-router-dom";
import {
  Coffee,
  Utensils,
  Pizza,
  Cake,
  GlassWater,
  Sandwich,
  Flame
} from "lucide-react";

const categories = [
  { name: "Breakfast", icon: Coffee },
  { name: "Lunch", icon: Utensils },
  { name: "Dinner", icon: Pizza },
  { name: "Fast Food", icon: Flame },
  { name: "Snacks", icon: Sandwich },
  { name: "Drinks", icon: GlassWater },
  { name: "Desserts", icon: Cake }
];

function CategorySection() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/menu?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <section className="categories" id="categories">

      <div className="section-title">
        <span>EXPLORE OUR WORLD</span>
        <h2>Discover Food Categories</h2>
        <p>Something delicious for every moment.</p>
      </div>

      <div className="category-grid">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              type="button"
              className="category-card"
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="category-icon">
                <Icon size={30} />
              </div>

              <h3>{category.name}</h3>
            </button>
          );
        })}
      </div>

    </section>
  );
}

export default CategorySection;