import React, { useState } from 'react';
import styles from '@/styles/Components.module.css';
import Image from 'next/image';

const ImageWide = (props) => {
  return (
    <div className='content-wide rich-text-block'>
      <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
        <div>
          {/* <img
          src={props.src}
          className={`${styles.imageTop}`} 
          alt={props.alt}
        /> */}
          <Image
            priority
            src={props.src}
            width={props.width}
            height={props.height}
            alt={props.alt}
            className={`${styles.imageTop}`}
          />
        </div>
        {
          props.alt ? (<>
            <figcaption>{props.alt}</figcaption>
          </>) : (
            ''
          )
        }
      </figure>
    </div>
  );
};

export default ImageWide;
