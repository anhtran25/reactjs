
// import Data from '../data/Data';
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
// import "./asset/home.css";
import { list, remove, update } from "../api/productAPI";


const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    list().then((response) => setProducts(response.data));
  }, []);

  const onHandleRemove = (id) => {
    remove(id).then(() => {
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    });
  };
  return(
    
    products.map(data => {
       
          return (
           
              <div class="card" key={data.id}>
                <img width={200} height={150} class="img" src={data.image}/>
                <div class="card-body">
                  <h5 class="card-title">{data.name}</h5>
                  <p class="card-text">Price: {data.price} <span> đ</span></p>                 
                <Link to="/details">
                <a href="#" class="btn btn-primary">Chi tiết SP</a>
                </Link>
  
                </div>
              </div>
              
          )
          
      })
      
  )
}

export default ProductsList;



