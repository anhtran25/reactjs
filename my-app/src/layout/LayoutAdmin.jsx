import { Link,Outlet } from "react-router-dom";
import "./adLayout.css";


export default function LayoutAdmin() {
  return (
    <div className="pcoded">
       
            
                <div className="navbar-wrapper">
                        <div className="main-body">
                                    <h2 className="TitltieAd">Chào mừng bạn đến với trang quản lí</h2>
                        </div>      
                </div>
              
            <div className="pcoded-main-container">
                          <div className="navb">                       
                            <ul className="pcoded-item pcoded-left-item">
                                    <li className="nav-item">
                                      <Link to="/admin" ><h3>Quản lí Sản Phẩm</h3></Link>
                                    </li>
                                    <li className="nav-item">
                                      <Link to="/admin/category" ><h3>Quản lí Danh mục</h3></Link>
                                    </li>
                                    {/* <li className="nav-item">
                                      <Link to="#" ><h3>Quản User</h3></Link>
                                    </li> */}
                                
                            </ul>
                          </div> 
                        <div class="pcoded-inner-content">    
                               <div className="contentt">
                                  <Outlet />    
                                </div>
                        </div>
                    
              </div>
                    
    </div>
                    
  );
}
