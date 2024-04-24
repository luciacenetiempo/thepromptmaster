import LoopingText from './LoopingText';
import Image from 'next/image';
import styles from '../styles/Components.module.scss'

const ImageTop = ({ title, url, color, alt }) => {
  return (
    <div className={`${styles.sectionImageTop} ${styles.wfSection}`}>
      <Image
        priority
        src={url}
        width={500}
        height={500}
        alt={alt}
        className={`${styles.imageTop}`} 
      />
      <div className="strip">
        <LoopingText text={title} size='big' velocity={0.08} color={color} />
      </div>
    </div>

  );
};

export default ImageTop;
