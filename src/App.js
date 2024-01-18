
import React, { useEffect, useState } from'react';
import Header from './components/Header/Header';
import CategoryMenu from './components/CategoryMenu/CategoryMenu';
import ProductGrid from './components/ProductGrid/ProductGrid';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import productsData from './data/products.json';
// import CartPage from './components/CartPage/CartPage';
// import HomePage from './components/HomePage/HomePage';
// import ProductDetailPage from './components/ProductDetailPage/ProductDetailPage';


import './App.css';

function App() {
  const [products, setProducts] = useState(productsData); // 제품 데이터 상태
  const [filteredProducts, setFilteredProducts] = useState(productsData); // 필터링된 제품 데이터 상태
  const handleSelectCategory = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.categories.includes(category));
      setFilteredProducts(filtered);
    }
  };

  useEffect(() =>{
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(productsData.slice(0, 8));
      } catch (error) { 
        console.error('제품을 불러오는데 실패했습니다:', error)
      }
    };
     fetchProducts();
    setFilteredProducts(productsData.slice(0, 8));
  },[] );

// 카테고리 선택 시 호출될 함수


return (
  <BrowserRouter>
    <div className="App">
      <Header />
      <CategoryMenu onSelectCategory={handleSelectCategory} />
      <ProductGrid products={filteredProducts} />
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes> */}
    </div>
  </BrowserRouter>
);

}

export default App;




