

import React from 'react';
import './CategoryMenu.css';

function CategoryMenu({ onSelectCategory}) {
    return (
        <div className="category-menu-container">
            <h2 className="category-title">Products</h2>
        <div className="category-menu">
            <button onClick={() => onSelectCategory('all')}>전체</button>
            <button onClick={() => onSelectCategory('red')}>Red Wines</button>
            <button onClick={() => onSelectCategory('white')}>White Wine / Sparkling</button>
            <button onClick={() => onSelectCategory('whisky')}>Whisky</button>
            {/*카테고리 추가 시 여기에*/}
        </div>
       </div> 

    );

}

export default CategoryMenu;