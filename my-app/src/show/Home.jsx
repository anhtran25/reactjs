import React from "react";
import {useEffect, useState} from "react";

import { list, remove } from "../api/productAPI";


const Home = () => {
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
  return(

        <div class="banner">
          <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
            <img width={200} height={150} class="img" src={data.image}/>
            </div>
            {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>
  )
    })
    // <div>
    // <div class="product_lemonTea">
    //   <div class="title-product_hot">
    //     <h1 id="title_deal">Đồ Ăn Nhanh</h1>
    //   </div>
      
    //   <div class="box-product_Hot">
      
    //   </div>
    // </div>
    
    // <div class="product_drinkTea">
    //   <div class="title-product_hot">
    //     <h1 id="title_deal">Đồ Uống</h1>
    //   </div>
     
    //   <div class="box-product_Hot">
      
    //   </div>
     
    // </div>
    // </div>
    
  )
}
    
export default Home;

