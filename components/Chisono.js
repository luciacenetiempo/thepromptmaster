
import styles from '../styles/Chisono.module.scss'
import Cta from "./Cta";

const Chisono = (props) => {
  return (
    <div className={`${styles.chiSono}`}>
      <div className={`${styles.chiSono__text} ${styles.chiSono__col}`}>
        <span className={`${styles.chiSono__smalltitle}`}>👋 IO SONO</span>
        <h1>Lucia<br/>Cenetiempo</h1>
        <p className={`${styles.chiSono__bigText}`}>
          Mi sono specializzata nel campo dell’AI generativa con una missione: <br/>
          <strong>rendere l’AI accessibile e comprensibile a tutti.</strong></p>
        <p className={`${styles.chiSono__smallText}`}>
        Il mio obiettivo è abbattere i miti su questa tecnologia e mostrare che, con le giuste competenze, può essere una risorsa per qualsiasi business.
        </p>
        <Cta text="Vuoi parlare con me?" href="https://calendar.app.google/uVDLew261bvqQyrTA" color="dark" target="_blank"/>
      </div>      
      <div className={`${styles.chiSono__video} ${styles.chiSono__col}`}>
        <video
          src="/images/lucia-cenetiempo-chi-sono.webm"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          style={{ border: 'none' }}
        />
      </div>
    </div>
  );
};

export default Chisono;
