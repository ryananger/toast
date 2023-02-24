import React, {useEffect, useState} from 'react';
import {IoIosCloseCircle as Close} from 'react-icons/io';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const Reserve = function() {
  const [vis, setVis] = useState('visible');
  const [mod, setMod] = useState('');

  var closeReserve = function(e) {
    e.preventDefault();

    setVis('hidden');
    setMod('close');

    setTimeout(()=>{st.setReserve(false)}, 500);
  };

  var renderPartyOptions = function() {
    var options = [];

    for (var i = 2; i <= 20; i++) {
      options.push(<option key={i} value={i}>{i + ' people.'}</option>);
    }

    return options;
  };

  var renderTimeOptions = function() {
    var options = [];
    var end = 2;

    var i = 8;
    while (i !== end) {
      var m = 'am';

      if (i >= 12) {
        m = 'pm';

        if (i > 12) {
          i -= 12;
        }
      };

      options.push(<option key={'time' + i} value={i}>{i + ':00' + m}</option>);
      options.push(<option key={'time' + i + ':30'} value={i + ':30'}>{i + ':30' + m}</option>);

      i++;
    }

    return options;
  };

  return (
    <div className={'reserve v ' + vis} onClick={closeReserve}>
      <form id='reservation' className={mod} onClick={(e)=>{e.stopPropagation()}} onSubmit={closeReserve}>
        <div className='reserveHead h'>
          <h3>Reserve your table!</h3>
          <Close className='icon' size={24} onClick={closeReserve}/>
        </div>
        <input placeholder='Name.'/>
        <select name='partySize'>
          {renderPartyOptions()}
        </select>
        <div className='h'>
          <input name='date' type='date'/>
          <select name='time'>
            {renderTimeOptions()}
          </select>
        </div>
        <input placeholder='Email (required.)'/>
        <input placeholder='Phone (optional.)'/>
        <br/><br/>
        <input type='submit' value='SUBMIT'/>
      </form>
    </div>
  )
};

export default Reserve;