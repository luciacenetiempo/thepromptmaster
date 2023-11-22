import React, { useState } from 'react';
import styles from '@/styles/Components.module.css';
import Image from 'next/image';

const ImageWide = (props) => {
  return (
    <div className='content-wide rich-text-block'>
      <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
        <div>
        <img
          src={props.src}
          className={`${styles.imageTop}`} 
          alt={props.alt}
        />
        </div>
        {
        props.caption ? (<>
          <figcaption>{props.caption}</figcaption>
          </>) : (
            ''
          )
        }
      </figure>
    </div>
  );
};

export default ImageWide;
