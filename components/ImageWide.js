import styles from '../styles/Components.module.scss'
import Image from 'next/image';

const ImageWide = (props) => {
  return (
    <div className={`content-wide rich-text-block ${styles.blogPost}`}>
      <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image">
        <div>
          <Image
            src={props.src}
            width={props.width}
            height={props.height}
            alt={props.alt}
            className={`${styles.imageTop}`}
          />
        </div>
        {
          props.alt ? (<>
            <figcaption>{props.alt}</figcaption>
          </>) : (
            ''
          )
        }
      </figure>
    </div>
  );
};

export default ImageWide;
