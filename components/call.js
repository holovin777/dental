import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/call.module.css'

export default function Call() {
  const phoneNum = process.env.NEXT_PUBLIC_PHONE_NUM
  return (
    <div className={styles.call}>
      <div className={styles.phone}>
        <a href={`tel:${phoneNum}`}><Image src="/images/phone.svg" height={64} width={64} alt="phone" /></a>
      </div>
    </div>
  )
}
