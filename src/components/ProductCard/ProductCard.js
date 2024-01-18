import React from 'react';
import './ProductCard.css';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <Link to={`/product/${product.id}`}>
        <div className="product-card">
         <img src={product.image} alt={product.name} />
           <div className="product-info">
            <h3>{product.name}</h3>
            <div className="product-buy">
            <button className="btn-add-to-cart">장바구니에 담기</button>
            <span className="product-price">{product.price}  </span>
        </div>
      </div>  
      
    </div>
    </Link>
  );
}

export default ProductCard;