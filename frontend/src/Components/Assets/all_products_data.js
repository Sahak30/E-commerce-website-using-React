import img1 from "../Assets/products/img-1.png";
import img2 from "../Assets/products/img-2.png";
import img3 from "../Assets/products/img-3.png";
import img4 from "../Assets/products/img-4.png";
import img5 from "../Assets/products/img-5.png";
import img6 from "../Assets/products/img-6.png";
import img7 from "../Assets/products/img-7.png";
import img8 from "../Assets/products/img-8.png";
import img9 from "../Assets/products/img-9.png";
import img10 from "../Assets/products/img-10.png";
import img11 from "../Assets/products/img-11.png";
import img12 from "../Assets/products/img-12.png";
import img13 from "../Assets/products/img-13.png";
import img14 from "../Assets/products/img-14.png";
import img15 from "../Assets/products/img-15.png";
import img16 from "../Assets/products/img-16.png";
import img17 from "../Assets/products/img-17.png";
import img18 from "../Assets/products/img-18.png";
import img19 from "../Assets/products/img-19.png";
import img20 from "../Assets/products/img-20.png";

import img21 from "../assets/img1.png";
import img22 from "../assets/img2.png";
import img23 from "../assets/img3.png";
import img24 from "../assets/img4.png";

let all_products_data = [
  {
    id: 1,
    image: img1,
    name: "Comfortable and versatile T-shirt designed for effortless everyday style",
    category: "women",
    new_price: 45.9,
    old_price: 60.2,
  },
  {
    id: 2,
    image: img2,
    name: "A refined coat crafted for warmth, comfort, and a sophisticated everyday look",
    category: "women",
    new_price: 55.45,
    old_price: 70.3,
  },
  {
    id: 3,
    image: img3,
    name: "A stylish, lightweight T-shirt made for comfort and easy everyday wear.",
    category: "women",
    new_price: 60.1,
    old_price: 65.0,
  },
  {
    id: 4,
    image: img4,
    name: "A sophisticated coat designed with premium comfort, timeless style, and lasting warmth.",
    category: "women",
    new_price: 35.5,
    old_price: 45.6,
  },
  {
    id: 5,
    image: img5,
    name: "Comfortable and versatile T-shirt designed for effortless everyday style",
    category: "women",
    new_price: 34.9,
    old_price: 54.2,
  },
  {
    id: 6,
    image: img6,
    name: "A refined coat crafted for warmth, comfort, and a sophisticated everyday look",
    category: "women",
    new_price: 50.4,
    old_price: 60.1,
  },
  {
    id: 7,
    image: img7,
    name: "A stylish, lightweight T-shirt made for comfort and easy everyday wear.",
    category: "women",
    new_price: 23.65,
    old_price: 34.9,
  },
  {
    id: 8,
    image: img8,
    name: "A sophisticated coat designed with premium comfort, timeless style, and lasting warmth.",
    category: "women",
    new_price: 29.99,
    old_price: 40.1,
  },
  {
    id: 9,
    image: img9,
    name: "Comfortable and versatile T-shirt designed for effortless everyday style",
    category: "men",
    new_price: 20.9,
    old_price: 30.2,
  },
  {
    id: 10,
    image: img10,
    name: "A refined coat crafted for warmth, comfort, and a sophisticated everyday look",
    category: "men",
    new_price: 43.45,
    old_price: 51.3,
  },
  {
    id: 11,
    image: img11,
    name: "A stylish, lightweight T-shirt made for comfort and easy everyday wear.",
    category: "men",
    new_price: 80.1,
    old_price: 92.0,
  },
  {
    id: 12,
    image: img12,
    name: "A sophisticated coat designed with premium comfort, timeless style, and lasting warmth.",
    category: "men",
    new_price: 50.5,
    old_price: 63.6,
  },
  {
    id: 13,
    image: img13,
    name: "Comfortable and versatile T-shirt designed for effortless everyday style",
    category: "men",
    new_price: 21.9,
    old_price: 28.2,
  },
  {
    id: 14,
    image: img14,
    name: "A refined coat crafted for warmth, comfort, and a sophisticated everyday look",
    category: "men",
    new_price: 80.2,
    old_price: 90.2,
  },
  {
    id: 15,
    image: img15,
    name: "A stylish, lightweight T-shirt made for comfort and easy everyday wear.",
    category: "men",
    new_price: 32.9,
    old_price: 41.1,
  },
  {
    id: 16,
    image: img16,
    name: "A sophisticated coat designed with premium comfort, timeless style, and lasting warmth.",
    category: "men",
    new_price: 90.9,
    old_price: 99.99,
  },
  {
    id: 17,
    image: img17,
    name: "Comfortable and versatile T-shirt designed for effortless everyday style",
    category: "kids",
    new_price: 67.33,
    old_price: 76.15,
  },
  {
    id: 18,
    image: img18,
    name: "A refined coat crafted for warmth, comfort, and a sophisticated everyday look",
    category: "kids",
    new_price: 45.55,
    old_price: 54.55,
  },
  {
    id: 19,
    image: img19,
    name: "A stylish, lightweight T-shirt made for comfort and easy everyday wear.",
    category: "kids",
    new_price: 84.28,
    old_price: 102.1,
  },
  {
    id: 20,
    image: img20,
    name: "A sophisticated coat designed with premium comfort, timeless style, and lasting warmth.",
    category: "kids",
    new_price: 55.35,
    old_price: 67.99,
  },
  {
    id: 21,
    image: img21,
    name: "Comfortable and versatile T-shirt designed for effortless everyday style",
    category: "kids",
    new_price: 45.9,
    old_price: 60.2,
  },
  {
    id: 22,
    image: img22,
    name: "A refined coat crafted for warmth, comfort, and a sophisticated everyday look",
    category: "kids",
    new_price: 55.45,
    old_price: 70.3,
  },
  {
    id: 23,
    image: img23,
    name: "A stylish, lightweight T-shirt made for comfort and easy everyday wear.",
    category: "kids",
    new_price: 60.1,
    old_price: 65.0,
  },
  {
    id: 24,
    image: img24,
    name: "A sophisticated coat designed with premium comfort, timeless style, and lasting warmth.",
    category: "kids",
    new_price: 35.5,
    old_price: 45.6,
  },
];

export default all_products_data;
