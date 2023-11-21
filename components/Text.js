import React, { useState } from 'react';
import styles from '@/styles/Components.module.css';

const Text = (props) => {
  return (
    <div className='content rich-text-block'>
      {
        props.text.startsWith("<") ? (
          <div dangerouslySetInnerHTML={{ __html: props.text }} />
        ) : (
          <p dangerouslySetInnerHTML={{ __html: props.text }} />
        )
      }
    </div>
  );
};

export default Text;
