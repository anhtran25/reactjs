const HomeList = ({data}) => {
  return(
      data.map(data => {
          return (
            <div className="container"  key={data.id}>
              
                  <td>{data.name}</td>
                  <td><img width={200} src={data.image}/></td>
                  
              
              </div>
          )
      })
  )
}

export default HomeList;