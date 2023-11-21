import React, { useState } from 'react';
import styles from '@/styles/Components.module.css';

const VideoWide = (props) => {
  return (
    <div className='content-wide rich-text-block'>
      <video src={props.src} autoplay="0" controlslist="nodownload"></video>
    </div>
  );
};

export default VideoWide;
