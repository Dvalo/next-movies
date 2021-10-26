import Searchbar from "./Searchbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="inner-layout">
      <Sidebar />
      <div className="inner-layout-content">
        <Searchbar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
