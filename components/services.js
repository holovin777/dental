import Image from 'next/image'
import styles from '../styles/services.module.css'

export default function Services() {
  return (
    <>
      <div>
        <p className={styles.title}>LA NOSTRA GAMMA DI SERVIZI DI CURA DENTALE</p>
        <p className={styles.subTitle}>ILLUMINIAMO IL TUO SORRISO!</p>
      </div>
      <div className={styles.cardList}>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/images/services/service1.png"
              alt="Service 1 picture"
              width={400}
              height={400}
            />
          </div>
          <p className={styles.cardText}>
            SBIANCAMENTO DEI DENTI
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/images/services/service2.png"
              alt="Service 2 picture"
              width={400}
              height={400}
            />
          </div>
          <p className={styles.cardText}>
            TRATTAMENTO DELLE GENGIVE
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/images/services/service3.png"
              alt="Service 3 picture"
              width={400}
              height={400}
            />
          </div>
          <p className={styles.cardText}>
            APNEA NOTTURNA
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/images/services/service4.png"
              alt="Service 4 picture"
              width={400}
              height={400}
            />
          </div>
          <p className={styles.cardText}>
            CANALE RADICOLARE
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/images/services/service5.png"
              alt="Service 5 picture"
              width={400}
              height={400}
            />
          </div>
          <p className={styles.cardText}>
            RESTAURI
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <Image
              src="/images/services/service6.png"
              alt="Service 6 picture"
              width={400}
              height={400}
            />
          </div>
          <p className={styles.cardText}>
            CORONA DENTALE
          </p>
        </div>
      </div>
    </>
  )
}
