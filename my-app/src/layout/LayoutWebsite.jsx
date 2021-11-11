import { Link, Outlet } from "react-router-dom";

export default function LayoutWebsite() {
  return (
    <div>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">Home Page</Link>
        </li>
        <li className="nav-item ml-5">
          <Link to="/product" className="nav-link">Product</Link>
        </li>
        <li className="nav-item ml-5">
          <Link to="/product/123" className="nav-link">Chi tiet</Link>
        </li>
        <li className="nav-item ml-5">
          <Link to="/category" className="nav-link">Danh muc</Link>
        </li>
        <li className="nav-item ml-5">
          <Link to="/admin" className="nav-link">Quản trị</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}