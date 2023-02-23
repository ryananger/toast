import React, {useEffect, useState} from 'react';

import st            from 'ryscott-st';
import {ax, helpers} from 'util';

import SmoothImage from './SmoothImage.jsx';

const Gallery = function() {
  const [image, setImage] = useState(null);

  var renderImages = function() {
    var images = [];

    for (var i = 1; i <= 7; i++) {
      var src = st.URL + '/public/food' + i + '.webp';

      images.push(
        <div key={i} className='imageContainer v'>
          <SmoothImage className='galleryImage img' src={src} index={i} onClick={(e)=>{setImage(e.target.getAttribute('index'))}}/>
        </div>
      );
    }

    return images;
  };

  var renderModal = function() {
    var src = st.URL + '/public/food' + image + '.webp';

    return (
      <div className='galleryModal v'>
        <SmoothImage className='zoomImage img' src={src} onClick={()=>(setImage(null))}/>
      </div>
    );
  };

  return (
    <div className='gallery h'>
      {renderImages()}
      {image && renderModal()}
    </div>
  )
};

export default Gallery;

