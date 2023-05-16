import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "../../components/Loader";
import { CartContext, PopupContext } from "../Context/index";
const Main = lazy(() => import("../../pages/Main"));
const Products = lazy(() => import("../../pages/Products"));
const About = lazy(() => import("../../pages/About"));
const Error = lazy(() => import("../../pages/404"));
const Contact = lazy(() => import("../../pages/Contact"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const Brands = lazy(() => import("../../pages/Brands"));
const SinglePageCard = lazy(() => import("../../pages/SingleCardPage"));

const App = () => {
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <PopupContext.Provider
      value={{ isOpenPopup, setOpenPopup, clickedLink, setClickedLink }}
    >
      <CartContext.Provider value={{ cartItem, setCartItem }}>
        <Router basename="/e-commerce">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/:cardId" element={<SinglePageCard />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </Suspense>
        </Router>
      </CartContext.Provider>
    </PopupContext.Provider>
  );
};

export default App;
