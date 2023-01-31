import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st      from './state.js';
import ax      from '../util/ax.js';
import input   from '../util/input.js';
import helpers from '../util/helpers.js';

import Alert   from './Alert.jsx';
import Login   from './Login.jsx';

var cookie = cookieParse();

const App = function() {
  return (
    <div id='app' className='app'>
      <Alert />
      App
    </div>
  )
};

export default App;

