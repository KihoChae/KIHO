import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

function ProductGrid({ products }) {
  // 제품 데이터를 그리드 형식으로 표시
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;