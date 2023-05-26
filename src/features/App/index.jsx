import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwt_decode from "jwt-decode";

import Loader from "../../components/Loader";
import { CartContext, PopupContext, LoginContext } from "../Context/index";
import { notifyError } from "../../helpers/notify";
import useRequestService from "../../service";

const Main = lazy(() => import("../../pages/Main"));
const Products = lazy(() => import("../../pages/Products"));
const About = lazy(() => import("../../pages/About"));
const Error = lazy(() => import("../../pages/404"));
const Contact = lazy(() => import("../../pages/Contact"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const Brands = lazy(() => import("../../pages/Brands"));
const SinglePageCard = lazy(() => import("../../pages/SingleCardPage"));
const Checkout = lazy(() => import("../../pages/Checkout"));
const Admin = lazy(() => import("../../pages/Admin"));

const App = () => {
  const [user, setUser] = useState({});
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);
  const [cartItem, setCartItem] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const { findUser } = useRequestService();

  useEffect(() => {
    if (localStorage.getItem("token") === null) return;
    const data = {
      id: jwt_decode(localStorage.getItem("token")).user_id,
    };
    findUser(data).then(onReceive).catch(onError);
    // eslint-disable-next-line
  }, []);

  const onReceive = (data) => {
    setUser({
      email: data.email,
    });
  };

  const onError = (e) => {
    notifyError(e);
  };

  return (
    <LoginContext.Provider value={{ user, setUser }}>
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
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/:cardId" element={<SinglePageCard />} />
                <Route path="/*" element={<Error />} />
              </Routes>
            </Suspense>
          </Router>
          <ToastContainer theme="dark" />
        </CartContext.Provider>
      </PopupContext.Provider>
    </LoginContext.Provider>
  );
};

export default App;
