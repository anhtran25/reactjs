import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import "./index.css";
import IndexProduct from "./page/IndexProduct";
import ProductsList from "./show/Products";
import "./layout/assets/admin.css";


export default function App() {

  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
          
          <Route path="/" element={<LayoutWebsite />}>
           
            <Route index element={<div >Home</div>} />
            
            <Route
              path="products" element={<ProductsList />}
            />
          </Route>
          
         
          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={<Navigate to="product" />} />
            <Route path="product" element={<IndexProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}
