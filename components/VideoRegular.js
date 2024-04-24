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
