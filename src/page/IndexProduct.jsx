import axios from "axios";
// import Data from '../data/Data';
import {useEffect, useState} from "react";
import ShowList from './ShowList';
import { list, remove,read, update } from "../api/productAPI";
const IndexProduct = () => {
    const [products, setProducts] = useState([]);
  const [status, setStatus] = useState(false);
  const [stat, setStat] = useState(false);
  useEffect(() => {
    list().then((response) => setProducts(response.data));
  }, []);

  const onHandleRemove = (id) => {
    remove(id).then(() => {
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    });
  };
  
  function editProduct(id){
    read(id)
    
    .then(response => {
        document.querySelector('#nameEdit').value = response.data.name
        document.querySelector('#imageEdit').value = response.data.image
        document.querySelector('#priceEdit').value = response.data.price
        document.querySelector('#btnEdit').value = response.data.id
    })
    
    document.querySelector('.form-update').addEventListener('submit', function (c) {
    c.preventDefault();
    let idProduct = document.querySelector('#btnEdit').value
    const products = {
        name: document.querySelector('#nameEdit').value,
        image: document.querySelector('#imageEdit').value,
        price: document.querySelector('#priceEdit').value
    }
    console.log(idProduct);
    update(idProduct, products)
        .then(() =>
        list().then((response) => setProducts(response.data))
        )
       
    })
}
    useEffect(() => {
        document.querySelector('.form-add').addEventListener('submit', function (e){
          e.preventDefault();
          const data = {
            name: document.querySelector('#name').value,
            image: document.querySelector('#image').value,
            price: document.querySelector('#price').value
          }
          axios.post('https://618dc659fe09aa0017440895.mockapi.io/products',data)
          .then(() => alert('thêm thành công!'))
        //   window.location="http://localhost:3000/admin/product";
        })
        
      }, []);
      
    
    return (
        <div className="AppAdmin">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <div className="collapse navbar-collapse" >
             
                <button onClick={() => setStatus(!status)} className={status === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{status === true ? 'Close' : 'Danh Sách Sản Phẩm'}</button>
                {/* <button onClick={() => setStat(!stat)} className={stat === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{stat === true ? 'Close' : 'Thêm Sản Phẩm'}</button> */}
            </div>
            <div className="collapse navbar-collapse" >
             
                <button onClick={() => {
                    document.querySelector('.content').style.display="block";
                }} className='btn btn-outline-success' id="btadd">Thêm sản phẩm</button>
            </div>
            
          </nav>
        </header>
         < main className="content">
             <h2 className="mt-4 mb-2">Thêm Sản Phẩm</h2>
              <form className="form-add">
               <input type="text"className="form-control" id="name"  placeholder="Tên Sản Phẩm" required/>
               <input type="text"className="form-control" id="image"  placeholder="Ảnh Sản Phẩm" required/>
               <input type="number"className="form-control" id="price"  placeholder="Giá Sản Phẩm" required/>
               <button type="submit" class="btn btn-outline-primary">Thêm</button>
               </form>
        </main> 
        < main className="contai">
             <h2 className="mt-4 mb-2">Sua Sản Phẩm</h2>
              <form className="form-update">
               <input type="text"className="form-control" id="nameEdit"  placeholder="Tên Sản Phẩm" required/>
               <input type="text"className="form-control" id="imageEdit"  placeholder="Ảnh Sản Phẩm" required/>
               <input type="number"className="form-control" id="priceEdit"  placeholder="Giá Sản Phẩm" required/>
               <button type="submit" class="btn btn-outline-primary" id="btEdit">Sua</button>
               </form>
        </main> 
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
              <ShowList products={products} onRemove={onHandleRemove} editProduct={editProduct} />
            </tbody>
          </table>
        </main> : null}
      </div>
    )
}
export default IndexProduct;