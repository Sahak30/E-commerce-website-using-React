import "./RelatedProduct.css";
import data_products from "../Assets/data";
import Items from "../Items/Items";

function RelatedProduct() {
  return (
    <section className="RelatedProduct">
      <h1>Related Products</h1>
      <hr />
      <div className="RelatedProducts-item">
        {data_products.map((item, i) => {
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
export default RelatedProduct;
