import React, {useEffect, useState} from 'react';
import {FaFacebookSquare as FB,
        FaInstagram as Insta} from 'react-icons/fa';
import {AiFillPhone as Phone} from 'react-icons/ai';

import '../styles/style.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import Alert          from './Alert.jsx';
import Home           from './Home.jsx';
import Menu           from './Menu.jsx';
import Gallery        from './Gallery.jsx';
import NavBar         from './navbar/NavBar.jsx';
import NavBarPortrait from './navbar/NavBarPortrait.jsx';
import NavBarPhone    from './navbar/NavBarPhone.jsx';

const mode = window.innerWidth < 540 ? 'phone' : (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');

const App = function() {
  const [user, setUser] = st.newState('user', useState(null));
  const [view, setView] = st.newState('view', useState(mode === 'phone' ? 'nav' : 'home'));

  const views = {
    home:    <Home />,
    menu:    <Menu />,
    gallery: <Gallery />
  };

  var renderImages = function() {
    const viewImages = {
      home:  [5, 3, 6],
      menu:  [2, 4, 7],
      order: [1, 3, 5],
      nav:   []
    };

    return (
      <div className='mainImages v'>
        <img className='mainImage img' src={`${process.env.URL}/public/food${viewImages[view][0]}.jpg`}/>
        <img className='mainImage img' src={`${process.env.URL}/public/food${viewImages[view][1]}.jpg`}/>
        <img className='mainImage img' src={`${process.env.URL}/public/food${viewImages[view][2]}.jpg`}/>
      </div>
    );
  };

  const modes = {
    landscape: (
      <div className='h' style={{height: '100%', width: '100%', maxWidth: '1500px'}}>
        <NavBar/>
        <div className='main h'>
          {views[view]}
          {view !== 'gallery' && renderImages()}
        </div>
      </div>
    ),
    portrait: (
      <div className='v' style={{height: '100%', width: '100%'}}>
        <NavBarPortrait/>
        <div className='main portrait v'>
          {views[view]}
        </div>
      </div>
    ),
    phone: (
      <div className='v' style={{height: '100%', width: '100%'}}>
        <NavBarPhone/>
        <div className='main phone v'>
          {views[view]}
        </div>
      </div>
    ),
  };

  return (
    <div id='app' className='app h'>
      <Alert />
      <img className='bgImage' src={`${process.env.URL}/public/brick.jpg`}/>
      {modes[mode]}
    </div>
  )
};

export default App;

