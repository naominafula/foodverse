import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          <Sparkles size={15} />
          THE FUTURE OF FOOD
        </div>

        <h1>
          Taste The
          <span> Future.</span>
          <br />
          
        </h1>

        <p>
          Discover amazing meals from around the world.
          Explore our interactive food experience,
          discover ingredients and order your favourites.
        </p>

        <div className="hero-buttons">
          <Link to="/menu" className="primary-button">
            Explore Menu <ArrowRight size={18} />
          </Link>

          <a href="#categories" className="secondary-button">
            Discover More
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <h3>100+</h3>
            <span>Food Choices</span>
          </div>

          <div>
            <h3>20+</h3>
            <span>Categories</span>
          </div>

          <div>
            <h3>3D</h3>
            <span>Food Experience</span>
          </div>
        </div>

      </div>

      <div className="hero-visual">

        <div className="food-glow"></div>

        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000"
          alt="Delicious burger"
          className="hero-food"
        />

       

        <div className="floating-tag">
          ✦ Fresh & Delicious
        </div>

      </div>

    </section>
  );
}

export default Hero;