const Cta = (props) => {
  return (
    <a className="mainCta learn-more" href={props.url}>
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">{props.text}</span>
    </a>
  );
};

export default Cta;
