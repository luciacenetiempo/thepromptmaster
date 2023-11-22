import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Components.module.css';

const ImageRegular = (props) => {
  return (
    <div className='content rich-text-block'>
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

export default ImageRegular;
