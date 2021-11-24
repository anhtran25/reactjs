import { Link, Outlet } from "react-router-dom";


export default function LayoutWebsite() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light ">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link to="/" className="nav-link">Trang chủ</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link">Sản phẩm</Link>
        </li>
        <li className="nav-item">
          <Link to="/category" className="nav-link">Danh muc</Link>
        </li>
        
      </ul>
      <ul className="navbar-nav">
          <li className="option">
            <Link to="/cart" className="nav-link"> My Cart</Link>
          </li>
          <li className="option">
            <Link to="/admin" className="nav-link">Quản trị</Link>
          </li>
      </ul>
      <div className="Login">
          <Link to="signup"><button className="btn btn-danger">Đăng kí</button></Link>
        
          <Link to="signin"><button className="btn btn-danger">Đăng nhập</button></Link> 
      </div>
      </nav>
     
      <div className="container">
      <Outlet />
      </div>
    </div>
    
    
  );
}