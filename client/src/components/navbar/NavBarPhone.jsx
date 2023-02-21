import React, {useEffect, useState} from 'react';
import {FaFacebookSquare as FB,
        FaInstagram as Insta} from 'react-icons/fa';
import {AiFillPhone as Phone} from 'react-icons/ai';
import {GiHamburgerMenu as Stack} from 'react-icons/gi';

import '../../styles/navbarPh.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const NavBarPhone = function() {
  const view    = st.view;
  const setView = st.setView;

  var button = function(str) {
    return <div className='navButtonPh' onClick={()=>{setView(str)}}><p>{str.toUpperCase()}</p></div>
  };

  const nav = {
    full: (
      <div className='navbarPh v'>
        <img className='navImagePh' src={`${process.env.URL}/public/toast_float.png`}/>
        <div className='navButtonsPh v'>
          {button('home')}
          {button('menu')}
          {button('gallery')}
          <div className='orderButtonPh h' onClick={()=>{window.open('https://ferndale.ordereatattoast.com/', '_blank')}}>
            <h1>ORDER</h1>
          </div>
          <div className='contactButtonsPh h'>
            <FB    className='icon' size={36} onClick={()=>{window.open('https://www.facebook.com/toastferndale', '_blank')}}/>
            <Insta className='icon' size={36} onClick={()=>{window.open('https://www.instagram.com/EatAtToast/', '_blank')}}/>
            <Phone className='icon' size={36} onClick={()=>{window.open('tel:+12483980444', '_blank')}}/>
          </div>
        </div>
      </div>
    ),
    min: (
      <div className='navMin h' onClick={()=>{setView('nav')}}>
        <h2>TOAST</h2>
        <Stack size={24} style={{paddingTop: '2px'}}/>
      </div>
    )
  }

  useEffect(()=>{st.setView('nav')}, []);

  return view === 'nav' ? nav.full : nav.min;
};

export default NavBarPhone;

