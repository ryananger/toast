import React, {useEffect, useState} from 'react';
import {FaFacebookSquare as FB,
        FaInstagram as Insta} from 'react-icons/fa';
import {AiFillPhone as Phone} from 'react-icons/ai';

import '../../styles/navbarP.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const NavBar = function() {
  const view    = st.view;
  const setView = st.setView;

  var checkView = function(str) {
      return view === str ? ' viewingP' : '';
  };

  var button = function(str) {
    return <div className={'navButtonP' + checkView(str)} onClick={()=>{setView(str)}}><p>{str.toUpperCase()}</p></div>
  };

  return (
    <div className='navbarP h'>
      <img className='navImageP' src={`${process.env.URL}/public/toast_float.png`}/>
      <div className='navButtonsP v'>
        <div className='h' style={{width: '100%'}}>
          <div className='orderButtonP h' onClick={()=>{window.open('https://ferndale.ordereatattoast.com/', '_blank')}}>
            <h1>ORDER</h1>
          </div>
          <div className='contactButtonsP h'>
            <FB    className='icon' size={36} onClick={()=>{window.open('https://www.facebook.com/toastferndale', '_blank')}}/>
            <Insta className='icon' size={36} onClick={()=>{window.open('https://www.instagram.com/EatAtToast/', '_blank')}}/>
            <Phone className='icon' size={36} onClick={()=>{window.open('tel:+12483980444', '_blank')}}/>
          </div>
        </div>
        <div className='h' style={{width: '100%'}}>
          {button('home')}
          {button('menu')}
          {button('gallery')}
        </div>
      </div>
    </div>
  )
};

export default NavBar;

