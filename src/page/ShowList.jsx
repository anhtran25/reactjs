


const ShowList = ({products, onRemove, editProduct}) => {
    return(
        products.map(data => {
            return (
                <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td><img width={200} src={data.image}/></td>
                    <td><button onClick={() => {document.querySelector('.contai').style.display="block";editProduct(data.id)}} type="button" className="btn btn-danger" id="btnEdit">Edit</button></td>
                    <td><button onClick={() => onRemove(data.id)} type="button" className="btn btn-danger" >Xóa</button></td>
                </tr>
            )
        })
    )
}

export default ShowList;