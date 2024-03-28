import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Components.module.css';

const ImageRegular = (props) => {
  return (
    <div className='content rich-text-block'>
      <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
        <div>
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

export default ImageRegular;
