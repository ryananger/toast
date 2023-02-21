import React, {useEffect, useState} from 'react';

import '../styles/gallery.css';
import st            from 'ryscott-st';
import {ax, helpers} from 'util';

const Gallery = function() {
  const [image, setImage] = useState(null);

  var renderImages = function() {
    var images = [];

    for (var i = 1; i <= 7; i++) {
      var src = st.URL + '/public/food' + i + '.jpg';

      images.push(
        <div key={i} className='imageContainer v'>
          <img className='galleryImage img' src={src} index={i} onClick={(e)=>{setImage(e.target.getAttribute('index'))}}/>
        </div>
      );
    }

    return images;
  };

  var renderModal = function() {
    var src = st.URL + '/public/food' + image + '.jpg';

    return (
      <div className='galleryModal v'>
        <img className='zoomImage img' src={src} onClick={()=>{setImage(null)}}/>
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

