import { Link, Outlet } from "react-router-dom";

export default function LayoutAdmin() {
  return (
    <div>
      <ul className="navbar-nav align-items-center">
        
        <li className="nav-item ml-5">
          <Link to="product" className="nav-link">Product Manager</Link>
        </li>
      </ul>
      <Outlet />
      
    </div>
  );
}
