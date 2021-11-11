
import { Link } from 'react-router-dom';

const HomeList = ({data}) => {
  return(
      data.map(data => {
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

export default HomeList;