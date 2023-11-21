import React, { useState } from 'react';
import styles from '@/styles/Components.module.css';

const Quote = (props) => {
  return (
    <div className='content rich-text-block'>
    <blockquote>
      {props.text}
    </blockquote>
    </div>
  );
};

export default Quote;
