import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import "./index.css";
import IndexProduct from "./admin/IndexProduct";
import ProductsList from "./show/Products";
import ProductDetail from "./show/ProductDetail";
import EditProduct from "./admin/EditProduct";
import { create, list, update } from "./api/productAPI";
import { updatecate } from "./api/categoryAPI";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import  'react-toastify/dist/ReactToastify.css';
import Home from "./show/Home";
import Signup from "./show/Signup";
import Signin from "./show/Signin"
import Category from "./admin/category/Category";
import AddCategory from "./admin/category/AddCategory";
import EditCategory from "./admin/category/EditCategory";
import AddProduct from "./admin/AddProduct";





export default function App() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    list().then((response) => setProducts(response.data));
  }, []);
  const onHandleUpdate = (product) => {

    update(product).then(() => {
      const newProduct = data.map(item => item.id === product.id ? product : item)
      toast.success("Đã cập nhật sản phẩm thành công");
      setData(newProduct);
    })
  };
  const onHandleAdd = (product) => {
    const fakeProduct = { ...product };
    console.log("Add thành công",fakeProduct);
    create(fakeProduct).then((response) =>{
      setProducts([...data, response.data])
    })
    
  };
  const onHandleUpdateCate = (category) => {

    updatecate(category).then(() => {
      const newCategory = data.map(item => item.id === category.id ? category : item)
      toast.success("Đã cập nhật danh mục thành công");
      setCategory(newCategory);
    })
  };

  return (
    <div className="App">
       <ToastContainer/>
       <BrowserRouter>
       
        <Routes>
          
          <Route path="/" element={<LayoutWebsite />}>
           
            <Route index element={<Home/>}/>
            
            <Route
              path="products" element={<ProductsList />}
            />
            <Route path="products/:id" element={<ProductDetail/>} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          
         
          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={<Navigate to="products" />} />
            <Route path="products" element={<IndexProduct />} />
            <Route path="products/add" element={<AddProduct onAdd={onHandleAdd} />}/>
            <Route
              path="products/:id/edit"
              element={<EditProduct onUpdate={onHandleUpdate}/>}
            />
            <Route path="category" element={<Category/>} />
            <Route path="category/add" element={<AddCategory/>} />
            <Route
              path="category/:id/edit"
              element={<EditCategory onUpdate={onHandleUpdateCate}/>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}
