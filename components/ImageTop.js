import React, { useState } from 'react';
import LoopingText from './LoopingText';
import Image from 'next/image';
import styles from '@/styles/Components.module.css'
const ImageTop = ({ title, url, color }) => {
  return (
    <div className={`${styles.sectionImageTop} ${styles.wfSection}`}>
      <Image
        src={url}
        width={500}
        height={500}
        alt='dd'
        className={`${styles.imageTop}`}
      />
      <div className="strip">
        <LoopingText text={title} size='big' velocity={0.08} color={color} />
      </div>
    </div>

  );
};

export default ImageTop;
