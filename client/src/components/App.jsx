import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import Alert   from './Alert.jsx';
import Login   from './Login.jsx';

var cookie = helpers.cookieParse();

const App = function() {
  useEffect(()=>{helpers.alert('This is an app with an alert.')});

  return (
    <div id='app' className='app'>
      <Alert />
      App
    </div>
  )
};

export default App;

