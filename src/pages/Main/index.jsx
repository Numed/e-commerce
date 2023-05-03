import Footer from "../../components/Footer";
import FooterNav from "../../components/FooterNav";
import MainPageHeader from "../../features/MainPage/Header";
import MainPageContent from "../../features/MainPage/Content";

const MainPage = () => {
  return (
    <>
      <MainPageHeader />
      <MainPageContent />
      <FooterNav />
      <Footer />
    </>
  );
};

export default MainPage;
