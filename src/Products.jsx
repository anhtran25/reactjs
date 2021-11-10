const Products = ({ products, onRemove }) => {
    return (
      <table>
        <tbody>
          {products &&
            products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <h4>
                      {item.name}
                      <button onClick={() => onRemove(item.id)}>Remove</button>
                    </h4>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  };
  export default Products;
  