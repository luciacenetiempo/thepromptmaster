import React from 'react';
import styles from '../styles/Components.module.scss'

const Gallery = (props) => {
  // Assumendo che 'props.urls' sia la stringa contenente gli URL separati da virgole
  const imageUrls = props.urls.split(',');

  return (
    <div className="w-layout-grid grid-licensing">
      {imageUrls.map((url, index) => (
        <img key={index} src={url.trim()} className="licensing" />
      ))}
    </div>
  );
};

export default Gallery;
