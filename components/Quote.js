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
