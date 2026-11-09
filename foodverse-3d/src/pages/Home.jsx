import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import FoodCard from "../components/FoodCard";
import foods from "../data/foods";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      <Hero />

      <CategorySection />

      <section className="featured-food" id="menu">

        <div className="section-title">
          <span>OUR SPECIAL MENU</span>
          <h2>Popular Dishes</h2>
          <p>Explore some of our most loved meals.</p>
        </div>

        <div className="food-grid">
          {foods.slice(0, 3).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        <div className="all-food-button">
          <Link to="/menu">
            Explore All Foods →
          </Link>
        </div>

      </section>

      <section className="about-section" id="about">
        <div>
          <span>MORE THAN JUST FOOD</span>
          <h2>Experience Food In A New Dimension.</h2>
          <p>
            FOODVERSE brings together technology and food.
            Discover meals, explore ingredients and enjoy
            a modern restaurant experience.
          </p>
        </div>
      </section>

    </div>
  );
}

export default Home;