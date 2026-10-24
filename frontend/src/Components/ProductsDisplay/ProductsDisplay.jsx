import { useContext } from "react";
import "./ProductsDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

function ProductsDisplay(props) {
  const { products } = props;

  const { addToCart } = useContext(ShopContext);
  return (
    <section className="ProductsDisplay">
      {/* Products left side*/}
      <div className="ProductsDisplay-left">
        <div className="ProductsDisplay-img-list">
          <img src={products.image} alt="Product Image" />
          <img src={products.image} alt="Product Image" />
          <img src={products.image} alt="Product Image" />
          <img src={products.image} alt="Product Image" />
        </div>
        <div className="ProductsDisplayimg">
          <img
            className="ProductsDisplay-main-img"
            src={products.image}
            alt=""
          />
        </div>
      </div>

      {/* Products Right side*/}
      <div className="ProductsDisplay-right">
        <h1>{products.name}</h1>
        <div className="ProductsDisplay-right-star">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <p>(983)</p>
        </div>
        <div className="ProductsDisplay-right-price">
          <div className="ProductsDisplay-right-price-old">
            ${products.old_price}
          </div>
          <div className="ProductsDisplay-right-price-new">
            ${products.new_price}
          </div>
        </div>
        <div className="ProductsDisplay-right-description">
          A premium T-shirt crafted from soft, breathable fabric, offering a
          comfortable fit with a clean and versatile design.
        </div>
        <div className="ProductsDisplay-right-size">
          <h1>Select Size</h1>
          <div className="ProductsDisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        {/* <button
          onClick={() => {
            addToCart(products.id);
          }}
        >
          Add To Cart
        </button> */}
        <button onClick={() => addToCart(products.id)}>Add to Cart</button>
        <p className="ProductsDisplay-right-category">
          Category : <span>Women ,T-shirt ,Crop Top</span>
        </p>
        <p className="ProductsDisplay-right-category">
          Tags :<span> Modern , Latest</span>
        </p>
      </div>
    </section>
  );
}

export default ProductsDisplay;
