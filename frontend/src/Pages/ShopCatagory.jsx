import "./CSS/ShopCatagory.css";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Items from "../Components/Items/Items";
function ShopCatagory(props) {
  const { all_products_data } = useContext(ShopContext);

  return (
    <section className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexof">
        <p>
          <span>Show 1-8 </span>
          out of 24 products
        </p>
        <div className="shopcategory-sort">
          Sort by <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="shopcategory-product">
        {all_products_data.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </section>
  );
}

export default ShopCatagory;
