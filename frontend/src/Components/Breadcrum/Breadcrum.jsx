import "./Breadcrum.css";
function Breadcrum(props) {
  const { products } = props;
  return (
    <section className="breadcrum">
      Home
      <i className="fa-solid fa-chevron-right"></i>
      Shop
      <i className="fa-solid fa-chevron-right"></i>
      {products.category} <i className="fa-solid fa-chevron-right"></i>
      {products.name}
    </section>
  );
}

export default Breadcrum;
