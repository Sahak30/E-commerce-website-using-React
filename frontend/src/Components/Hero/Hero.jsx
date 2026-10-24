import "./Hero.css";
import hero_img from "../Assets/hero-section_img.png";

function Hero() {
  return (
    // This is  our Hero section
    <section className="hero">
      {/*This is our Left side of our hero section */}
      <section className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>NEW</p>
            <i className="fa-solid fa-hand"></i>
          </div>
          <p>Collection</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>
            <button>
              Latest Collection <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>
      {/*This is our Right side of our hero section */}
      <section className="hero-right">
        <div>
          <img src={hero_img} alt="Hero Image" />
        </div>
      </section>
    </section>
  );
}

export default Hero;
