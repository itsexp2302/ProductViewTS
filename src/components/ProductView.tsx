import { useQuery } from 'react-query';
import { fetchProducts } from '../api/api';
import './ProductView.css'

const ProductList = () => {
  const { data } = useQuery('products', fetchProducts);

   console.log('Products:', data); // Add this line to log products

   const products = data?.products;

  if (!products) {
    return <p>No data received</p>;
  }

  if (!Array.isArray(products)) {
    return (
      <div>
        <p>Data is not in the expected array format:</p>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <p className="product-title">{product.title}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-price">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
