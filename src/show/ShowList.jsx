
const ShowList = ({data, removed, edit}) => {
    return(
        data.map(data => {
            return (
                <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td><img width={200} src={data.image}/></td>
                    <td><button onClick={() => edit(data.id)} type="button" className="btn btn-danger">Edit</button></td>
                    <td><button onClick={() => removed(data.id)} type="button" className="btn btn-danger">Xóa</button></td>
                </tr>
            )
        })
    )
}

export default ShowList;