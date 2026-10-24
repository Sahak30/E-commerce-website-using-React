import "./Offers.css";
import exclusive_img from "../Assets/exclusive_img.png";
function Offers() {
  return (
    <section className="offers">
      {/*offer left section */}
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      {/*offer right section */}
      <div className="offer-right">
        <img src={exclusive_img} alt="" />
      </div>
    </section>
  );
}

export default Offers;
