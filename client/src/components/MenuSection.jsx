import React, {useEffect, useState} from 'react';

import '../styles/menu.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const MenuCategory = function({category}) {
  var renderItems = function() {
    var items = [];

    category.map(function(item, i) {
      if (i === 0) {
        items.push(<h3 key={item} id={item} className='menuLabel'>{item}</h3>);
      } else {
        items.push(
          <div key={i} className='menuItem h'>
            <div className='menuInfo'>
              <b>{item.name}</b><br/>
              <small>{item.info}</small>
            </div>
            <div>{item.price}</div>
          </div>
        )
      }
    })


    return items;
  };

  return (
    <div className='menuCategory'>
      {renderItems()}
    </div>
  )
};

export default MenuCategory;

