import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/call.module.css'

export default function Call() {
  return (
    <div className={styles.call}>
      <div className={styles.phone}>
        <a href="tel:999999999"><Image src="/images/phone.svg" height={64} width={64} alt="phone" /></a>
      </div>
    </div>
  )
}
