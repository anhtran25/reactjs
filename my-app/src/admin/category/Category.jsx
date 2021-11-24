import axios from "axios";
import {useEffect, useState} from "react";
import { listcate, removecate} from "../../api/categoryAPI";
import ShowCategory from "./ShowCategory";



const Category = () => {
    const [category, setCategorys] = useState([]);
  const [status, setStatus] = useState(false);
  
  useEffect(() => {
    listcate().then((response) => setCategorys(response.data));
  }, []);

  const onHandleRemove = (id) => {
    removecate(id).then(() => {
      const newCategory = category.filter((item) => item.id !== id);
      setCategorys(newCategory);
    });
  };
  useEffect(() => {
    document.querySelector('.form-add').addEventListener('submit', function (e){
      e.preventDefault();
      const data = {
        cate_name: document.querySelector('#cate_name').value,
        
      }
      axios.post('http://localhost:4000/category',data)
      .then(() => alert('thêm thành công!'))
    
    })
    
  }, []);
    return (
        <div className="AppAdmin">
        <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <div className="collapse navbar-collapse" >
             
                <button onClick={() => setStatus(!status)} className={status === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{status === true ? 'Close' : 'Danh Sách Danh Mục'}</button>
                {/* <button onClick={() => setStat(!stat)} className={stat === true ? 'btn btn-outline-danger' : 'btn btn-outline-success'} type="submit">{stat === true ? 'Close' : 'Thêm Sản Phẩm'}</button> */}
            </div>
            <div className="collapse navbar-collapse" >
             
                <button onClick={() => {
                    document.querySelector('.content').style.display="block";
                }} className='btn btn-outline-success' id="btadd">Thêm Danh Mục</button>
            </div>
            
          </nav>
        </header>
         < main className="content">
             
              <form className="form-add">
              <h2 className="mt-4 mb-2">Thêm Danh Mục</h2>
               <input type="text"className="form-control" id="cate_name"  placeholder="Tên Danh Mục" required/>
               <button type="submit" class="btn btn-outline-primary">Thêm</button>
               </form>
        </main> 
        
        {status ? <main className="container">
          <h2 className="mt-4 mb-2">Danh sách</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col"></th>
                
              </tr>
            </thead>
            <tbody>
              <ShowCategory category={category} onRemove={onHandleRemove}  />
            </tbody>
          </table>
        </main> : null}
      </div>
    )
}
export default Category;