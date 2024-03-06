// ProductItem.tsx
import React from 'react';

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div key={product.id} className="product-item">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductItem;
