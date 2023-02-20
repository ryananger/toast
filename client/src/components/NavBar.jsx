import React, {useEffect, useState} from 'react';
import {FaFacebookSquare as FB,
        FaInstagram as Insta} from 'react-icons/fa';
import {AiFillPhone as Phone} from 'react-icons/ai';

import '../styles/navbar.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const NavBar = function() {
  const view    = st.view;
  const setView = st.setView;

  var checkView = function(str) {
      return view === str ? ' viewing' : '';
  };

  return (
    <div className='navbar v'>
      <img className='navImage' src={`${process.env.URL}/public/toast_small.png`}/>
      <div className='navButtons v'>
        <div className={'navButton' + checkView('home')}    onClick={()=>{setView('home')}}>HOME</div>
        <div className={'navButton' + checkView('menu')}    onClick={()=>{setView('menu')}}>MENU</div>
        <div className={'navButton' + checkView('gallery')} onClick={()=>{setView('gallery')}}>GALLERY</div>
      </div>
      <div className='orderButton h' onClick={()=>{window.open('https://ferndale.ordereatattoast.com/', '_blank')}}>
        <h1>ORDER</h1>
      </div>
      <div className='contactButtons h'>
        <FB    className='icon' size={36} onClick={()=>{window.open('https://www.facebook.com/toastferndale', '_blank')}}/>
        <Insta className='icon' size={36} onClick={()=>{window.open('https://www.instagram.com/EatAtToast/', '_blank')}}/>
        <Phone className='icon' size={36} onClick={()=>{window.open('tel:+12483980444', '_blank')}}/>
      </div>
    </div>
  )
};

export default NavBar;

