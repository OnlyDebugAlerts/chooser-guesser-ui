import React, {useEffect} from 'react';

import './index.scss';
import CategoryItem from './categoty-item';
import {useDispatch} from 'react-redux';
import {setUserIp} from '../../../../actions/user';

export default () => {
  const categories = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserIp());
  }, [dispatch]);

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
