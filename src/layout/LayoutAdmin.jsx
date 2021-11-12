import { Link,Outlet } from "react-router-dom";


export default function LayoutAdmin() {
  return (
    // <div className="container-fluid">
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
    //     <li className="nav-item">
    //       <Link to="/product" className="nav-link">Quản lí Admin</Link>
    //     </li>

    //   </ul>
     
    //   </nav>
    //   <div className="contentt">
    //   <Outlet />
    //   </div>
    // </div>
    
    <div id="pcoded" class="pcoded">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">
            <nav class="navbar header-navbar pcoded-header">
                <div class="navbar-wrapper">
                    <div class="navbar-logo">
                        
                    <div class="main-body">
                                <h2>Chào mừng bạn đên với trang quản lí</h2>
                            </div>
                        <a class="mobile-options waves-effect waves-light">
                            <i class="ti-more"></i>
                        </a>
                    </div>
                    
                </div>
            </nav>

            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <nav class="pcoded-navbar">
                        <div class="sidebar_toggle"><a href="#"><i class="icon-close icons"></i></a></div>
                        <div class="pcoded-inner-navbar main-menu">           
                            <div class="pcoded-navigation-label">V1</div>
                            <ul class="pcoded-item pcoded-left-item">
                                <li class="pcoded-hasmenu">
                                    
                                    <li className="nav-item">
                                      <Link to="/product" className="nav-link">Quản lí Sản Phẩm</Link>
                                    </li>
                                </li>
                            </ul>


                        </div>
                    </nav>
                    <div class="pcoded-content">
                        
              
                        
                        <div class="pcoded-inner-content">
                            
                            
                               <div className="contentt">
                                  <Outlet />    
                                  </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
  );
}
