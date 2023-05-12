import { useContext } from "react";

import Header from "../../components/Header";
import HeaderNav from "../../components/HeaderNav";
import FooterNav from "../../components/FooterNav";
import Footer from "../../components/Footer";
import NavPopup from "../NavPopup";
import { PopupContext } from "../../features/Context";

const Layout = ({ children, navTitle }) => {
  const { isOpenPopup } = useContext(PopupContext);
  return (
    <>
      <Header />
      <HeaderNav title={navTitle} />
      {isOpenPopup ? <NavPopup /> : null}
      {children}
      <FooterNav />
      <Footer />
    </>
  );
};

export default Layout;
