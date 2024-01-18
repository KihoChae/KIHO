import { Link } from 'react-router-dom';
import React from 'react';
import { FaShoppingCart, FaUser, FaSignOutAlt } from 'react-icons/fa'; // react-icons 라이브러리에서 아이콘을 가져옵니다.
import './Header.css';


function Header() {
  return (
    <header className="header">
     <h1 className="shop-title"><Link to="/">Liquor Shop</Link></h1> {/* 로고를 클릭하면 홈으로 이동 */}
    <div className="header-icons">
      <Link to="/cart"><FaShoppingCart className="icon" /></Link> {/* 장바구니 페이지로 이동 */}
      <Link to="/profile"><FaUser className="icon" /></Link> {/*사용자 프로필 페이지로 이동 */}
    <FaSignOutAlt className="icon" onClick={() => { console.log('로그아웃 처리');}} /> 
    </div>
    </header>
  );
  }
  
  export default Header;