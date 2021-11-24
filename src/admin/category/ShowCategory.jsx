import { Link } from "react-router-dom";

const ShowCategory = ({category, onRemove}) => {
    return(
        category.map(data => {
            return (
                <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td><h5>{data.cate_name}</h5></td>
                    <td><Link to={`${data.id}/edit`}><button className="btn btn-danger">Edit</button></Link></td>                   
                    <td><button onClick={() => onRemove(data.id)} type="button" className="btn btn-danger" >Xóa</button></td>
                </tr>
            )
        })
    )
}

export default ShowCategory;