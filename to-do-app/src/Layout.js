import { Outlet, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";

function Layout() {
  return (
    <>
      <flex class="hidden md:flex space-x-6 drop-shadow">
        <Link to="/" className="hover:text-red text-4xl text-white">
          Home
        </Link>
        <Link to="/About" className="hover:text-red text-4xl text-white">
          About
        </Link>
      </flex>

      <Outlet />
    </>
  );
}

export default Layout;
