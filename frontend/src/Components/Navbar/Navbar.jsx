import "./Navbar.css";
import logo from "../Assets/logo1.png";
import { Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      {/* Open menu and drop down icon */}
      <div className="open-menu">
        <i
          className=" nav-dropdown fas fa-chevron-down"
          onClick={dropdown_toggle}
        ></i>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            SHOP
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men" style={{ textDecoration: "none", color: "#626262" }}>
            MEN
          </Link>
          {menu === "men" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link
            to="/women"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            WOMEN
          </Link>
          {menu === "women" ? <hr /> : <></>}
        </li>

        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids" style={{ textDecoration: "none", color: "#626262" }}>
            KIDS
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              (localStorage.removeItem("auth-token"),
                window.location.replace("/"));
            }}
          >
            LogOut
          </button>
        ) : (
          <Link to="/LoginSign">
            <button>Login</button>
          </Link>
        )}

        <Link to="/LoginSign" style={{ color: "#626262" }}>
          <i className="fa-solid fa-user"></i>
        </Link>
        <Link to="/Cart" style={{ color: "#626262" }}>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
