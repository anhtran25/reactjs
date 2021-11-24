import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import { read } from "../api/productAPI";

const ProductDetail = () => {
  const { id } = useParams(); // { id: }
  const [products, setProduct] = useState({});

  useEffect(() => {
    read(id).then((response) => setProduct(response.data));
  }, [id]);

  return (
    products && (
      <div>
        <div className="container py-5">
              
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img width={400} height={400} src={products.image} alt="products.name" className="imeg" />
                </div>
               
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <h2>Tên sản phẩm: {products.name}</h2>
                 
                  <h4 className="text-blue">
                    <strong >Giá: {products.price}<span> đ</span></strong>
                  </h4> 
                  <h4>Mô tả: <p class="card-text">{products.desc}</p>  </h4>
                  <div className="quantity">
                    Số lượng: <input type="number" />
                  </div>
                  <div>
                    
                    <Link to="#">
                      
                       <button className="bt-danger">Add to cart</button>
                     
                    </Link>
                      
                   
                  </div>
                </div>
                
              </div>
        </div>
        <div className="relatedproduct">
          <h4>Sản phẩm liên quan</h4>
          <div className="row"></div>
          
        </div>
        
        
      </div>
    )
  );
};
export default ProductDetail;
