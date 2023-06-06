import headerImage from "../../img/main-header-bg.jpg";
import headerImage2 from "../../img/main-header-bg2.jpg";
import headerImage3 from "../../img/main-header-bg3.jpg";

import card1 from "../../img/Cards/card1.jpg";
import card2 from "../../img/Cards/card2.jpg";
import card3 from "../../img/Cards/card3.jpg";
import card4 from "../../img/Cards/card4.jpg";
import card5 from "../../img/Cards/card5.jpg";
import card6 from "../../img/Cards/card6.jpg";
import card7 from "../../img/Cards/card7.jpg";
import card8 from "../../img/Cards/card8.jpg";
import card9 from "../../img/Cards/card9.jpg";

import product1 from "../../img/Products/product1.jpg";
import product2 from "../../img/Products/product2.jpg";
import product3 from "../../img/Products/product3.jpg";
import product4 from "../../img/Products/product4.jpg";
import product6 from "../../img/Products/product6.jpg";
import product7 from "../../img/Products/product7.jpg";
import product8 from "../../img/Products/product8.jpg";
import product9 from "../../img/Products/product9.jpg";

export const pathes = [
  { title: "Products", path: "/products" },
  { title: "Brands", path: "/brands" },
  { title: "About", path: "/about" },
  { title: "Search", path: "/search" },
  { title: "Cart", path: "/cart" },
  { title: "Contact", path: "/contact" },
  { title: "Login", path: "/login" },
  { title: "Register", path: "/register" },
  { title: "Error", path: "/404" },
  { title: "Admin Panel", path: "/admin" },
  { title: "Checkout", path: "/checkout" },
];

export const navLinks = [
  { id: 1, title: "Products", path: "/products", isButton: false },
  { id: 2, title: "Brands", path: "/brands", isButton: true },
  { id: 3, title: "Information", path: "/info", isButton: true },
  { id: 4, title: "Search", path: "/search", isButton: true },
  { id: 5, title: "Cart", path: "/cart", isButton: true },
];

export const infoPathes = [
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export const brandPathes = [{ title: "Mr & Mrs White", path: "/brands/:brandTitle" }];

export const headerImages = [
  {
    id: 1,
    image: headerImage,
    alt: "Break From Convention",
    title: "Break From Convention",
    subtitle:
      "Fortune is a beautifully designed, high-sales ecommerce theme optimized for small-to-medium-sized catalogs. With its unique navigation and striking product grid, Fortune is a perfect choice for online stores that dare to be different.",
  },
  {
    id: 2,
    image: headerImage2,
    alt: "Captivate and Convert Shoppers",
    title: "Captivate and Convert Shoppers",
    subtitle:
      "Fortune's gorgeous full-width hero area puts your imagery on full display, letting you show off your products in incredible detail. Prominently displayed product reviews and bold calls-to-action work to convert customers and drive sales.",
  },
  {
    id: 3,
    image: headerImage3,
    alt: "Show Off Your Brand",
    title: "Show Off Your Brand",
    subtitle:
      "Fortune comes with four eye-catching presets — Minimal, Bright, Contrast, and Highlight — as well as a host of customization options, from unlimited color choices to a customizable product grid, homepage carousel, and more.a",
  },
];

export const productsList = [
  {
    id: 1,
    title: "Iphone X",
    brand: "Apple",
    price: "$330.00",
    image: card5,
    alt: "Iphone X",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 2,
    title: "Iphone 11",
    brand: "Apple",
    price: "$500.00",
    image: card6,
    alt: "Iphone 11",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 3,
    title: "Microvawe Y12",
    brand: "Bosch",
    price: "$170.00",
    image: card8,
    alt: "Microvawe Y12",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 4,
    title: "Blender Ultra 13",
    brand: "Bosch",
    price: "$3,080.00",
    image: card3,
    alt: "Blender Ultra 13",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 5,
    title: "Fridge Cuple U15",
    brand: "Bosch",
    price: "$1,045.00",
    image: card4,
    alt: "Fridge Cuple U15",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 6,
    title: "Canon N15",
    brand: "Canon",
    price: "$355.00",
    image: card1,
    alt: "Canon N15",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 7,
    title: "Robot Vacuum Cleaner",
    brand: "Xiaomi",
    price: "$1,250.00",
    image: card9,
    alt: "Robot Vacuum Cleaner",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 8,
    title: "Dyson Grey",
    brand: "Dyson",
    price: "$1,400.00",
    image: card7,
    alt: "Dyson Grey",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 9,
    title: "Air Pods Pro",
    brand: "Apple",
    price: "$2,300.00",
    image: card2,
    alt: "Air Pods Pro",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 10,
    title: "Grill Modern One",
    brand: "Tefal",
    price: "$190.00",
    image: product3,
    alt: "Grill Modern One",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 11,
    title: "Sandwich maker OP12",
    brand: "Tefal",
    price: "$110.00",
    image: product9,
    alt: "Sandwich maker OP12",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 12,
    title: "Slow cooker",
    brand: "Tefal",
    price: "$60.00",
    image: product4,
    alt: "Slow cooker",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 13,
    title: "Scullion",
    brand: "Bosch",
    price: "$195.00",
    image: product6,
    alt: "Scullion",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 14,
    title: "Classic Toster",
    brand: "Phillips",
    price: "$230.00",
    image: product8,
    alt: "Classic Toster",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 15,
    title: "Yogurt Maker",
    brand: "Xiaomi",
    price: "$170.00",
    image: product7,
    alt: "Yogurt Maker",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 16,
    title: "Coffee Machine",
    brand: "Phillips",
    price: "$100.00",
    image: product1,
    alt: "Coffee Machine",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
  {
    id: 17,
    title: "Macbook Pro 13' 2020 M1",
    brand: "Apple",
    price: "$140.00",
    image: product2,
    alt: "Macbook Pro 13' 2020 M1",
    description: `Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
    posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
    risus enim, vitae posuere neque laoreet condimentum. Proin vitae
    malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
    porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
    amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
    eleifend mattis convallis.`,
  },
];
