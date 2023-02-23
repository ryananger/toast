import React, {useEffect, useState} from 'react';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import SmoothImage from './SmoothImage.jsx';

const Home = function() {
  return (
    <div className='home v'>
      <h2>We are TOAST.</h2>
      <br/>
      We are a fun and appealing cafe serving a breakfast and lunch menu featuring beloved classics and new innovations,
      including omelets, hashes, creative spins on eggs benedict, delicious sammiches and fresh salads.
      The vintage toasters lining the walls and classic diner-style furniture create a unique atmosphere our guests love.
      <br/><br/>
      For lunch, select from a variety of sandwiches, fresh salads, and homemade soups. At Toast of Ferndale, the food is excellent,
      the atmosphere is bright, and the service friendly, no matter the meal.
      <br/><br/>
      <b>Located just north of the vibrant and friendly Downtown district of Ferndale!</b>
      <br/><br/>
      <div style={{textAlign: 'center', width: '100%'}}>
        <SmoothImage className='map' src={`${st.URL}/public/map.webp`} onClick={()=>{window.open(mapURL, '_blank')}}/><br/><br/>
        <b>
          23144 Woodward Ave.<br/>
          Ferndale, Michigan 48220
        </b>
        <br/><br/>
        <div className='v'>
          <b>Hours: </b><br/>
          <div className='h' style={{width: '260px'}}>
            <div>Monday</div>
            <div>8 AM–3 PM</div>
          </div>
          <div className='h' style={{width: '260px'}}>
            <div>Tuesday</div>
            <div>8 AM–3 PM</div>
          </div>
          <div className='h' style={{width: '260px'}}>
            <div>Wednesday</div>
            <div>8 AM–3 PM</div>
          </div>
          <div className='h' style={{width: '260px'}}>
            <div>Thursday</div>
            <div>8 AM–3 PM</div>
          </div>
          <div className='h' style={{width: '260px'}}>
            <div>Friday</div>
            <div>8 AM–3 PM</div>
          </div>
          <div className='h' style={{width: '260px'}}>
            <div>Saturday</div>
            <div>8 AM–4 PM</div>
          </div>
          <div className='h' style={{width: '260px'}}>
            <div>Sunday</div>
            <div>8 AM–4 PM</div>
          </div>
        </div>
        <br/><br/>
      </div>
    </div>
  )
};

var mapURL = 'https://www.google.com/maps/place/Toast/@42.4639118,-83.1375129,17z/data=!4m6!3m5!1s0x8824cf1d926934b3:0xb184307545bc1b56!8m2!3d42.4640068!4d-83.1364722!16s%2Fg%2F1tfsthjw!5m2!1e2!1e4?hl=en';

export default Home;

