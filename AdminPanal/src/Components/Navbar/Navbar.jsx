import "./Navbar.css";
import navlogo from "../../Assets/logo1.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <section className="navbar">
      <img src={navlogo} alt="LOGO" className="nav-logo" />
      <Link to="/LoginSign">
        <i className="fa-solid fa-user nav-profile"></i>
      </Link>
    </section>
  );
}

export default Navbar;
