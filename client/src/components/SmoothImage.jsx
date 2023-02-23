import React, {useEffect, useState} from 'react';

const SmoothImage = function({className, src, index, onClick}) {
  const [mod, setMod] = useState(' hidden');

  return (
    <img
      className={className + mod}
      src={src}
      index={index}
      onClick={onClick}
      onLoad={()=>{setMod(' visible')}}
      loading='lazy'
      alt={src}
    />
  );
};

export default SmoothImage;