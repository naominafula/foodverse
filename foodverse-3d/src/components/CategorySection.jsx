import {
  Coffee,
  Utensils,
  Pizza,
  Cake,
  GlassWater,
  Sandwich
} from "lucide-react";

const categories = [
  { name: "Breakfast", icon: Coffee },
  { name: "Lunch", icon: Utensils },
  { name: "Dinner", icon: Pizza },
  { name: "Snacks", icon: Sandwich },
  { name: "Drinks", icon: GlassWater },
  { name: "Desserts", icon: Cake }
];

function CategorySection() {
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
            <div className="category-card" key={category.name}>
              <div className="category-icon">
                <Icon size={30} />
              </div>

              <h3>{category.name}</h3>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default CategorySection;