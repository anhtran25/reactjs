
import { Link } from 'react-router-dom';
import {useEffect, useState} from "react";
import { list, remove } from "../api/productAPI";


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

           
              
      <div className="py-5">
        <div className="containerr">
          
          <div className="card" key={data.id}>
              <img width={200} height={150} className="img" src={data.image}/>
              <div className="card-body">
                <h5 className="card-title"><Link to={`${data.id}`}>{data.name}</Link></h5>
                <p className="card-text">Price: {data.price} <span> đ</span></p> 
                            
              </div>
            </div>
          
        </div>
      </div>
              
          )
          
      })
      
  )
}

export default ProductsList;



