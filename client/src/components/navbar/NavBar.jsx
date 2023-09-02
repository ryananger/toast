import React, {useEffect, useState} from 'react';
import {FaFacebookSquare as FB,
        FaInstagram as Insta} from 'react-icons/fa';
import {AiFillPhone as Phone} from 'react-icons/ai';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import SmoothImage from '../SmoothImage.jsx';

const NavBar = function() {
  const view    = st.view;
  const setView = st.setView;
  const [style, setStyle] = useState({});

  var checkView = function(str) {
      return view === str ? ' viewing' : '';
  };

  var button = function(str) {
    return <div className={'navButton' + checkView(str)} onClick={()=>{setView(str)}}>{str.toUpperCase()}</div>
  };

  useEffect(()=>{
    setTimeout(()=>{
      setStyle({right: '0px'});
    }, 1000);
  }, []);

  return (
    <div className='slide' style={{width: '260px', height: '100%', position: 'relative'}}>
      <div className='navbar v' style={style}>
        <div className='v' style={{width: '100%', height: '400px', overflow: 'hidden'}}>
          <img className='navImage' src={`${st.URL}/public/toast_small.webp`}/>
          <div className='navButtons v'>
            {button('home')}
            {button('menu')}
            {button('gallery')}
          </div>
        </div>
        <div className='v' style={{width: '100%'}}>
          <div className='reserveButton icon h' onClick={()=>{st.setReserve(true)}}>
            <h1>RESERVE</h1>
          </div>
          <div className='orderButton h' onClick={()=>{window.open('https://ferndale.ordereatattoast.com/', '_blank')}}>
            <h1>ORDER</h1>
          </div>
          <div className='contactButtons h'>
            <FB    className='icon' size={36} onClick={()=>{window.open('https://www.facebook.com/toastferndale', '_blank')}}/>
            <Insta className='icon' size={36} onClick={()=>{window.open('https://www.instagram.com/toastferndale/', '_blank')}}/>
            <Phone className='icon' size={36} onClick={()=>{window.open('tel:+12483980444', '_blank')}}/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NavBar;

