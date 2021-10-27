import Footer from "./Footer";
import Header from "./Header";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <main className="main-content">
        <Header />
        {children}
      </main>
      <Footer isFluid={false} />
    </>
  );
}

export default MainLayout;
