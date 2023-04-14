export default function Products({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          {product.name}-{product.price}
        </li>
      ))}
    </ul>
  );
}
