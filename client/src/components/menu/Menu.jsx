import React, {useEffect, useState} from 'react';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import MenuCategory from './MenuCategory.jsx';
import menuData from './menuData.js';

const Menu = function() {
  const menu = menuData;

  var renderMenu = function() {
    var rendered = [];

    for (var key in menu.sections) {
      var section = menu.sections[key];

      rendered.push(<h2 key={key} className='menuLabel'>{key.toUpperCase()}</h2>);

      var renderItems = function() {
        var items = [];

        for (var label in section) {
          var category = section[label];

          items.push(<MenuCategory key={category} category={category} />);
        }

        return items;
      };

      rendered.push(
        <div className='menuSection'>
          {renderItems()}
        </div>
      );
    }

    return rendered;
  };

  return (
    <div className='menu v'>
      <div className='menuNav h'>
        <div className='menuButton icon' onClick={()=>{document.getElementById('JUMPSTART').scrollIntoView({behavior: 'smooth'})}}>jumpstart</div>
        <div className='menuButton icon' onClick={()=>{document.getElementById('TOAST-TAILS').scrollIntoView({behavior: 'smooth'})}}>toast-tails</div>
        <div className='menuButton icon' onClick={()=>{document.getElementById('STARTERS').scrollIntoView({behavior: 'smooth'})}}>starters</div>
        <div className='menuButton icon' onClick={()=>{document.getElementById('GOURMET OMELETS').scrollIntoView({behavior: 'smooth'})}}>omelets</div>
        <div className='menuButton icon' onClick={()=>{document.getElementById('TASTY SWEETS').scrollIntoView({behavior: 'smooth'})}}>sweets</div>
        <div className='menuButton icon' onClick={()=>{document.getElementById('TOAST FAVORITES').scrollIntoView({behavior: 'smooth'})}}>favorites</div>
        <div className='menuButton icon' onClick={()=>{document.getElementById('SOUP').scrollIntoView({behavior: 'smooth'})}}>soup and sandwich</div>
      </div>
      <div className='menuContainer v'>
        {renderMenu()}
      </div>
    </div>
  )
};

export default Menu;

