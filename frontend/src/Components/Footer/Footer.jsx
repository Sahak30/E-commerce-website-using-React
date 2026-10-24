import "./Footer.css";
import shoppingCart from "../Assets/shopping-cart.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-logo">
        <img src={shoppingCart} alt="Shopping Cart" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-link">
        <Link to="/Company" style={{ color: "#3b3b3b" }}>
          Company
        </Link>

        <Link to="/product" style={{ color: "#3b3b3b" }}>
          Products
        </Link>

        <Link to="/Offices" style={{ color: "#3b3b3b" }}>
          Offices
        </Link>

        <Link to="/AboutUs" style={{ color: "#3b3b3b" }}>
          About Us
        </Link>

        <Link to="/ContactUs" style={{ color: "#3b3b3b" }}>
          Contact Us
        </Link>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a href="www.facebook.com" target="_blank" className="social-link">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="www.instagram.com" target="_blank" className="social-link">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="www.twitter.com" target="_blank" className="social-link">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="www.tiktok.com" target="_blank" className="social-link">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="www.whatsapp.com" target="_blank" className="social-link">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>
      <div className="footer-copy-right">
        <hr />
        <p>Copyright@ 2026 All Right Reserved</p>
      </div>
    </section>
  );
}

export default Footer;
