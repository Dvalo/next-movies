import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="inner-layout">
      <Sidebar />
      {children}
    </div>
  );
}

export default Layout;
