import Image from "next/image";
import styles from '../styles/HeroBanner.module.scss'
import Cta from "./Cta";
import Button from "./Button";
const HeroBannerImg = (props) => {
  return (
    <div className={`${styles.herobanner}`}>
      <figure>
        <Image
          src={props.src}
          alt={props.alt}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover'
          }}
        />
      </figure>
    </div>
  );
};

export default HeroBannerImg;
