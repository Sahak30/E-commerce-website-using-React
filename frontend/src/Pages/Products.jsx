import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductsDisplay from "../Components/ProductsDisplay/ProductsDisplay";
import DescribtionBox from "../Components/DescribtionBox/DescribtionBox";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

function Products() {
  const { all_products_data } = useContext(ShopContext);
  const { productId } = useParams();

  const products = all_products_data.find((e) => e.id === Number(productId));

  if (!products) {
    return <h2>Product not found</h2>;
  }

  return (
    <section>
      <Breadcrum products={products} />
      <ProductsDisplay products={products} />
      {/* link Desrcibtion Box file */}
      <DescribtionBox />
      {/* link Related Products file */}
      <RelatedProduct />
    </section>
  );
}

export default Products;
