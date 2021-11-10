import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ShowList from './show/ShowList';
import HomeList from './show/Home';
import Data from './data/Data';
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import { useState } from "react";
// import Products from "./Products";
// import ShowName from "./Showname";
import "./index.css";

export default function App() {
  

  const [data, SetData] = useState(Data);
  const [status, setStatus] = useState(false);
  
  //removedHandles
  const removedHandles = (id) =>{
      const newData = data.filter(data => data.id !== id)
      SetData(newData)
  }

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          {/* GIao diện dành cho website */}
          <Route path="/" element={<LayoutWebsite />}>
            {/* Mặc định khi truy cập / thì màn hình render ra home */}
            <Route index element={
          <div class="container">
            Home
            <tbody>
                     <HomeList data={data}/>
                   </tbody>
          </div>
          } />
            {/* khi truy cập /product thì màn hình render ra component Product */}
            <Route
              path="product"
              element={<div> san pham</div>
              }
            />
          </Route>

          {/* Giao diện dành cho Admin */}
          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<div>Dashboard Product</div>} />
            <Route path="product" element={
               <div className="App">
               <header>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
         
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                       <button onClick={() => setStatus(!status)} className={status === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{status === true ? 'Close' : 'Open'}</button>
                   </div>
                 </nav>
               </header>
               {status ? <main className="container">
                 <h2 className="mt-4 mb-2">Danh sách</h2>
                 <table className="table table-bordered">
                   <thead>
                     <tr>
                       <th scope="col">#</th>
                       <th scope="col">Name</th>
                       <th scope="col">Image</th>
                       <th scope="col"></th>
                       
                     </tr>
                   </thead>
                   <tbody>
                     <ShowList data={data} removed={removedHandles} />
                   </tbody>
                 </table>
               </main> : null}
             </div>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}
