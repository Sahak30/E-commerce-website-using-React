import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCatagory from "./Pages/ShopCatagory";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import LoginSign from "./Pages/LoginSign";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/men_banner.jpg";
import women_banner from "./Components/Assets/women_banner.jpg";
import kids_banner from "./Components/Assets/kids_banner.jpg";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactsUs.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/men"
          element={<ShopCatagory banner={men_banner} category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCatagory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCatagory banner={kids_banner} category="kids" />}
        />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:productId" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/LoginSign" element={<LoginSign />} />
        {/* Footer Links */}

        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
