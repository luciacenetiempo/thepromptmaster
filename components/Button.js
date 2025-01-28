"use client"
import ReactGA from 'react-ga';

const Button = (props) => {
  const trackLink = () => {
    ReactGA.event({
      category: 'User Interaction',
      action: 'External Link',
      label: props.text,
    });
  };

  return (
    <div className='content rich-text-block'>
    <a 
      href={props.url} 
      alt={props.alt}  
      className="button w-button"
      onClick={() => {trackLink('Corso Prompt Master')}}
      target={props.target}
      >
        {props.text}
      </a>
    </div>
  );
};

export default Button;
