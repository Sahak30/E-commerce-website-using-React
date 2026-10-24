import "./Items.css";
import { Link } from "react-router-dom";

function Items(props) {
  return (
    <section className="items">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt="Products Image"
          onClick={() => window.scrollTo(0, 0)}
        />
      </Link>
      <p>{props.name}</p>
      <div className="items-price">
        <div className="items-price-new">${props.new_price}</div>
        <div className="items-price-old">${props.old_price}</div>
      </div>
    </section>
  );
}

export default Items;
