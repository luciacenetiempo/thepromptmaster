import React, { useState } from 'react';

const Button = (props) => {
  return (
    <div className='content rich-text-block'>
    <a href={props.url} alt={props.alt} className="button w-button">{props.text}</a>
    </div>
  );
};

export default Button;
