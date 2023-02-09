import React, {useEffect, useState} from 'react';

import '../styles/style.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import Alert   from './Alert.jsx';
import Login   from './Login.jsx';

var cookie = helpers.cookieParse();

const App = function() {
  const [user, setUser] = st.newState('user', useState(null));
  const [view, setView] = st.newState('view', useState('home'));

  useEffect(()=>{helpers.alert('This is an app with an alert.')});

  return (
    <div id='app' className='app v'>
      <Alert />
      <h1>
        App
      </h1>
      <div className='v'>
        <h3>This is a template app that uses 'ryscott-st' for state management.</h3>
        <br/><br/>
        <h2>Press F to create an alert.</h2>
      </div>
    </div>
  )
};

export default App;

