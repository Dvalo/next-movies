import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="inner-layout">
      <Sidebar />
      <div className="inner-layout-content">
        <Searchbar />
        {children}
        <Footer isFluid={true} />
      </div>
    </div>
  );
}

export default Layout;
