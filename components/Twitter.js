import { Tweet } from 'react-tweet'

const Twitter = ({id}) => {
  return (
    <div className='content rich-text-block'>
      <Tweet id={id} />
    </div>
  );
};

export default Twitter;
