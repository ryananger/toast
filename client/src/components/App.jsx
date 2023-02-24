import React, {Suspense, useEffect, useState} from 'react';
import {FaFacebookSquare as FB,
        FaInstagram as Insta} from 'react-icons/fa';
import {AiFillPhone as Phone} from 'react-icons/ai';

import 'styles';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import Home        from './Home.jsx';
import SmoothImage from './SmoothImage.jsx';
import Lazy        from './Lazy.jsx';

const Reserve        = React.lazy(() => import('./Reserve.jsx'));
const Menu           = React.lazy(() => import('./menu/Menu.jsx'));
const Gallery        = React.lazy(() => import('./Gallery.jsx'));
const NavBar         = React.lazy(() => import('./navbar/NavBar.jsx'));
const NavBarPortrait = React.lazy(() => import('./navbar/NavBarPortrait.jsx'));
const NavBarPhone    = React.lazy(() => import('./navbar/NavBarPhone.jsx'));

const mode = window.innerWidth < 540 ? 'phone' : (window.innerWidth > window.innerHeight ? 'landscape' : 'portrait');
const URL  = 'https://ryananger.github.io/toast';

const App = function() {
  const [user, setUser]       = st.newState('user', useState(null));
  const [view, setView]       = st.newState('view', useState(mode === 'phone' ? 'nav' : 'home'));
  const [reserve, setReserve] = st.newState('reserve', useState(false));

  st.URL = URL;

  const fallback = <div style={{width: '100%', height: '100%'}}/>;

  const views = {
    home: <Home />,
    menu: (
      <Lazy Component={Menu} fallback={fallback}/>
    ),
    gallery: (
      <Lazy Component={Gallery} fallback={fallback}/>
    )
  };

  var renderImages = function() {
    const viewImages = {
      home:    [5, 3, 6],
      menu:    [2, 4, 7],
      order:   [1, 3, 5],
      reserve: [2, 4, 7],
      nav:     []
    };

    return (
      <div className='mainImages v'>
        {viewImages[view].map(function(num, i) {
          return <SmoothImage key={i} className='mainImage img' src={`${URL}/public/food${num}.webp`}/>
        })}
      </div>
    );
  };

  const modes = {
    landscape: (
      <div className='h' style={{height: '100%', width: '100%', maxWidth: '1500px'}}>
        <Lazy Component={NavBar} fallback={<div className='navbar'/>}/>
        <div className='main h'>
            {views[view]}
          {view !== 'gallery' && renderImages()}
        </div>
      </div>
    ),
    portrait: (
      <div className='v' style={{height: '100%', width: '100%'}}>
        <Lazy Component={NavBarPortrait} fallback={<div className='navbarP'/>}/>
        <div className='main portrait v'>
            {views[view]}
        </div>
      </div>
    ),
    phone: (
      <div className='v' style={{height: '100%', width: '100%'}}>
        <Lazy Component={NavBarPhone} fallback={<div className='navbarPh'/>}/>
        <div className='main phone v'>
            {views[view]}
        </div>
      </div>
    )
  };

  return (
    <div id='app' className='app h'>
      <img className='bgImage' src={`${URL}/public/brick.webp`} alt='bg'/>
      {modes[mode]}
      {reserve && <Lazy Component={Reserve}/>}
    </div>
  )
};

export default App;

