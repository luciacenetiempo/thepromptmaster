import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import styles from '@/styles/Components.module.css';

const VideoRegular = (props) => {
  return (
    <div className='content rich-text-block'>
      <video autoPlay controls loop >
        <source src={props.src} />
      </video>
    </div>
  );
};

export default VideoRegular;
