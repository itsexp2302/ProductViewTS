
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchProducts } from '../api/api';

import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { data } = useQuery('products', fetchProducts);
  const [products, setProducts] = useState(data?.products || []);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

  const handleAddProduct = () => {
    
    if (!newProduct.name || !newProduct.description || !newProduct.price) {
      alert('Please fill in all fields');
      return;
    }

    
    const addedProduct = {
      id: products.length + 1, 
      ...newProduct,
    };

    
    setProducts([...products, addedProduct]);

    
    saveProductsToJSON([...products, addedProduct]);

    
    setNewProduct({ name: '', description: '', price: '' });
  };

  const saveProductsToJSON = async (updatedProducts: any) => {
    try {
      await axios.put('http://localhost:3000/data.json', { products: updatedProducts });
    } catch (error) {
      console.error('Error saving products to data.json', error);
    }
  };

  return (
    <div className="product-list-container">
      <h2>Product List</h2>
      <div className="product-list">
        {products.map((product: any) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <div>
        <h3>Add New Product</h3>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
          </label>
          <button type="button" onClick={handleAddProduct}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductList;
