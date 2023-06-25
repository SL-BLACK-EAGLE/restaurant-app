import Footer from "./Footer";
import Navbar from "./Navbar";

// const arrow function

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
