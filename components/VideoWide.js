import React, { useState } from 'react';
import styles from '@/styles/Components.module.css';

const VideoWide = (props) => {
  return (
    <div className='content-wide rich-text-block'>
    <video autoPlay controls loop >
      <source src={props.src} />
    </video>
    </div>
  );
};

export default VideoWide;
