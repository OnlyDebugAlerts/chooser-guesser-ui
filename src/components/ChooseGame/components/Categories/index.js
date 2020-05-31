import React from 'react';

import './index.scss';
import CategoryItem from './categoty-item';

export default () => {
  const categories = [];

  function handleCategory(name) {
    console.log(name);
  }

  return (
    <div className="category-container">
      {
        categories.map((category, index) =>
          <CategoryItem
            key={index}
            category={category.name}
            onClick={() => handleCategory(category.name)}
          />
        )
      }
    </div>
  )
}
