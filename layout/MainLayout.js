import Header from "./Header";
import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
