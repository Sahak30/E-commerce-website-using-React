import { createContext, useEffect, useState } from "react";

//import all_products_data from "../Components/Assets/all_products_data";

export const ShopContext = createContext(null);

{
  /* Add to cart funcation */
}

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 1000 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

// const getDefaultCart = () => {
//   let cart = {};

//   for (let product of all_products_data) {
//     cart[product.id] = 0;
//   }

//   return cart;
// };

const ShopContextProvider = (props) => {
  const [all_products_data, setAll_product_data] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  useEffect(() => {
    fetch("http://localhost:4000/allproducts").then((response) =>
      response.json().then((data) => setAll_product_data(data)),
    );
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/from-data",
          "auth-token": localStorage.getItem("auth-token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  // add to cart function
  // const addToCart = (ItemsId) => {
  //   setCartItems((prev) => {
  //     const updatedCart = {
  //       ...prev,
  //       [ItemsId]: (prev[ItemsId] || 0) + 1,
  //     };

  //     if (localStorage.getItem("auth-token")) {
  //       fetch("http://localhost:4000/addtocart", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/form_data",
  //           "auth-token": `${localStorage.getItem("auth-token")}`,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ ItemsId: ItemsId })
  //           .then((response) => response.json())
  //           .then((data) => console.log(data)),
  //       });
  //     }
  //     return updatedCart;
  //   });
  // };

  const addToCart = (itemId) => {
    // Update frontend cart
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) + 1),
    }));

    // Send product ID to backend
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/from-data",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },

        body: JSON.stringify({
          itemId: itemId,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  // const removeFromCart = (ItemsId) => {
  //   setCartItems((prev) => ({
  //     ...prev,
  //     [ItemsId]: (prev[ItemsId] || 0) - 1,
  //   }));
  // };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1),
    }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/from-data",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },

        body: JSON.stringify({
          itemId: itemId,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_products_data.find(
          (product) => product.id === Number(item),
        );

        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
  const conttextvalue = {
    all_products_data,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={conttextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
