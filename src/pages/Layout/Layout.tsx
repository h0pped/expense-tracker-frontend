import { Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <div id="main">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
