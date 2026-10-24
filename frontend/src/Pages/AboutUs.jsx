import "./CSS/AboutUs.css";
import CEO_img from "../Components/Assets/mahbob1.png";

function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="section-content">
        <div className="about-image-wrapper">
          <img src={CEO_img} alt="CEO Of Company" className="about-image" />
        </div>
        <div className="about-details">
          <h2 className="section-title">About Us</h2>
          <p className="text">
            Welcome to our online store, your one-stop destination for quality
            products and the latest collections. We are committed to providing a
            simple, secure, and enjoyable shopping experience with products
            designed to meet your everyday needs. Explore our collections,
            discover great deals, and shop with confidence from the comfort of
            your home. Your satisfaction is our priority.
          </p>
          <div className="social-link-list">
            <a href="www.facebook.com" target="_blank" className="social-link">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="www.instagram.com" target="_blank" className="social-link">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="www.twitter.com" target="_blank" className="social-link">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="www.whatsapp.com" target="_blank" className="social-link">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
