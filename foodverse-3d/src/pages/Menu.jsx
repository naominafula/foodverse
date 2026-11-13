import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import FoodCard from "../components/FoodCard";
import foods from "../data/foods";

function Menu() {
  const location = useLocation();
  const [search, setSearch] = useState("");

  const categories = useMemo(
    () => ["All", "Breakfast", "Lunch", "Dinner", "Fast Food", "Snacks", "Drinks", "Desserts"],
    []
  );

  const initialCategory = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get("category");
    return categories.includes(selectedCategory) ? selectedCategory : "All";
  }, [location.search, categories]);

  const [category, setCategory] = useState(initialCategory);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const filteredFoods = foods.filter((food) => {
    const matchesSearch =
      food.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      food.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="menu-page">

      <div className="section-title">
        <span>EXPLORE FOODVERSE</span>
        <h1>Explore Our Menu</h1>
        <p>Find something delicious to enjoy.</p>
      </div>

      <div className="menu-search">
        <Search size={20} />

        <input
          type="text"
          placeholder="Search for your favourite food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-buttons">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "selected" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="food-grid">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))
        ) : (
          <p>No food found. Try another search.</p>
        )}
      </div>

    </section>
  );
}

export default Menu;