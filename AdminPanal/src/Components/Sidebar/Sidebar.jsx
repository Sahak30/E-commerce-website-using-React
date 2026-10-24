import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <section className="sidebar">
      {/*Add product Panel*/}
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <i className="fa-solid fa-cart-plus"></i>
          <p>Add Product</p>
        </div>
      </Link>
      {/*List product Panel*/}
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <i className="fa-solid fa-list"></i>
          <p>Product List</p>
        </div>
      </Link>
    </section>
  );
}

export default Sidebar;
