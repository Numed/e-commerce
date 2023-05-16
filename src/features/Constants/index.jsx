import headerImage from "../../img/main-header-bg.png";
import headerImage2 from "../../img/main-header-bg2.jpg";
import headerImage3 from "../../img/main-header-bg3.jpg";

import card1 from "../../img/Cards/card1.png";
import card2 from "../../img/Cards/card2.png";
import card3 from "../../img/Cards/card3.png";
import card4 from "../../img/Cards/card4.png";
import card5 from "../../img/Cards/card5.png";
import card6 from "../../img/Cards/card6.png";
import card7 from "../../img/Cards/card7.png";
import card8 from "../../img/Cards/card8.png";
import card9 from "../../img/Cards/card9.png";

import product1 from "../../img/Products/product1.svg";
import product2 from "../../img/Products/product2.svg";
import product3 from "../../img/Products/product3.svg";
import product4 from "../../img/Products/product4.svg";
import product5 from "../../img/Products/product5.svg";
import product6 from "../../img/Products/product6.svg";
import product7 from "../../img/Products/product7.svg";
import product8 from "../../img/Products/product8.svg";
import product9 from "../../img/Products/product9.svg";

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

export const brandPathes = [{ title: "Mr & Mrs White", path: "/brands" }];

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

export const mainCardsList = [
  {
    id: 1,
    title: "Classic Tan Round",
    brand: "Mr & Mrs White",
    price: "$230.00",
    image: card5,
    alt: "Classic Tan Round",
  },
  {
    id: 2,
    title: "Classic Black",
    brand: "Mr & Mrs White",
    price: "$170.00",
    image: card6,
    alt: "Classic Black",
  },
  {
    id: 3,
    title: "Oak Ladder",
    brand: "Mr & Mrs White",
    price: "$750.00",
    image: card8,
    alt: "Oak Ladder",
  },
  {
    id: 4,
    title: "Box Leg Table",
    brand: "Mr & Mrs White",
    price: "$3,080.00",
    image: card3,
    alt: "Box Leg Table",
  },
  {
    id: 5,
    title: "Kiss Cuddle Coffee Table",
    brand: "Mr & Mrs White",
    price: "$1,045.00",
    image: card4,
    alt: "Kiss Cuddle Coffee Table",
  },
  {
    id: 6,
    title: "Atelier Stool",
    brand: "Mr & Mrs White",
    price: "$355.00",
    image: card1,
    alt: "Atelier Stool",
  },
  {
    id: 7,
    title: "Lapse Mirror",
    brand: "Mr & Mrs White",
    price: "$1,250.00",
    image: card9,
    alt: "Lapse Mirror",
  },
  {
    id: 8,
    title: "Box Drawers",
    brand: "Mr & Mrs White",
    price: "$1,630.00",
    image: card7,
    alt: "Box Drawers",
  },
  {
    id: 9,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
];

export const productsList = [
  {
    id: 1,
    title: "Classic Paneled Tan",
    brand: "Mr & Mrs White",
    price: "$190.00",
    image: product3,
    alt: "Classic Paneled Tan",
  },
  {
    id: 2,
    title: "Leather Navy",
    brand: "Mr & Mrs White",
    price: "$110.00",
    image: product9,
    alt: "Leather Navy",
  },
  {
    id: 3,
    title: "Linen Classic",
    brand: "Mr & Mrs White",
    price: "$60.00",
    image: product4,
    alt: "Linen Classic",
  },
  {
    id: 4,
    title: "Linen Round",
    brand: "Mr & Mrs White",
    price: "$195.00",
    image: product6,
    alt: "Linen Round",
  },
  {
    id: 5,
    title: "Classic Tan Round",
    brand: "Mr & Mrs White",
    price: "$230.00",
    image: product8,
    alt: "Classic Tan Round",
  },
  {
    id: 6,
    title: "Classic Black",
    brand: "Mr & Mrs White",
    price: "$170.00",
    image: product7,
    alt: "Classic Black",
  },
  {
    id: 7,
    title: "Grey Cowhide",
    brand: "Mr & Mrs White",
    price: "$100.00",
    image: product1,
    alt: "Grey Cowhide",
  },
  {
    id: 8,
    title: "Classic Tan",
    brand: "Mr & Mrs White",
    price: "$140.00",
    image: product2,
    alt: "Classic Tan",
  },
  {
    id: 9,
    title: "Oak Ladder",
    brand: "Mr & Mrs White",
    price: "$750.00",
    image: product5,
    alt: "Oak Ladder",
  },
  {
    id: 10,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
  {
    id: 11,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
  {
    id: 12,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
  {
    id: 13,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
  {
    id: 14,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
  {
    id: 15,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
  {
    id: 16,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
  {
    id: 17,
    title: "Beam Bed",
    brand: "Mr & Mrs White",
    price: "$2,300.00",
    image: card2,
    alt: "Beam Bed",
  },
];
