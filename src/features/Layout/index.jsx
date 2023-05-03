import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import FooterNav from "../../components/FooterNav";
import Footer from "../../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <HeaderNav />
      {children}
      <FooterNav />
      <Footer />
    </>
  );
};

export default Layout;
