import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/Newsletter/NewsLetter";
function Shop() {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </>
  );
}

export default Shop;
