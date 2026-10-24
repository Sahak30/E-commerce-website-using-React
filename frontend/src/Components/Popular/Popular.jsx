import "./Popular.css";
// import data_products from "../Assets/data";
import Items from "../Items/Items";
import { useState } from "react";
import { useEffect } from "react";

function Popular() {
  // connect with API and database

  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen").then((response) =>
      response.json().then((data) => setPopularProducts(data)),
    );
  }, []);
  return (
    <section className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className="popular_items">
        {popularProducts.map((item, i) => {
          return (
            <Items
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Popular;
