import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ShowList from './show/ShowList';
import HomeList from './show/Home';

import Data from './data/Data';
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import {useEffect, useState, create} from "react";
// import "./index.css";

export default function App() {
  

  const [data, SetData] = useState(Data);
  const [status, setStatus] = useState(false);
  const [stat, setStat] = useState(false);
  
  //removedHandles
  const removedHandles = (id) =>{
      const newData = data.filter(data => data.id !== id)
      SetData(newData)
  }
  // const getItem = (id) => {
  //   const product = this.state.products.find(item => item.id === id);
  //   return product;
  // }


  // const handleDetail = (id) => {
  //   const product = this.getItem(id);
  //   this.setState(() => {
  //     return { detailProduct: product }
  //   })
  // }
  // useEffect(() => {
  //   document.querySelector('.form-add').addEventListener('submit', function(e){
  //     e.preventDefault();
  //     const data = {
  //       name: document.querySelector('#name').value,
  //       img: document.querySelector('#img').value,
  //       price: document.querySelector('#price').value
  //     }
  //     create(data)
  //     .then(() => alert('Them thành công !'))
  //   })
    
  // }, []);
  return (
    <div className="App">
       <BrowserRouter>
       
        <Routes>
          
          <Route path="/" element={<LayoutWebsite />}>
           
            <Route index element={<div >Home</div>} />
            
            <Route
              path="product"
              element={<div>
                 <div className="product">
                 <div className="container"><HomeList data={data}/></div>
                     </div>
                 </div>
              }
            />
          </Route>
          
         
          <Route path="admin/*" element={<LayoutAdmin />}>
            <Route index element={<Navigate to="product" />} />
            {/* <Route path="dashboard" element={<div>Dashboard Product</div>} /> */}
            <Route path="product" element={
              
               <div className="AppAdmin">
               <header>
                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  
                   <div className="collapse navbar-collapse" >
                    
                       <button onClick={() => setStatus(!status)} className={status === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{status === true ? 'Close' : 'Danh Sách Sản Phẩm'}</button>
                       {/* <button onClick={() => setStat(!stat)} className={stat === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{stat === true ? 'Close' : 'Thêm Sản Phẩm'}</button> */}
                   </div>
                   <div className="collapse navbar-collapse" >
                    
                       {/* <button onClick={() => setStatus(!status)} className={status === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{status === true ? 'Close' : 'Danh Sách Sản Phẩm'}</button> */}
                       <button onClick={() => setStat(!stat)} className={stat === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{stat === true ? 'Close' : 'Thêm Sản Phẩm'}</button>
                   </div>
                 </nav>
               </header>
               {stat ? <main className="content">
                 <h2 className="mt-4 mb-2">Thêm Sản Phẩm</h2>

                     <form className="form-add">
                      <input type="text"className="form-control" id="name"  placeholder="Tên Sản Phẩm" required/>
                      <input type="text"className="form-control" id="img"  placeholder="Ảnh Sản Phẩm" required/>
                      <input type="number"className="form-control" id="price"  placeholder="Giá Sản Phẩm" required/>
                      <button type="submit" class="btn btn-outline-primary">Thêm</button>
                      </form>
               </main> : null}
             
            
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
