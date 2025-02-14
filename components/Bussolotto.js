import styles from '../styles/Header.module.scss'
import Image from 'next/image';
const Bussolotto = (props) => {
  return (
    <a className={`${styles.header__bussolotto}`} href='https://www.linkedin.com/in/luciacenetiempo/' target='_blank'>
      <figure>
        <Image
          src='/images/lucia-cenetiempo-avatar.webp'
          width={150}
          height={150}
          alt='Lucia Cenetiempo - Esperta in generative AI'
          className={`${styles.imageTop}`} 
        />
      </figure>
      <div className={`${styles.header__bussolotto__col}`}>
        <span className={`${styles.header__bussolotto__col__name}`}>Lucia Cenetiempo</span>
        <span className={`${styles.header__bussolotto__col__role}`}>Esperta Generative AI</span>
      </div>
    </a>
  );
};

export default Bussolotto;
