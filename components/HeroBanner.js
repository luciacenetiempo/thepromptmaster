import Image from "next/image";
import styles from '../styles/HeroBanner.module.scss'
import Cta from "./Cta";
import Button from "./Button";
const HeroBanner = (props) => {
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
        <div className={`${styles.herobanner__content}`}>
          <span className={`${styles.text}`}><span className={`${styles.icon}`}>👋</span> Ciao! Ho una domanda per te.</span>
          <h1>quanto ne sai di<br/>GEN AI?</h1>
          <p>Non importa a che punto sei, con la formazione giusta andrai davvero lontano.<br/>
          Qualunque sia il tuo business, l'intelligenza artificiale è il tuo alleato.<br/><strong>Impara con me. Cresci con l’AI.</strong></p>
          <div className={`${styles.herobanner__content__ctaRow}`}>
            <Button text="Parliamone!" url="https://calendar.app.google/uVDLew261bvqQyrTA" target="_blank"/>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default HeroBanner;
