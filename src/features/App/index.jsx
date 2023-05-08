import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "../../components/Loader";
const Main = lazy(() => import("../../pages/Main"));
const Products = lazy(() => import("../../pages/Products"));
const About = lazy(() => import("../../pages/About"));
const Error = lazy(() => import("../../pages/404"));
const Contact = lazy(() => import("../../pages/Contact"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const Brands = lazy(() => import("../../pages/Brands"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/info" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/brand" element={<Brands />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
